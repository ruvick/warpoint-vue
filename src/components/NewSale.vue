<template>
  <q-card class="bg-blue-grey-9">
    <q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
      <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
    </q-btn>

    <q-card-section class="head">
      <div class="text-title-middle text-grey-10">Продажа</div>
    </q-card-section>

    <q-card-section class="row card-wrapper">
      <q-card-section class="sec-sidebar column">
        <SideBar :hubSales="hubSales" />
      </q-card-section>

      <q-card-section class="sec-content">
        <SaleContent :hubSales="hubSales" />
      </q-card-section>

      <q-card-section class="sec-busket">
        <SaleCart :hubSales="hubSales" />
      </q-card-section>

    </q-card-section>

  </q-card>
</template>

<script setup>
import { reactive, watchEffect } from 'vue'
import { flattenNomenclature, flattenWithParent } from 'src/composables/useSalesFuncs'
import SideBar from 'src/components/newsale/SideBar.vue'
import SaleContent from 'src/components/newsale/SaleContent.vue'
import SaleCart from 'src/components/newsale/SaleCart.vue'

const hubSales = reactive({
  salesGroups: [],
  sales: [],
  salesActived: null,
  searchSale: null,
  viewAll: false,
  viewTab: 'bar',
  cart: []
})



const compileSalesGroups = () => {
  const flatNomenclature = flattenNomenclature(hubSales.sales.children)

  if (hubSales.searchSale) {
    return hubSales.salesGroups = flatNomenclature.filter(nom =>
      nom.name.toLowerCase().includes(hubSales.searchSale.toLowerCase())
    )
  }

  if (hubSales.viewAll || (!hubSales.viewAll && !hubSales.salesActived)) {
    if (hubSales.viewTab === 'bar') return hubSales.salesGroups = flatNomenclature
    if (hubSales.viewTab === 'list') return hubSales.salesGroups = flattenWithParent(hubSales.sales.children).filter(group => group.nomenclature && group.nomenclature.length > 0)
  }

  if (!hubSales.viewAll && hubSales.salesActived) return hubSales.salesGroups = hubSales.salesActived.nomenclature || []

  return hubSales.salesGroups = flattenNomenclature(hubSales.sales.children)
}

watchEffect(() => {
  compileSalesGroups()
})

</script>
