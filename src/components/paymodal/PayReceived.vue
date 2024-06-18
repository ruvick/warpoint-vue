<template>
  <div class="pay-received column">

    <div class="check text-center column justify-center">
      <div class="text-title-middle text-positive">Оплачено {{ useNumberDivider(20000) }} ₽</div>
      <div class="text-title-middle text-positive q-mt-md">
        Успешно
        <q-icon name="svguse:icons/iconsPay2.svg#smile" size="33.33px" class="q-ml-sm" color="positive" />
      </div>
    </div>

    <div class="succes text-positive text-subtitle" v-show="true">
      Оплачена полная стоимость,<br>
      больше платежей не требуется
    </div>
    <div class="succes text-primary text-subtitle" v-show="false">
      Перейти к следующему платежу
      <q-icon name="svguse:icons/iconsPay2.svg#arrow-right" size="24px" class="q-ml-xs" color="primary" />
    </div>

  </div>

</template>

<script setup>
import { useNumberDivider } from 'src/composables/useSplitNumber'
const props = defineProps({
  sum: Number
})
</script>
