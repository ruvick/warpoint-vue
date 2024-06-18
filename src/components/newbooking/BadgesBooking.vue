<template>
  <div class="badge-statuses">
    <span
      class="flex items-center q-pr-sm q-mr-xs text-title-minimized text-white"
      v-for="(style, price) in priceAndStyles"
      :key="style + price"
    >
      <q-badge
        :color="stylesColor[style]"
        rounded
        class="q-mr-sm"
      />{{ useNumberDivider(price / 100) }} ₽
    </span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { stylesColor, getPriceAndStyles } from 'src/composables/useDateTimeBooking'
import { useNumberDivider } from 'src/composables/useSplitNumber'

const props = defineProps({
  listTimeslots: Array
})

const priceAndStyles = ref(null)

watch(props.listTimeslots, (newListTimeslots) => {
  if (!!props.listTimeslots) priceAndStyles.value = getPriceAndStyles(newListTimeslots)
}, { immediate: true })
</script>
