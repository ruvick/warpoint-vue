<template>
  <div class="step-sec q-pb-md">
    <div class="text-title-minimized text-white">Шаг 1: услуга</div>
  </div>

  <div class="step-sec step-sec-services row">
    <q-select
      standout
      v-model="props.formData.sourceOrder"
      :options="optionSourceOrder"
      bg-color="blue-grey-8"
      class="my-select my-select-big text-subtitle"
      color="dark"
      :dark="true"
      popup-content-class="my-select-big-menu"
      option-value="id"
      option-label="name"
      dropdown-icon="svguse:icons/allIcons.svg#select-arrow"
      style="max-width: 264px;"
      label="Источник заказа *"
    />
    <q-select
      standout
      v-model="props.formData.typeGame"
      :options="optionTypesGames"
      bg-color="blue-grey-8"
      class="my-select my-select-big text-subtitle"
      color="dark"
      :dark="true"
      popup-content-class="my-select-big-menu"
      option-value="id"
      option-label="name"
      dropdown-icon="svguse:icons/allIcons.svg#select-arrow"
      style="max-width: 264px;"
      label="Тип игры *"
    />
    <q-select
      standout
      v-model="props.formData.service"
      :options="props.formData.typeGame?.games"
      bg-color="blue-grey-8"
      class="my-select my-select-big text-subtitle"
      color="dark"
      :dark="true"
      popup-content-class="my-select-big-menu"
      option-value="id"
      option-label="name"
      dropdown-icon="svguse:icons/allIcons.svg#select-arrow"
      style="max-width: 264px;"
      label="Услуга *"
    />

  </div>

  <div class="step-info step-sec q-mt-xl">
    <div class="text-grey-9 text-subtitle q-mb-md w-100">
      <span style="width: 144px;">Дата создания:</span>
      <span class="q-ml-sm">{{ props.formData.dateNow }}</span>
    </div>
    <div class="text-grey-9 text-subtitle w-100">
      <span style="width: 144px;">Администратор:</span>
      <span class="q-ml-sm">Александрова Маргарита</span>
    </div>
  </div>

  <q-card-actions class="sec-navigation q-mt-auto">
    <q-btn flat label="Отмена" v-close-popup class="text-grey-10 no-hover my-btn q-mr-auto" />
    <q-btn
      unelevated
      label="далее"
      color="blue-1"
      class="my-btn big-btn semicircular text-white btn-disabled text-bold"
      padding="16px"
      :disable="!ActiveStepNext"
      @click="emits('nextStep', 2)"
    />
  </q-card-actions>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBookingsStore } from 'src/stores/bookings.js'
import { useMainStore } from 'src/stores/main.js'

const bookingsStore = useBookingsStore()
const { g } = useMainStore()
const props = defineProps({
  formData: Object
})
const emits = defineEmits(['nextStep'])

const optionSourceOrder = ref([])
const optionTypesGames = ref([])

const ActiveStepNext = computed(()=> {
  return !!props.formData.sourceOrder && !!props.formData.typeGame && !!props.formData.service
})

const getInfoArena = async () => {
  const resp = await bookingsStore.getInfoArena(g.selectedArenaId)
  optionSourceOrder.value = resp.advertising_sources
  optionTypesGames.value = resp.game_groups
}

onMounted(() => {
  getInfoArena()
})

</script>
