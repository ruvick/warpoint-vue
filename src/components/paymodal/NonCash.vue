<template>
  <div class="column">
    <div class="text-white text-title-minimized q-mb-sm text-caps">безналичная оплата</div>
    <div class="row items-center q-pt-xl">
      <q-input
        color="grey-9"
        standout
        v-model="data.nonCash.sum"
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
