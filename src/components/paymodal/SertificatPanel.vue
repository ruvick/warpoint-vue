<template>
  <div class="text-white text-title-minimized q-pb-sm text-caps">подарочный сертификат</div>
  <div class="row q-pt-xl">
    <q-input
      color="grey-9"
      standout
      v-model="data.sertificat.number"
      type="text"
      class="my-input-standart my-input-standart-big bg-blue-grey-8 inp-search"
      label="Номер сертификата"
      clearable
      clear-icon="close"
      mask="####-####-####-####"
    >
      <template v-slot:append>
        <q-btn color="blue-1" class="my-btn mega-btn" padding="0 20px">
          <q-icon name="svguse:icons/allIcons.svg#loop" color="white" />
        </q-btn>
      </template>
    </q-input>

    <q-input
      color="grey-9"
      standout
      v-model="data.sertificat.balance"
      type="text"
      class="my-input-standart my-input-standart-big bg-dark q-mr-lg btn-non-disabled"
      label="Баланс"
      clearable
      clear-icon="close"
      :disable="true"
    />
    <q-input
      color="grey-9"
      standout
      v-model="data.sertificat.available"
      type="text"
      class="my-input-standart my-input-standart-big bg-dark btn-non-disabled"
      label="Доступно к списанию"
      clearable
      clear-icon="close"
      :disable="true"
    />
  </div>

  <div class="column pin-sum">
    <div class="text-title-minimized text-white q-mb-lg">Укажите PIN сертификата и сумму к оплате:</div>
    <div class="row items-center">
      <q-input
        color="grey-9"
        standout
        v-model="data.sertificat.pin"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="PIN"
        clearable
        clear-icon="close"
        style="width: 200px;"
      />
      <q-input
        color="grey-9"
        standout
        v-model="data.sertificat.sum"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="Сумма"
        clearable
        clear-icon="close"
        style="width: 200px;"
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
