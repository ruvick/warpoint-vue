import { defineStore, storeToRefs } from 'pinia'
import { gamesList } from "@/store/gamesList.js"
import { ref, computed } from 'vue'

export const useTimeSlot = defineStore('TimeSlotStore', () => {

  const gameStore = gamesList();
  const { gameSelected } = storeToRefs(gameStore);
  const selectedDate = ref(new Date())
  const selectedTimeSlot = ref()
  const monthsRus = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
  ]


  const availableDates = computed(() => {
    return gameSelected.value?.calendar ? Object.keys(gameSelected.value?.calendar) : []
  })

  const minDate = computed(() => {
    return new Date()
  })
  const maxDate = ref(() => {
    const currentMaxDate = availableDates.value[availableDates.value.length - 1]

    if (currentMaxDate) {
      const lastDate = new Date(currentMaxDate)
      lastDate.setMonth(lastDate.getMonth() + 1, 1)
      return lastDate
    } else {
      return null
    }
  })

  const lastDateNext = new Date()
  const maxDateNextMonth = computed(() => {
    lastDateNext.setMonth(lastDateNext.getMonth() + 3, 0)
    return lastDateNext
  })

  function addLeadZero(number)
  {
    return number < 10 ? "0" + number : number;
  }

  const selectedDateFormatted = computed(() => {
    return selectedDate.value.getFullYear()
      + '-'
      + addLeadZero(selectedDate.value.getMonth() + 1)
      + '-'
      + addLeadZero(selectedDate.value.getDate())
  })
  const selectedDateFormattedRus = computed(() => {
    const day = selectedDate.value.getDate();
    const month = monthsRus[selectedDate.value.getMonth()];
    // const year = selectedDate.value.getFullYear();

    return `${day} ${month}`
    // return `${day} ${month} ${year}г.`
  })

  const listTimeslots = computed(() => {
    if (!gameSelected.value?.calendar) {
      return [];
    }
    return gameSelected.value?.calendar[selectedDateFormatted.value];
  })

  const selectedTimeSlotTime = computed(() => selectedTimeSlot.value?.start )
  const selectedTimeSlotTimeEnd = computed(() => selectedTimeSlot.value?.end )

  const selectedTimeSlotTimeFormatted = computed(() => {
    if (selectedTimeSlotTime.value) {
      let splitted = selectedTimeSlotTime.value.split('T')[1].split(':');
      let splittedEnd = selectedTimeSlotTimeEnd.value.split('T')[1].split(':');
      return `${splitted[0]}:${splitted[1]} - ${Number(splittedEnd[0]) + 1}:${splitted[1]}`;
    }
    return "";
  });

  function selecTimeSlotTime(timeSlot)
  {
    selectedTimeSlot.value = timeSlot || 0
  }

  return {
    listTimeslots,
    selectedDate,
    availableDates,
    maxDate,
    minDate,
    selectedDateFormatted,
    selecTimeSlotTime,
    maxDateNextMonth,
    selectedTimeSlot,
    selectedTimeSlotTime,
    selectedTimeSlotTimeFormatted,
    selectedDateFormattedRus
  }

});
