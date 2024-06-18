<template>
  <q-page class="page-timeline my-page">
    <q-card-section v-show="!c.loading && g.games.length" class="q-pa-none">
			
      <q-calendar-resource
        :ref="el => c.timeline = el"
        v-model="g.selectedDate"
        v-if="g.selectedDate"
        v-model:model-resources="c.selectedGames"
        :interval-start="c.interval.start"
        :interval-count="c.interval.count"
        resource-key="id"
        resource-label="name"
        locale="ru"
        hour24-format
        bordered
        cell-width="168"
        resource-min-height="0"
        resource-height="64"
        :dark="true"
        class="resource-timline"
      >
      <!-- :style="{ height: `min(100vh - 51px - 16px * 2, 51px * ${c.selectedGames.length} + 34px)` }" -->
        <template #resource-label="{ scope: { resource } }">
          <q-btn
            flat
            no-caps
            padding="0"
            style="height: 64px; width: 168px"
          >
            <div class="column flex-center text-subtitle">
              {{ resource.name }}
              <span class="text-caption text-grey text-middle q-mt-middle">
                {{ resource.duration }}
              </span>
            </div>
            <q-menu anchor="top right" self="top left" class="dark-shadow">
              <q-card style="width: 400px; white-space: pre-line">
                <q-img :src="resource.image" />
                <q-card-section>
                  {{ resource.description }}
                </q-card-section>
              </q-card>
            </q-menu>
          </q-btn>
        </template>

        <template #resource-intervals="{ scope }">
          <!-- Arena time indicator -->
          <div
            v-if="scope.resourceIndex === 0 && g.selectedDate === g.arenaDate"
            class="now-pointer"
            :title="g.arenaTime"
            :style="{ left: scope.timeStartPosX(g.arenaTime) - 4 + 'px' }"
          />
          <div v-for="(eventGroup, topIndex) in c.groupedBookings[scope.resource.id]" :key="topIndex">
            <template v-for="(event, index) in eventGroup" :key="index">
              <!-- Empty slot card -->

              <q-card
                v-if="event.isSlot"
                :v-ripple="event.fresh ? true : false"
                flat
                square
                class="row card-default"
                :style="getStyle(scope, event, eventGroup.length, index)"
                @click="event.fresh ? (g.selected = event, g.newBookingForm = true) : null"
              >
                <span class="q-focus-helper" />
                <q-card-section
                  class="col column flex-center q-pa-none"
                  :class="event.fresh ? 'cursor-pointer q-hoverable text-grey bg-dark' : 'bg-grey-2 text-grey-8'"
                >
                  <div>{{ useRuble(event.price) }}</div>
                  <div v-if="scope.resource.players_quantity_dependency">
                    <q-icon name="person" /> {{ event.available_for_booking }}
                  </div>
                </q-card-section>
                <q-btn
                  v-if="event.isUnder && event.fresh"
                  square
                  flat
                  size="sm"
                  icon="add"
                  class="slot-fab bg-deep-purple-14"
                >
                  <q-tooltip class="column flex-center bg-black border-gray" :offset="[10, 10]">
                    <div>{{ useRuble(event.price) }}</div>
                    <div>Доступно: {{ event.available_for_booking }}</div>
                  </q-tooltip>
                </q-btn>
              </q-card>

              <!-- Booking card -->
              <q-card
                v-if="!event.isSlot"
                flat
                bordered
                square
                :style="getStyle(scope, event, eventGroup.length, index)"
                class="row cursor-pointer card-default"
                :class="getClass(event.id)"
                @click="getBooking(event.id)"
              >
                <q-card-section
                  class="col column justify-center q-pa-none"
                  :class="`bg-${event.statusColor} ${eventGroup.length > 1 ? 'items-start' : 'flex-center'}`"
                >
                  <div
                    v-show="eventGroup.length < 4"
                    class="row ellipsis items-center"
                    :class="eventGroup.length > 1 ? 'justify-start q-pl-sm' : ''"
                    :style="{ fontSize: 14 - (eventGroup.length - 1) * 2 + 'px' }"
                  >
                    {{ event.order_number }}
                    <q-icon
                      v-if="event.status.value > -1 && event.status.value !== event.payStatus"
                      name="monetization_on"
                      :class="`q-ml-xs text-${event.payStatusColor}`"
                    />
                  </div>
                  <div
                    v-show="eventGroup.length < 2"
                    class="caption text-center"
                    style="padding-top: 2px"
                  >
                    {{ useRuble(event.payment) }} / {{ useRuble(event.amount_with_discount) }}
                  </div>
                </q-card-section>
                <q-tooltip class="bg-black border-gray" :offset="[10, 10]">
                  <!-- <div>{{ $t(event.status.label) }}</div> -->
                  <div>Заголовок</div>
                  <div><q-icon name="person" /> {{ event.players_qty }}</div>
                  <div>{{ useRuble(event.amount_with_discount) }}</div>
                </q-tooltip>
              </q-card>
            </template>
            <!-- Booking group card -->
            <q-card
              v-if="eventGroup.length > 1 && scope.resource.players_quantity_dependency"
              flat
              bordered
              square
              :style="getGroupStyle(scope, eventGroup[0], eventGroup.length)"
              class="row flex-center items-stretch card-default"
              @mouseover="scope.resource.groups[topIndex] = true"
            >
              <q-card-section class="col column flex-center q-pa-none bg-primary">
                <div>{{ eventGroup.length }}</div>
                <div v-if="eventGroup.length > 3" class="text-caption">
                  {{ useRuble(eventGroup.reduce((acc, e) => acc += e.payment, 0)) }} /
                  {{ useRuble(eventGroup.reduce((acc, e) => acc += e.amount_with_discount, 0)) }}
                </div>
              </q-card-section>
              <q-menu
                v-model="scope.resource.groups[topIndex]"
                cover
                class="column flex-center items-stretch no-wrap"
                @mouseleave="scope.resource.groups[topIndex] = false"
              >
                <q-card square class="column flex-center q-pa-none bg-primary">
                  {{ useRuble(eventGroup.reduce((acc, e) => acc += e.payment, 0)) }} /
                  {{ useRuble(eventGroup.reduce((acc, e) => acc += e.amount_with_discount, 0)) }}
                </q-card>
                <q-list>
                  <q-item
                    v-for="(event, index) in eventGroup"
                    :key="index"
                    v-ripple
                    clickable
                    dense
                    class="border-gray"
                    :class="`bg-${event.statusColor}`"
                    @click="getBooking(event.id)"
                  >
                    <q-item-section>
                      <q-item-label class="row flex-center">
                        {{ event.order_number }}
                        <q-icon
                          v-if="event.status.value > -1 && event.status.value !== event.payStatus"
                          name="monetization_on"
                          :class="`q-ml-xs text-${event.payStatusColor}`"
                        />
                      </q-item-label>
                      <q-item-label caption lines="1" class="row flex-center">
                        {{ useRuble(event.payment) }} / {{ useRuble(event.amount_with_discount) }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-btn
                  v-if="eventGroup[0].slot?.available_for_booking > 0 && eventGroup[0].slot?.fresh"
                  flat
                  no-caps
                  padding="0"
                  class="bg-deep-purple-14"
                  @click="g.selected = eventGroup[0].slot, g.newBookingForm = true"
                >
                  <!-- {{ $t('Доступно') }}: {{ eventGroup[0].slot?.available_for_booking }} -->
                  Доступно
                </q-btn>
              </q-menu>
            </q-card>
          </div>
        </template>

      </q-calendar-resource>

    </q-card-section>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { QCalendarResource } from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarResource.sass'
import { useMainStore } from 'src/stores/main.js'
import { useBookingsStore } from 'src/stores/bookings.js'
import { useRuble } from 'src/composables/useRuble.js'

const c = reactive({
  loading: true,
  timeline: null
})

const { g } = useMainStore()
const bookingsStore = useBookingsStore()

const getBooking = async (id) => {
  const booking = await bookingsStore.getBookingById(id)
  if (booking) {
    g.selected = booking
    g.bookingForm = true
  }
}

const getBookings = async (loading = true) => {
  if (!g.selectedDate) {
    g.selectedDate = g.arenaDate
    return
  }
  c.loading = loading
  await bookingsStore.getArenaGames()
  c.loading = false
}

onMounted( async () => {
  await bookingsStore.setLocation()
  g.mainCalendar = c.timeline
  watch(() => g.selectedArenaId, () => getBookings())
  watch(() => g.selectedDate, () => getBookings(c.loading))
  getBookings()
})

c.interval = computed(() => {
  let start = 10
  let count = 12
  if (g.timeFrame.length) {
    start = parseInt(g.timeFrame[0].slice(11, 13))
    const beginning = Date.parse(g.timeFrame[0])
    const end = Date.parse(g.timeFrame[1])
    const diff = (end - beginning) / (1000 * 60 * 60) + 1
    count = diff > 0 ? diff : 24 + diff
  }
  return { start, count }
})

c.filteredIds = computed(() => {
  if (!g.search) { return [] }
  const flat = g.games.flatMap(game => game.bookings)
  return flat.filter((item) => {
    return item.customer_name.includes(g.search) ||
      item.customer_phone_number.includes(g.search) ||
      item.customer_email.includes(g.search) ||
      item.order_number.includes(g.search) ||
      item.amount_with_discount.toString().includes(g.search)
  }).map(item => item.id)
})

c.selectedGames = computed(() => {
  const games = []
  g.games.forEach((game) => {
    if (
      g.selectedGameGroups.includes('all') ||
      g.selectedGameGroups.includes(game.game_group.id)
    ) {
      games.push(game)
    }
  })
  return games
})

c.groupedBookings = computed(() => {
  const groups = {}
  g.games.forEach((game) => {
    const eventGroups = []

    const slots = game.calendar[g.selectedDate] || []
    slots.forEach((slot) => {
      slot.isSlot = true
      slot.duration = 60
      slot.date = slot.start.slice(0, 10)
      slot.time = slot.start.slice(11, 16)
      slot.endLocal = new Date(slot.end).toLocaleString('sv', {
        timeZone: g.arenaTimezone
      })

      slot.fresh = slot.endLocal > g.arenaDateTime
      if (slot.date > g.selectedDate) {
        const hour = slot.time.slice(0, 2)
        slot._time = slot.time.replace(hour, 24 + parseInt(hour))
        slot._date = g.selectedDate
      }
      slot.gameId = game.id
      slot.isUnder = game.bookings.some((event) => {
        const intersection = (
          slot.start < event.game_session.end &&
          slot.end > event.game_session.start
        )
        // We do a little hacking
        if (intersection) {
          event.slot = slot
        }
        return intersection
      })
      if (slot.available_for_booking > 0) {
        eventGroups.push([slot])
      }
    })

    // Sorting
    game.bookings.sort((a, b) => {
      return a.time > b.time ? 1 : a.time < b.time ? -1 : 0
    })

    // Positioning
    game.bookings.forEach((event) => {
      if (event.date > g.selectedDate) {
        const hour = event.time.slice(0, 2)
        event._time = event.time.replace(hour, 24 + parseInt(hour))
      }
    })

    // After slots, reduce to groups (for a nested v-for)
    const events = game.bookings.reduce((grouped, event) => {
      const lastGroup = grouped.at(-1)
      if (lastGroup) {
        if (lastGroup.at(-1).end > event.time) {
          grouped.at(-1).push(event)
          return grouped
        }
      }
      return [...grouped, [event]]
    }, [])

    eventGroups.push(...events)
    groups[game.id] = eventGroups
  })
  return groups
})

const getStyle = (scope, event, size, index) => {
  return {
    overflow: 'hidden',
    position: 'absolute',
    left: scope.timeStartPosX(event._time || event.time) + 'px',
    width: scope.timeDurationWidth(event.duration) - 1 + 'px',
    height: 50 / size + 'px',
    top: index * 50 / size + 'px'
  }
}

const getGroupStyle = (scope, event, length) => {
  const offset = length > 3 ? 14 : 84
  return {
    overflow: 'hidden',
    position: 'absolute',
    left: scope.timeStartPosX(event._time || event.time) + offset + 'px',
    width: length > 3 ? '110px' : '40px',
    height: '50px'
  }
}

const getClass = id => c.filteredIds.includes(id) ? 'filtered' : ''

</script>

<style lang="sass"> 

</style>
