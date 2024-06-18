<template>
  <q-card class="bg-blue-grey-9">
    <q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
      <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
    </q-btn>

    <q-card-section class="head">
      <div class="text-title-middle text-grey-10">Создание новой брони</div>
    </q-card-section>

    <q-card-section class="row card-wrapper">
      <q-card-section class="sec-sidebar column">
        <q-stepper
          v-model="step"
          vertical
          color="primary"
          animated
          class="stepper-new-booking"
        >
          <q-step
            :name="1"
            title="услуга"
            :done="step > 1"
            color="grey-10"
            icon="svguse:icons/allIcons.svg#check-step"
          />
          <q-step
            :name="2"
            title="Дата и время"
            :done="step > 2"
            color="grey-10"
            icon="svguse:icons/allIcons.svg#check-step"
          />
          <q-step
            :name="3"
            title="Клиент"
            :done="step > 3"
            color="grey-10"
            icon="svguse:icons/allIcons.svg#check-step"
          />
          <q-step
            :name="4"
            title="Бронь"
            :done="step > 4"
            color="grey-10"
            icon="svguse:icons/allIcons.svg#check-step"
          />
        </q-stepper>

        <div class="stepper-info-booking q-mt-auto q-pr-lg" v-if="step === 3">
          <div class="text-middle text-white q-mb-md">Детали брони</div>
          <div class="row justify-between q-pb-xs">
            <div class="text-middle text-grey-10">Источник:</div>
            <div class="text-middle text-white">{{ formData.sourceOrder.name }}</div>
          </div>
          <div class="row justify-between q-pb-xs">
            <div class="text-middle text-grey-10">Тип игры:</div>
            <div class="text-middle text-white">{{ formData.typeGame.name }}</div>
          </div>
          <div class="row justify-between q-pb-xs">
            <div class="text-middle text-grey-10">Услуга:</div>
            <div class="text-middle text-white">{{ formData.service.name }}</div>
          </div>
          <div class="row justify-between q-pb-md">
            <div class="text-middle text-grey-10">Кол-во игроков:</div>
            <div class="text-middle text-white">{{ formData.persons }}</div>
          </div>
          <div class="row justify-between q-pb-xs">
            <div class="text-middle text-grey-10">Дата и время:</div>
            <div class="text-middle text-white">19 февраля</div>
          </div>
          <div class="row justify-between q-pb-xs">
            <div class="text-middle text-grey-10">Время:</div>
            <div class="text-middle text-white">19:00 - 20:00</div>
          </div>
          <div class="row justify-between q-pb-md">
            <div class="text-middle text-grey-10">Длительность:</div>
            <div class="text-middle text-white">1 час</div>
          </div>
          <div class="row justify-between q-pb-xs">
            <div class="text-middle text-grey-10">Стоимость:</div>
            <div class="text-middle text-white">{{ useNumberDivider(formData.timeBooking?.price * formData?.persons / 100) }} ₽</div>
          </div>
          <div class="row justify-between">
            <div class="text-middle text-grey-10">Итого к оплате:</div>
            <div class="text-middle text-white">{{ useNumberDivider(formData.timeBooking?.price * formData?.persons / 100) }} ₽</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="sec-content">
        <div class="step step-1" v-if="step === 1">
          <ServicesStep
            :formData="formData"
            @nextStep="onNextStep"
            v-if="!!formData.dateNow"
          />
        </div>

        <div class="step step-2" v-if="step === 2">
          <DateStep
            :formData="formData"
            @nextStep="onNextStep"
            @changeData="OnChangeData"
            v-if="!!formData.dateNow"
          />
        </div>

        <div class="step step-3" v-if="step === 3">
          <ClientInfo
            :formData="formData"
            @changeData="OnChangeData"
            @nextStep="onNextStep"
          />
        </div>

        <div class="step step-4" v-if="step === 4">
          <BookingStep :formData="formData" />
        </div>

      </q-card-section>

    </q-card-section>

  </q-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { formatRussianDate } from 'src/composables/useFormatDate.js'
import { useNumberDivider } from 'src/composables/useSplitNumber'
import ServicesStep from 'src/components/newbooking/ServicesStep.vue'
import DateStep from 'src/components/newbooking/DateStep.vue'
import ClientInfo from 'src/components/newbooking/ClientInfo.vue'
import BookingStep from 'src/components/newbooking/BookingStep.vue'

const step = ref(1)
const formData = reactive({
  sourceOrder: null,
  typeGame: null,
  service: null,
  dateNow: null,
  dateBooking: new Date(),
  timeBooking: null,
  persons: 1,
  phone: null,
  first_name: null,
  last_name: null,
  email: null,
  comment: null,
  promo: null
})

const onNextStep = (val) => {
  step.value = val
}
const changePersons = (name) => {
  if (name === 'minPerson') {
    if (1 === formData.persons) return
    else formData.persons--
  }
  if (name === 'plsPerson') {
    if (formData.timeBooking.available_for_booking === formData.persons) return
    else formData.persons++
  }
}

const OnChangeData = ({name, val}) => {
  switch (true) {
    case name === 'dateBooking':
      formData.dateBooking = val
      break
    case name === 'timeBooking':
      formData.timeBooking = val
      break
    case name === 'minPerson' || name === 'plsPerson':
      changePersons(name)
      break
    case name === 'clearEmail':
      console.log('heheheheh')
      formData.email = val
      break
    default:
      break
  }
}

onMounted(() => {
  formData.dateNow = formatRussianDate().view
})

</script>
