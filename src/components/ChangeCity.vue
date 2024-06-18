<template>
  <q-card style="width: 1344px; max-width: 1344px;" class="bg-blue-grey-9">
    <q-icon name="svguse:icons/allIcons.svg#close-modal" size="29px" class="close-modal" v-close-popup />
    <q-card-section class="text-center q-pt-sm head">

      <div class="row items-center sec-select-contry">
        <label class="text-grey-10 text-subtitle-2 q-mr-md">Страна: </label>
        <q-select
          standout
          v-model="selectedCountry"
          :options="countries"
          @update:model-value="allCities = selectedCountry.cities"
          bg-color="blue-grey-8"
          class="my-select text-subtitle"
          color="dark"
          :dark="true"
          popup-content-class="my-select-menu"
          emit-value
          map-options
          option-label="name"
          dropdown-icon="svguse:icons/allIcons.svg#select-arrow"
          style="max-width: max-content;min-width: 160px;"
        />
      </div>
      <div class="row items-center">
        <label class="text-grey-10 text-subtitle-2 q-mr-md">Город: </label>
        <q-input
          color="grey-10"
          standout
          v-model="searchCity"
          type="text"
          class="my-input-standart bg-blue-grey-8 text-subtitle"
          style="width: 200px"
        >
          <template v-slot:append>
            <q-icon name="svguse:icons/allIcons.svg#pen" size="24px" color="primary" />
          </template>
        </q-input>
      </div>
    </q-card-section>

    <q-card-section class="sec-content">
      <div class="row column-cities">

        <div
          v-for="col in groupedCities"
          :key="col"
          class="column"
        >
          <div
            v-for="group in col.groups"
            class="item-change-city"
          >
            <div class="letter">{{ group.name }}</div>
            <q-list class="list no-focus">
              <q-item
                v-for="city in group.cities"
                :key="city"
                clickable
                :class="{'actived': city.id === g.selectedCity.id}"
                @click="ChangeCity(city)"
              >
                <q-item-section class="text-subtitle text-grey-10">
                  {{ city.name }}
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

      </div>
    </q-card-section>

    <q-card-actions class="row q-pt-md q-pb-lg q-pr-xl q-pl-xl">
      <div class="col text-left">
        <q-btn flat label="Отмена" v-close-popup class="text-grey-10 no-hover my-btn" />
      </div>
      <div class="col text-right">
        <q-btn unelevated label="OK" color="blue-1" v-close-popup class="my-btn big-btn semicircular text-white" padding="16px 16px" />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useMainStore } from 'src/stores/main.js'
import { useBookingsStore } from 'src/stores/bookings.js'

const { g } = useMainStore()
const bookingsStore = useBookingsStore()

const countries = ref([])
const allCities = ref([])
const searchCity = ref(null)
const selectedCountry = ref(null)

const groupedCities = computed(() => {
  const sortedCities = [...allCities.value].sort((a, b) => a.name.localeCompare(b.name))

  const mainGroups = [
    { cities: [] },
    { cities: [] },
    { cities: [] },
    { cities: [] }
  ]

  sortedCities.forEach(city => {
    const firstLetter = city.name[0].toLowerCase()
    let groupIndex

    switch (true) {
      case firstLetter < 'к':
        groupIndex = 0
        break
      case firstLetter < 'о':
        groupIndex = 1
        break
      case firstLetter < 'у':
        groupIndex = 2
        break
      default:
        groupIndex = 3
    }

    mainGroups[groupIndex].cities.push(city)
  })

  let filteredGroups = mainGroups.map((group, index) => {
    const groups = group.cities.reduce((acc, city) => {
      const firstLetter = city.name[0].toUpperCase()
      const existingGroup = acc.find(group => group.name === firstLetter)
      if (existingGroup) {
        existingGroup.cities.push(city)
      } else {
        acc.push({ name: firstLetter, cities: [city] })
      }
      return acc
    }, [])

    if (groups.length > 0) {
      return {
        name: `group-${index + 1}`,
        groups: groups
      }
    } else {
      return null
    }
  }).filter(group => group !== null)

  // Фильтрация по переменной searchCity
  if (searchCity.value !== null && searchCity.value !== '') {
    filteredGroups = filteredGroups.map(group => ({
      ...group,
      groups: group.groups.map(subGroup => ({
        ...subGroup,
        cities: subGroup.cities.filter(city => city.name.toLowerCase().includes(searchCity.value.toLowerCase()))
      })).filter(subGroup => subGroup.cities.length > 0)
    })).filter(group => group.groups.length > 0)
  }

  return filteredGroups
})

const ChangeCity = (city) => {
  g.selectedCity = {
    id: city.id,
    name: city.name,
  }
}

const getCities = async () => {
  try {
    const resp = await bookingsStore.getArenaGamesByCities()
    countries.value = resp.arenas
    allCities.value = g.selectedCountry.cities
    selectedCountry.value = g.selectedCountry
  } catch (err) {
    console.log(err)
  }
}

onMounted( async () => {
  await getCities()
})
</script>
