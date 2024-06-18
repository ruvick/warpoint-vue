<template>
  <div class="text-white text-title-minimized q-pb-xl text-caps">оплата бонусами</div>
  <div class="row items-center q-pb-xl q-pt-sm">
    <q-input
      color="grey-9"
      standout
      v-model="data.bonus.balance"
      type="text"
      class="my-input-standart my-input-standart-big bg-dark btn-non-disabled q-mr-lg"
      label="Баланс бонусов"
      clearable
      clear-icon="close"
      :disable="true"
      style="width: 200px;"
    />
    <q-input
      color="grey-9"
      standout
      v-model="data.bonus.available"
      type="text"
      class="my-input-standart my-input-standart-big bg-dark btn-non-disabled q-mr-lg"
      label="Доступно к списанию"
      clearable
      clear-icon="close"
      :disable="true"
      style="width: 200px;"
    />
    <div class="column q-ml-sm">
      <div class="row">
        <div class="text-subtitle text-grey-9">Имя клиента:</div>
        <div class="text-subtitle text-white q-ml-sm">Наталья</div>
      </div>
      <div class="row q-mt-xs">
        <div class="text-subtitle text-grey-9">Уровень:</div>
        <div class="text-subtitle text-white q-ml-sm">Базовый (5%)</div>
      </div>
    </div>
  </div>

  <div class="column q-mt-xl q-pt-lg q-pb-xl">
    <div class="text-title-minimized text-white q-mb-lg">Укажите сумму к оплате и вышлите клиенту SMS-код  для списания бонусов:</div>
    <div class="row items-center">
      <q-input
        color="grey-9"
        standout
        v-model="data.bonus.sum"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="Сумма"
        clearable
        clear-icon="close"
        style="width: 216px;"
      />
      <q-btn color="blue-1" class="my-btn big-btn" padding="0 20px" label="выслать код" />
    </div>
  </div>

  <div class="column q-mt-xl q-pt-lg">
    <div class="text-title-minimized text-white q-mb-lg">Введите код:</div>
    <div class="row items-center">
      <q-input
        color="grey-9"
        standout
        v-model="data.bonus.code"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="Код подтверждения"
        clearable
        clear-icon="close"
        style="width: 232px;"
      />
      <q-btn color="positive" class="my-btn big-btn" padding="0 20px" label="оплатить" />
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  data: Object
})

</script>

