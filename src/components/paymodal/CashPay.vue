<template>
  <div class="text-white text-title-minimized q-pb-lg text-caps">наличная оплата</div>
  <PayReceived v-if="data.cash.payApproved" />

  <div class="column q-pt-xl q-pb-xl">
    <div class="text-title-minimized text-white q-mb-lg">Калькулятор сдачи:</div>
    <div class="row items-center">
      <q-input
        color="grey-9"
        standout
        v-model="data.cash.cash"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="Сумма наличными"
        clearable
        clear-icon="close"
        style="width: 216px;"
      />
      <q-icon name="svguse:icons/iconsPay2.svg#minus" color="white" size="28px" class="q-mr-lg" />
      <q-input
        color="grey-9"
        standout
        v-model="data.cash.withPay"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="Сумма к оплате"
        clearable
        clear-icon="close"
        style="width: 216px;"
      />
      <q-icon name="svguse:icons/iconsPay2.svg#ravno" color="white" size="28px" class="q-mr-lg"/>
      <q-input
        color="grey-9"
        standout
        v-model="delivery"
        type="text"
        class="my-input-standart my-input-standart-big bg-dark btn-non-disabled"
        label="Размер сдачи"
        clearable
        clear-icon="close"
        :disable="true"
        style="width: 216px;"
      />
    </div>
  </div>

  <div class="column q-mt-xl q-pt-lg">
    <div class="text-title-minimized text-white q-mb-lg">Провести платеж:</div>
    <div class="row items-center">
      <q-input
        color="grey-9"
        standout
        v-model="data.cash.withPay"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="Сумма к оплате"
        clearable
        clear-icon="close"
        style="width: 200px;"
      />
      <q-btn color="positive" class="my-btn big-btn" padding="0 20px" label="оплатить" @click="data.cash.payApproved = true" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PayReceived from 'src/components/paymodal/PayReceived.vue'

const props = defineProps({
  data: Object
})

const delivery = computed(() => {
  let result = props.data.cash.cash - props.data.cash.withPay
  if (result < 0) return 0
  return result
})

</script>
