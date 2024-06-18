<template>
  <q-dialog
    v-model="dialogCities"
    class="dialog-cities"
  >
    <ChangeCity />
  </q-dialog>
  <q-dialog
    v-model="dialogNewBooking"
    class="dialog-full dialog-new-booking"
    position="right"
  >
    <NewBooking />
  </q-dialog>
  <q-dialog
    v-model="dialogNewSale"
    class="dialog-full dialog-new-sale"
    position="right"
  >
    <NewSale />
  </q-dialog>

  <div class="row page-navigation items-start">

    <div class="row items-center">
      <div class="column q-mt-xs q-pr-md">
        <div class="text-title text-grey-9 q-mb-xs">
          <!-- ТАЙМЛАЙН -->
					{{ route.meta.title }}
        </div>
        <div class="text-subtitle text-grey-9">
      	 <!-- {{ route.meta.title }} -->
        </div>
      </div>

			<!-- Переключение вида -->
      <!-- <q-tabs
        v-model="tab"
        class="text-primary my-tabs no-ripple no-hover tabs-display q-ml-lg bg-dark">
        <q-tab name="bar">
          <q-icon name="svguse:icons/allIcons.svg#nav-tab-bar" size="22.5px" />
        </q-tab>
        <q-tab name="list">
          <q-icon name="svguse:icons/allIcons.svg#nav-tab-list" size="30px" />
        </q-tab>
      </q-tabs> -->

    </div>

    <div class="column q-pt-sm nav-pult">
      <div class="row">
        <div class="row q-mr-sm">
          <q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold" no-caps @click="dialogNewBooking = true">
            <q-icon name="svguse:icons/allIcons.svg#plus" size="12px" class="q-mr-sm" />
            <span class="block">Бронь</span>
          </q-btn>
          <q-btn unelevated color="positive" label="Продажа" no-caps class="my-btn text-weight-bold" @click="dialogNewSale = true" />
        </div>
        <div class="column q-ml-lg q-pl-xs">
          <div class="text-subtitle text-positive q-mb-sm">527 970 ₽</div>
          <div class="text-subtitle text-warning">127 900 ₽</div>
        </div>
      </div>

      <div class="q-pt-lg q-mt-xs q-pl-sm q-ml-xs">
				<!-- Calendar  -->
        <!-- <DataChange class="q-mt-sm q-pt-xs" /> -->
      </div>

    </div>

    <div class="row q-pt-sm q-ml-auto">
      <q-btn unelevated color="blue-grey-8" class="my-btn my-btn-select q-mr-md text-weight-medium" no-caps @click="dialogCities = true">
        <span class="block text-grey-10">
          {{ g.selectedCountry?.name }},
          {{ g.selectedCity?.name }}
        </span>
        <q-icon name="svguse:icons/allIcons.svg#select-arrow" size="30.7px" color="primary" class="q-ml-auto q-pl-sm" />
      </q-btn>
      <q-select
        standout
        v-model="g.selectedArena"
        :options="arenas"
        bg-color="blue-grey-8"
        class="my-select text-subtitle"
        color="dark"
        :dark="true"
        popup-content-class="my-select-menu"
        option-value="id"
        option-label="name"
        dropdown-icon="svguse:icons/allIcons.svg#select-arrow"
        @update:model-value="changeSelectedArena"
      >
        <template v-slot:prepend>
          <q-icon name="svguse:icons/allIcons.svg#map-icon" color="grey-10" size="24px" />
        </template>
      </q-select>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import DataChange from 'src/components/DataChange.vue'
import ChangeCity from 'src/components/ChangeCity.vue'
import NewBooking from 'src/components/NewBooking.vue'
import NewSale from 'src/components/NewSale.vue'
import { useBookingsStore } from 'src/stores/bookings.js'
import { useMainStore } from 'src/stores/main.js'

const route = useRoute()
const bookingsStore = useBookingsStore()
const { g } = useMainStore()

const tab = ref('bar')
const dialogCities = ref(false)
const dialogNewBooking = ref(false)
const dialogNewSale = ref(false)

// Раскомитить
const arenas = ref([])

const getArenas = async () => {
  try {
    arenas.value = await bookingsStore.getArenas()
  } catch (err) {
    console.log(err)
  }
}
watch(() => g.selectedCity, () => {
  getArenas()
})

const changeSelectedArena = () => {
  g.selectedArenaId = g.selectedArena.id
}

onMounted( async () => {
  await getArenas()
})
</script>

<style lang="scss" scope>
	.page-navigation {
		min-height: auto;
		.text-title {
			text-transform: uppercase;
		}
	}
</style>