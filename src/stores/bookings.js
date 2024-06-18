const statusColors = {
	'-1': 'grey-8',
	0: 'orange-8',
	1: 'primary',
	2: 'green-8',
	3: 'lime-8'
}
import { defineStore } from 'pinia';
import { useMainStore } from 'src/stores/main.js'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import { useApi, useApi2 } from 'src/api/useApi.js'

const currentMonth = new Date().getMonth() + 1
const currentYear = new Date().getFullYear()

export const useBookingsStore = defineStore('bookings', () => {
	const { g } = useMainStore()
	const route = useRoute()

	// Because Sweden uses ISO 8601
	const setTime = () => {
		g.arenaDateTime = new Date().toLocaleString('sv', {
			timeZone: g.arenaTimezone
		})
	}
	setTime()

	g.arenaDate = computed(() => g.arenaDateTime.slice(0, 10))
	g.arenaTime = computed(() => g.arenaDateTime.slice(11, 16))

	g.timeFrame = computed(() => {
		return g.games.reduce((acc, game) => {
			const times = game.calendar[g.selectedDate]
			if (times) {
				acc[0] ??= times.at(0).start
				acc[1] ??= times.at(-1).start
				acc[0] = acc[0] > times.at(0).start ? times.at(0).start : acc[0]
				acc[1] = acc[1] < times.at(-1).start ? times.at(-1).start : acc[1]
			}
			return acc
		}, [])
	})

	g.gameGroups = computed(() => {
		const groups = [{ value: 'all', label: 'Все' }]
		g.games.forEach((game) => {
			const item = game.game_group
			groups.push({ value: item.id, label: item.name })
		})
		return [...new Map(groups.map(item => [item.value, item])).values()] || []
	})
	// Need to populate
	watch(() => g.gameGroups, () => {
		if (g.selectedGameGroups.length === 1 && g.selectedGameGroups.includes('all')) {
			g.gameGroups.forEach((group) => {
				if (group.value !== 'all') {
					g.selectedGameGroups.push(group.value)
				}
			})
		}
	})

	const augment = (event) => {
		event.date = event.game_session.start.slice(0, 10)
		event.time = event.game_session.start.slice(11, 16)
		event.end = event.game_session.end.slice(11, 16)
	}

	const shallowAugment = (event) => {
		augment(event)
		if (event.order.closed) {
			event.status = 2
		}
		event.statusColor = statusColors[event.status]
		event.payStatus = event.order.pay_info.paid > 0
			? event.order.pay_info.left > 0
				? 3
				: event.order.closed ? 2 : 1
			: 0
		event.payStatusColor = statusColors[event.payStatus]
		event.duration = event.arena_game.duration
		event.gameName = event.arena_game.name
		event.gameId = event.arena_game.id
		event.pqd = event.arena_game.players_quantity_dependency
	}

	const deepAugment = (event, game) => {
		augment(event)
		event.statusColor = statusColors[event.status.value]
		event.payStatus = event.payment > 0
			? event.amount_with_discount - event.payment > 0
				? 3
				: event.status.value === 2 ? 2 : 1
			: 0
		event.payStatusColor = statusColors[event.payStatus]
		event.duration = game.duration
		event.gameName = game.name
		event.gameId = game.id
		event.pqd = game.players_quantity_dependency
	}

	// Timeline case
	const getArenaGames = async () => {
		const url = `/management/arena/${g.selectedArenaId}/timeline?date=${g.selectedDate}`
		g.games = (await useApi(url)).data || []
		g.games.forEach((game) => {
			game.groups = []
			if (!game.game_group) { game.game_group = {} }
			if (!game.bookings) { game.bookings = [] }
			game.bookings.forEach(event => deepAugment(event, game))
			const slots = game.calendar[g.selectedDate]
			const noSlots = !slots.some(slot => slot.available_for_booking > 0)
			game.empty = !game.bookings.length && noSlots ? 1 : -1
		})
		g.games.sort((a, b) => (
			a.empty - b.empty ||
			b.timeline_style - a.timeline_style ||
			a.name.localeCompare(b.name)
		))
	}

	const getArenaGamesByCities = async () => {
		const url = `/management/user/info?group_by=countries`
		return (await useApi(url)).data || []
	}

	const getArenas = async () => {
		const resp = await getArenaGamesByCities()

		const city = resp.arenas.find(country => country.id === g.selectedCountry.id)?.cities.find(city => city.id === g.selectedCity.id)

		if (city) return city.arenas
		else return null
	}

	const setLocation = async () => {
		if (
			localStorage.getItem('city') &&
			localStorage.getItem('country') &&
			localStorage.getItem('selected-arena') &&
			localStorage.getItem('selected-arena-id') &&
			g.selectedArena
		) return
		const resp = await getArenaGamesByCities()

		resp.arenas.forEach((country) => {
			if (country.name === 'Россия') {
				g.selectedCountry = {
					id: country.id,
					name: country.name,
					cities: country.cities
				}
				g.selectedCity = {
					id: country.cities[1].id,
					name: country.cities[1].name,
					// arenas: country.cities[1].arenas
				}

				g.selectedArena = {
					id: country.cities[1].arenas[0].id,
					name: country.cities[1].arenas[0].name,
					title: country.cities[1].arenas[0].title,
					address: country.cities[1].arenas[0].address,
				}
				g.selectedArenaId = country.cities[1].arenas[0].id

				localStorage.setItem('country', JSON.stringify(g.selectedCountry))
				localStorage.setItem('city', JSON.stringify(g.selectedCity))
				localStorage.setItem('selected-arena', JSON.stringify(g.selectedArena))
				localStorage.setItem('selected-arena-id', JSON.stringify(g.selectedArenaId))
			}
		})
	}

	// get info arena
	const getInfoArena = async (arenaId) => {
		const { data } = await useApi2(`/site/arena/${arenaId}/awesome`)
		return data
	}

	// get info tarif
	const getTarifGame = async (tarifGameId) => {
		const { data } = await useApi2(`/site/arenagame/${tarifGameId}`)
		return data
	}
	const getTarifGameNextMounth = async (tarifGameId, calendar) => {
		let data = null
		let dataCopy = {}
		Object.assign(dataCopy, calendar)
		if (currentMonth === 12) data = await useApi2(`/site/arenagame/${tarifGameId}?months=${1}&year=${currentYear + 1}`)
		else data = await useApi2(`/site/arenagame/${tarifGameId}?months=${currentMonth + 1}&year=${currentYear}`)

		for (const date of Object.keys(data.data.calendar)) {
			if (Object.prototype.hasOwnProperty.call(dataCopy, date)) {
				const playersInGameSelected = dataCopy[date].map(game => game.max_players)
				const playersInDataCalendar = data.data.calendar[date].map(game => game.max_players)

				playersInDataCalendar.forEach((players, index) => {
					if (!playersInGameSelected.includes(players)) {
						dataCopy[date].push(data.data.calendar[date][index])
					}
				})
			} else {
				dataCopy[date] = [...data.data.calendar[date]]
			}
		}

		const lastKey = Object.keys(data.data.calendar).pop()
		const dateObject = new Date(lastKey) // отдавать за maxDateNextMonth
		return { dataCopy, dateObject }
	}


	// Notification case
	const getBookingById = async (id) => {
		const { data } = await useApi(`/management/booking/${id}`)
		if (data) { shallowAugment(data) }
		return data
	}

	// Table case
	const getBookings = async () => {
		const { data } = await useApi(`/management/arena/${g.selectedArenaId}/bookings`)
		data?.forEach(shallowAugment)
		g.bookings = data || []
	}

	const updateBookings = async (data) => {
		let booking = data.booking
		const date = booking.game_session.start.slice(0, 10)
		if (booking.id === g.selected?.id) {
			booking = await getBookingById(booking.id)
			g.selected = booking
		}
		if (route.name === 'table' && date >= g.arenaDate) {
			booking = await getBookingById(booking.id)
			g.bookings = g.bookings.filter(old => old.id !== booking.id)
			g.bookings.push(booking)
		}
		if (route.name === 'index' && date === g.selectedDate) {
			if (data.update_timeline) {
				await getArenaGames()
			} else {
				// This all looks suboptimal
				if (!booking.status) {
					booking = await getBookingById(booking.id)
				}
				g.games.forEach((game) => {
					if (game.id === booking.gameId) {
						game.bookings.forEach((item) => {
							if (item.id === booking.id) {
								item.status.value = booking.status
								item.status.label = booking.status_desc
								item.statusColor = statusColors[booking.status]
								item.payment = booking.order.pay_info.paid
								item.amount_with_discount = booking.order.pay_info.total
								item.payStatus = item.payment > 0
									? item.amount_with_discount - item.payment > 0
										? 3
										: item.status.value === 2 ? 2 : 1
									: 0
								item.payStatusColor = statusColors[item.payStatus]
							}
						})
					}
				})
			}
		}
	}

	return {
		setTime,
		getArenaGames,
		getBookingById,
		getBookings,
		updateBookings,
		getArenaGamesByCities,
		setLocation,
		getArenas,
		getInfoArena,
		getTarifGame,
		getTarifGameNextMounth,
	}
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useBookingsStore, import.meta.hot))
// }
