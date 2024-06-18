<template>
  <q-list
    v-for="list in hubSales?.sales?.children"
    :key="list.id"
    dark
    class="list-expansion-sales q-mt-sm"
  >
    <q-expansion-item
      :label="list.name"
      class="text-title-minimized text-caps"
      :class="{'no-arrow': !list.children.length}"
    >
      <template v-slot:header>
        <div
          class="q-item__section q-item__section--title"
          @click.stop="handleExpansionItemClick(list)"
          :class="{'text-primary': hubSales.salesActived?.id === list?.id}"
        >
          <div class="q-item__label">{{ list.name }}</div>
        </div>
      </template>
      <q-card class="bg-null">
        <q-card-section>
          <q-radio
            v-for="check in list.children"
            :key="check.id"
            v-model="hubSales.salesActived"
            :val="check"
            :label="check.name"
            class="text-blue-3 text-subtitle text-no-caps"
            @update:model-value="(() => { console.log(check) })"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>

  <q-checkbox
    v-model="hubSales.viewAll"
    label="Показать все"
    color="blue-1"
    class="my-check text-grey-10 text-subtitle q-mt-auto q-mb-xl"
  />
</template>

<script setup>
import { onMounted } from 'vue'
import { useSaleStore } from 'src/stores/sale.js'

const props = defineProps({
  hubSales: Object
})

const saleStore = useSaleStore()


const getNomenclature = async () => {
  try {
    const resp = await saleStore.getNomenclature()
    props.hubSales.sales = resp
  } catch (e) {
    console.log(e)
  }
}

const handleExpansionItemClick = (val) => {
  props.hubSales.salesActived = val
}

onMounted(() => {
  getNomenclature()
})
</script>
