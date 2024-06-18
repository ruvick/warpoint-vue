<template>
  <div class="step-sec q-pb-md">
    <div class="text-title-minimized text-white">Шаг 2: Дата и время</div>
  </div>

  <div class="step-sec step-sec-v-date-picker row q-mt-xl">
    <div class="col q-mt-md q-pr-sm">
      <div class="text-title-minimized text-white">Выберите дату:</div>
      <div class="bg-dark content row items-center justify-center q-mt-lg">
        <div class="column items-center">
          <VDatePicker
            v-model="selectedDate"
            view="monthly"
            is-dark
            is-required
            :show-next-month-dates="false"
            :first-day-of-week="1"
            :min-date="minDate"
            :max-date="maxDateNextMonth"
            :attributes="attributes"
            class="booking-calendar"
            @dayclick="emit('changeData', {name: 'dateBooking', val: selectedDate})"
            @did-move="onChange"
          />
          <BadgesBooking :listTimeslots="listTimeslots" v-if="listTimeslots" />
        </div>
      </div>
    </div>
    <div class="col col-time-slots q-mt-md q-pl-sm">
      <div class="text-title-minimized text-white">Выберите время и количество игроков:</div>
      <div class="bg-dark col-time-slots--sec q-mt-lg">
        <div class="content">
          <TimSlots
            :listTimeslots="listTimeslots"
            :timeBooking="props.formData?.timeBooking"
            @changeData="OnChangeTime"
            v-if="listTimeslots"
          />
        </div>
        <div class="content-persons column items-center q-mb-sm" v-if="!!props.formData?.timeBooking?.available_for_booking">
          <div class="row items-center justify-center q-mb-xs">
            <div class="text-middle text-white">Укажите количество игроков</div>
            <q-icon name="svguse:icons/allIcons.svg#user" size="16px" color="white" class="q-ml-sm q-mb-xs" />
          </div>
          <div class="row items-center q-pt-sm">
            <q-btn
              round
              color="blue-grey-7"
              class="btn-no-effects btn-val-person"
              @click="emit('changeData', {name: 'minPerson', val: null})"
            >
              <q-icon name="svguse:icons/allIcons.svg#minus-btn" size="16px" />
            </q-btn>
            <div class="text-subtitle text-white q-ml-sm q-mr-sm">{{ props.formData?.persons }}</div>
            <q-btn
              round
              color="blue-grey-7"
              class="btn-no-effects btn-val-person"
              @click="emit('changeData', {name: 'plsPerson', val: null})"
            >
              <q-icon name="svguse:icons/allIcons.svg#plus-btn" size="16px" />
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="step-info step-sec q-mt-xl" v-if="!!props.formData.timeBooking">
    <div class="text-grey-9 text-subtitle q-mb-md w-100" >
      <span style="width: 144px;">Вы выбрали:</span>
      <span class="q-ml-sm text-white">{{ formatViewDateRange(props.formData.timeBooking?.start, props.formData.timeBooking?.end) }}</span>
    </div>
    <div class="text-grey-9 text-subtitle w-100">
      <span style="width: 144px;">Стоимость:</span>
      <span class="q-ml-sm text-white">{{ useNumberDivider(props.formData.timeBooking?.price * props.formData?.persons / 100)  }} ₽</span>
    </div>
  </div>

  <q-card-actions class="sec-navigation q-mt-auto">
    <q-btn
      flat
      label="Назад"
      class="text-grey-10 no-hover my-btn q-mr-auto"
      @click="emit('nextStep', 1)" />
    <q-btn
      unelevated
      label="далее"
      color="blue-1"
      class="my-btn big-btn semicircular text-white btn-disabled text-bold"
      padding="16px"
      :disable="!ActiveStepNext"
      @click="emit('nextStep', 3)"
    />
  </q-card-actions>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBookingsStore } from 'src/stores/bookings.js'
import { addLeadZero, formatViewDateRange } from 'src/composables/useFormatDate'
import BadgesBooking from 'src/components/newbooking/BadgesBooking.vue'
import TimSlots from 'src/components/newbooking/TimSlots.vue'
import { useNumberDivider } from 'src/composables/useSplitNumber'


const bookingsStore = useBookingsStore()
const props = defineProps({
  formData: Object
})
const emit = defineEmits(['nextStep', 'changeData'])


const selectedDate = ref()
const minDate = new Date()
const currentMonth = new Date().getMonth() + 1
const selectedGameCalendar = ref([])

const lastDateNext = new Date()
const maxDateNextMonth = lastDateNext.setMonth(lastDateNext.getMonth() + 3, 0)

const attributes = ref([])

let activedChangeNextMounth = false
const onChange = async (e) => {
  if (currentMonth !== e[0].month) {
    if ( ( (currentMonth < e[0].month) || (currentMonth === 12 && e[0].month === 1) ) && activedChangeNextMounth === false) {
      const resp = await bookingsStore.getTarifGameNextMounth(props.formData?.service?.id, selectedGameCalendar.value)
      selectedGameCalendar.value = resp.dataCopy
      getAttributes()
    }
    if (activedChangeNextMounth === false) {
      activedChangeNextMounth = true
    }
  }
}

const getTarifGame = async () => {
  const resp = await bookingsStore.getTarifGame(props.formData.service?.id)
  selectedGameCalendar.value = resp.calendar
}

const getAttributes = async () => {
  const result = []

  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 1)

  for (let date in selectedGameCalendar.value) {
    selectedGameCalendar.value[date].forEach(item => {
      let startDate = new Date(item.start)

      // Проверка на время от 00:00 до 03:00 и корректировка даты
      if (startDate.getHours() >= 0 && startDate.getHours() < 3) {
        startDate.setDate(startDate.getDate() - 1)
      }

      // Проверяем, является ли дата из start текущей датой
      const isToday = startDate.getDate() === currentDate.getDate() &&
                      startDate.getMonth() === currentDate.getMonth() &&
                      startDate.getFullYear() === currentDate.getFullYear()

      if (isToday && startDate.getHours() < currentDate.getHours()) {
        result.push({
          bar: 'black',
          dates: [startDate]
        })
      } else if (startDate > currentDate ||
        (isToday && startDate.getHours() >= currentDate.getHours())) {
        let color

        if (item.available_for_booking === 0) {
          color = 'black'
        } else if (item.style === 0 || item.style === 2) {
          color = 'blue-1'
        } else if (item.style === 1 || item.style === 3) {
          color = 'negative'
        }

        result.push({
          bar: color,
          dates: [startDate]
        })
      }
    })
  }
  attributes.value = result
}

const ActiveStepNext = computed(()=> {
  return !!props.formData.dateBooking && !!props.formData.timeBooking
})

const selectedDateFormatted = computed(() => {
  return `${selectedDate.value?.getFullYear()}-${addLeadZero(selectedDate.value?.getMonth() + 1)}-${addLeadZero(selectedDate.value?.getDate())}`
})
const listTimeslots = computed(() => {
  if (!selectedGameCalendar.value) {
    return []
  }
  return selectedGameCalendar.value[selectedDateFormatted.value]
})

const OnChangeTime = (value) => {
  emit('changeData', {name: 'timeBooking', val: value})
}


onMounted( async () => {
  selectedDate.value = props.formData?.dateBooking
  await getTarifGame()
  await getAttributes()
})

</script>
