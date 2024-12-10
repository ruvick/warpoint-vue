<template>
  <div class="calendar-slots">
    <div
      v-for="(timeSlot) in props.listTimeslots"
      :key="timeSlot.start"
      class="slot"
    >
      <q-btn
        :disable="checkTime(!timeSlot.available_for_booking, timeSlot)"
        dense push
        @click="emit('changeData', timeSlot)"
        :label="getTimeSlotCaption(timeSlot)"
        :class="[
          {'disactive': activeTimeSlot},
          {'activated': timeSlot.start === props.timeBooking?.start}
        ]"
      >
        <div
          class="busy-2"
          :class="`bg-${getTimeSlotStyle(timeSlot)}`"
          :style="{width: `${coefficient(timeSlot.available_for_booking, timeSlot.max_players)}%`}"
          v-if="timeSlot.available_for_booking !== 0"
        ></div>

        <div
          class="busy"
          :style="{width: `${coeffBusy(timeSlot.available_for_booking, timeSlot.max_players)}%`}"
        ></div>
        <q-badge
          v-if="timeSlot.available_for_booking !== 0 && timeSlot.available_for_booking !== 1"
          color="dark"
          transparent
          floating
        >
          <span class="free">{{timeSlot.available_for_booking }}</span>
          <span class="slash">/</span>
          <span class="all">{{ timeSlot.max_players }}</span>
        </q-badge>
      </q-btn>
    </div>
  </div>
</template>

<script setup>

	import { computed } from 'vue'
	import { currentTime, getTimeSlotCaption, getTimeSlotStyle } from 'src/composables/useDateTimeBooking'

	const emit = defineEmits(['checkTime', 'changeData'])
	const props = defineProps({
		listTimeslots: Array,
		timeBooking: Object
	})

	const coefficient = (available, players) => {
		if (players === 0) return 0
		return (available / players) * 100
	}
	const coeffBusy = (available, players) => {
		if (players === 0) return 0
		const free = (available / players) * 100
		return 100 - free
	}

	const activeTimeSlot = computed(() => {
		return !!props.listTimeslots.find((el) => el.start === props.timeBooking?.start)
	})

	const checkTime = (bool, time) => {
		const dateTime = time.start.split('T')
		const date = dateTime[0].split('-')
		const day = date[2]
		const month = date[1]

		const checkDM = Number(day) === currentTime.day && Number(month) === currentTime.month

		if (!bool && checkDM) {
			const hour = dateTime[1].split(':')[0]
			if (Number(hour) > currentTime.hour) return false
			else return true
		}
		return !!bool
	}

</script>
