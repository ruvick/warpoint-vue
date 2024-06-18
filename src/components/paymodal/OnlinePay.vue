<template>
  <div class="text-white text-title-minimized q-pb-xl text-caps">онлайн по ссылке</div>
  <div class="column q-pt-lg q-pb-xl">
    <div class="text-title-minimized text-white q-mb-lg">Укажите сумму и создайте ссылку для онлайн-оплаты:</div>
    <div class="row items-center">
      <q-input
        color="grey-9"
        standout
        v-model="data.online.sum"
        type="number"
        class="my-input-standart my-input-standart-big bg-blue-grey-8 q-mr-lg"
        label="Сумма"
        clearable
        clear-icon="close"
        style="width: 200px;"
      />
      <q-btn
        color="blue-1"
        class="my-btn big-btn"
        padding="0 20px"
        label="создать ссылку"
        @click="getCode = true"
        :disable="getCode"
        :class="{'bg-dark-5': getCode}"
      />
    </div>
  </div>

  <div class="column q-mt-lg q-pt-xs" v-if="getCode">
    <div class="text-title-minimized text-positive">Ссылка скопирована.</div>
    <div class="text-title-minimized text-white">Отправьте ее клиенту в мессенджере. Готово!</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: Object
})

const getCode = ref(false)

</script>
