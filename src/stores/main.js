import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { watch } from 'vue'
import { formattedDatetoDay } from 'src/composables/useFormatDate.js'

export const useMainStore = defineStore('main', () => {
  // g - global state, c - component state

  const g = reactive({
    token: localStorage.getItem('token'),
    info: {},
    ws: null,
    ready: false,
    lang: localStorage.getItem('lang') || 'ru',
    translations: {},
    arenaDateTime: '',
    selectedCountry: JSON.parse(localStorage.getItem('country')) || null,
    selectedCity: JSON.parse(localStorage.getItem('city')) || null,
    selectedArena: JSON.parse(localStorage.getItem('selected-arena')) || null,
    selectedArenaId: localStorage.getItem('selected-arena-id') || null,
    games: [],
    selectedGameGroups: ['all'],
    bookings: [],
    selected: null,
    selectedDate: localStorage.getItem('date') || formattedDatetoDay,
    mainCalendar: null,
    search: '',
    nomenclature: {},
    drawer: false,
    lock: false,
    tab: 'info',
    chat: null,
    cart: new Map(JSON.parse(localStorage.getItem('cart'))),
    order: null,
    orderMode: 'cart',
    clientData: null,
    client: null,
    bookingForm: false,
    newBookingForm: false,
    orderForm: false,
    clientForm: false,
    rules: {
      nonempty: val => !!val || $t('Обязательное поле'),
      positive: val => val > 0 || $t('Сумма должна быть положительной')
    }
  })

  watch(() => g.selectedDate, () => {
    localStorage.setItem("date", g.selectedDate);
  })
  watch(() => g.selectedCountry, () => {
    localStorage.setItem("country", JSON.stringify(g.selectedCountry));
  })
  watch(() => g.selectedCity, () => {
    localStorage.setItem("city", JSON.stringify(g.selectedCity));
  })
  watch(() => g.selectedArena, () => {
    localStorage.setItem("selected-arena", JSON.stringify(g.selectedArena));
  })
  watch(() => g.selectedArenaId, () => {
    localStorage.setItem("selected-arena-id", g.selectedArenaId);
  })

  const mountedLocation = () => {

  }

  return { g }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
// }
