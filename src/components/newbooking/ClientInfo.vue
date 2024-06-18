<template>
  <form class="column full-height" @submit.prevent.stop="emit('nextStep', 4)">
    <div class="step-sec q-pb-md">
      <div class="text-title-minimized text-white">Шаг 3: клиент</div>
    </div>

    <div class="step-sec step-sec--persons-info">
      <div class="row">
        <div class="col q-pl-sm q-pr-sm q-mt-md">
          <q-input
            color="grey-9"
            standout
            v-model="props.formData.phone"
            type="number"
            class="my-input-standart my-input-standart-big bg-blue-grey-8"
            label="Телефон *"
            :rules="nullRules"
          />
        </div>
        <div class="col q-pl-sm q-pr-sm q-mt-md">
          <q-input
            color="grey-9"
            standout
            v-model="props.formData.first_name"
            type="text"
            class="my-input-standart my-input-standart-big bg-blue-grey-8"
            label="Имя *"
            :rules="nullRules"
          />
        </div>
        <div class="col q-pl-sm q-pr-sm q-mt-md">
          <q-input
            color="grey-9"
            standout
            v-model="props.formData.last_name"
            type="text"
            class="my-input-standart my-input-standart-big bg-blue-grey-8"
            label="Фамилия"
          />
        </div>
        <div class="col q-pl-sm q-pr-sm q-mt-md">
          <q-input
            color="grey-9"
            standout
            v-model="props.formData.email"
            type="text"
            class="my-input-standart my-input-standart-big bg-blue-grey-8"
            label="E-mail"
            :rules="emailRules"
          />
        </div>
      </div>
    </div>

    <q-card-actions class="sec-navigation q-mt-auto">
      <q-btn
        flat
        label="Назад"
        class="text-grey-10 no-hover my-btn q-mr-auto"
        @click="emit('nextStep', 2)" />
      <q-btn
        unelevated
        label="далее"
        color="blue-1"
        class="my-btn big-btn semicircular text-white btn-disabled text-bold"
        padding="16px"
        type="submit"
        :disable="!activeStepNext"
      />
    </q-card-actions>
  </form>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  formData: Object
})
const emit = defineEmits(['nextStep', 'changeData'])

const nullRules = [
  val => (val !== null && val !== '') || 'Поле не должно быть пустым'
]
const emailRules = [
  val => (val === null || val === '' || val.includes('@')) || 'Недостаточно символов'
]


const activeStepNext = computed(()=> {
  const isPhoneValid = props.formData.phone !== null && props.formData.phone !== ''
  const isNameValid = props.formData.first_name !== null && props.formData.first_name !== ''
  const isEmailValid = props.formData.email === null || props.formData.email === '' || props.formData.email.includes('@')
  return !!isPhoneValid && !!isNameValid && !!isEmailValid
})

</script>
