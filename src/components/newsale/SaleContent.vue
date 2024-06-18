<template>
  <div class="sec-content-head row items-center">
    <div class="text-title-middle text-white q-mr-sm" v-if="hubSales?.salesActived?.name">
      {{ hubSales?.salesActived?.name }}
    </div>
    <div class="text-title-middle text-white q-mr-sm" v-else></div>
    <q-tabs v-model="hubSales.viewTab" class="text-primary my-tabs no-ripple no-hover tabs-display q-ml-lg bg-dark">
      <q-tab name="bar">
        <q-icon name="svguse:icons/allIcons.svg#nav-tab-bar" size="22.5px" />
      </q-tab>
      <q-tab name="list">
        <q-icon name="svguse:icons/allIcons.svg#nav-tab-list" size="30px" />
      </q-tab>
    </q-tabs>

    <q-input
      color="grey-9"
      standout
      v-model="hubSales.searchSale"
      type="text"
      class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-ml-auto"
      placeholder="Название или артикул"
      style="min-width: 290px;"
    >
      <template v-slot:prepend>
        <q-icon name="svguse:icons/allIcons.svg#loop" size="32px" color="grey-9" />
      </template>
    </q-input>
  </div>


  <div class="sales q-pt-lg">
    <div class="overflowe-scroll">
      <div class="row sec-bar-sales" v-if="hubSales.viewTab === 'bar'">
        <div v-for="item in hubSales.salesGroups" :key="item.id" class="col-4 row justify-center">
          <q-card class="card-sale bg-null" flat>
            <div class="img-sec">
              <img src="" alt="">
            </div>
            <div class="text-subtitle text-white q-mt-sm">{{ item.name }}</div>
            <q-card-actions class="q-pa-none q-pt-sm">
              <div class="text-subtitle text-white">
                {{ useNumberDivider(item.retail_price / 100) }} ₽
              </div>

              <div class="btn-sec q-ml-auto">
                <q-btn
                  round
                  color="blue-1"
                  class="btn-no-effects"
                  size="10.7px"
                  @click="addinCart(item)"
                  v-if="!item.quantity"
                >
                  <q-icon name="svguse:icons/allIcons.svg#plusik" size="12px" color="white" />
                </q-btn>

                <div class="row control-cart-btn" v-else>
                  <q-btn color="positive" class="btn-minus btn-no-effects" @click="minusinCart(item)">
                    <q-icon name="svguse:icons/icons-btns.svg#minus-btn-nc" size="11px" color="white" />
                  </q-btn>
                  <q-btn color="positive" class="btn-info btn-no-effects" :disable="true">{{ item.quantity }}</q-btn>
                  <q-btn
                    color="positive"
                    class="btn-plus btn-no-effects"
                    @click="addinCart(item)"
                  >
                    <q-icon name="svguse:icons/icons-btns.svg#plus-btn-nc" size="11px" color="white" />
                  </q-btn>
                </div>
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <div v-if="(hubSales.viewTab === 'list' && !hubSales.salesActived) || (hubSales.viewTab === 'list' && hubSales.viewAll) && !hubSales.searchSale">
        <div
          v-for="list in hubSales.salesGroups"
          :key="list.id"
          class="sales-sec"
        >
          <div class="sales-sec-head row items-center" v-if="list.parentName">
            <div class="text-title-middle text-primary">{{ list.parentName }}</div>
            <q-icon name="svguse:icons/allIcons.svg#arrow-right" size="24px" color="primary" class="q-ml-sm q-mr-sm" />
            <div class="text-title-middle text-white">{{ list.name }}</div>
          </div>
          <div class="sales-sec-head row items-center" v-else>
            <div class="text-title-middle text-primary">{{ list.name }}</div>
          </div>

          <q-table :rows="list.nomenclature" :columns="columns" row-key="name" dark class="bg-null no-shadow my-table"
            hide-pagination :pagination="tablePagination">
            <template v-slot:body-cell-action="props">
              <q-td :props="props" class="td-action">
                <q-btn
                  round
                  color="blue-1"
                  class="btn-no-effects"
                  size="10.7px"
                  @click="addinCart(props.row)"
                  v-if="!props.row.quantity"
                >
                  <q-icon name="svguse:icons/allIcons.svg#plusik" size="12px" color="white" />
                </q-btn>

                <div class="row justify-center control-cart-btn" v-else>
                  <q-btn color="positive" class="btn-minus btn-no-effects" @click="minusinCart(props.row)">
                    <q-icon name="svguse:icons/icons-btns.svg#minus-btn-nc" size="11px" color="white" />
                  </q-btn>
                  <q-btn color="positive" class="btn-info btn-no-effects" :disable="true">{{ props.row.quantity }}</q-btn>
                  <q-btn
                    color="positive"
                    class="btn-plus btn-no-effects"
                    @click="addinCart(props.row)"
                  >
                    <q-icon name="svguse:icons/icons-btns.svg#plus-btn-nc" size="11px" color="white" />
                  </q-btn>
                </div>

              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <div v-if="(hubSales.viewTab === 'list' && hubSales.salesActived && !hubSales.viewAll) || hubSales.searchSale">
        <q-table :rows="hubSales.salesGroups" :columns="columns" row-key="name" dark class="bg-null no-shadow my-table"
          hide-pagination :pagination="tablePagination">
          <template v-slot:body-cell-action="props">
            <q-td :props="props" class="td-action">
              <q-btn
                round
                color="blue-1"
                class="btn-no-effects"
                size="10.7px"
                @click="addinCart(props.row)"
                v-if="!props.row.quantity"
              >
                <q-icon name="svguse:icons/allIcons.svg#plusik" size="12px" color="white" />
              </q-btn>

              <div class="row justify-center control-cart-btn" v-else>
                <q-btn color="positive" class="btn-minus btn-no-effects" @click="minusinCart(props.row)">
                  <q-icon name="svguse:icons/icons-btns.svg#minus-btn-nc" size="11px" color="white" />
                </q-btn>
                <q-btn color="positive" class="btn-info btn-no-effects" :disable="true">{{ props.row.quantity }}</q-btn>
                <q-btn
                  color="positive"
                  class="btn-plus btn-no-effects"
                  @click="addinCart(props.row)"
                >
                  <q-icon name="svguse:icons/icons-btns.svg#plus-btn-nc" size="11px" color="white" />
                </q-btn>
              </div>

            </q-td>
          </template>
        </q-table>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNumberDivider } from 'src/composables/useSplitNumber'

const props = defineProps({
  rows: Array,
  hubSales: Object
})

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Наименование',
    align: 'left',
    field: 'name',
    sortable: false
  },
  {
    name: 'retail_price',
    align: 'left',
    label: 'Цена',
    field: 'retail_price',
    sortable: false
  },
  {
    name: 'action',
    label: 'Добавить в корзину',
    field: 'action',
    sortable: false,
    align: 'center',
  },
]

const tablePagination = ref({
  rowsPerPage: -1
})

const addinCart = (item) => {
  // if (item.critical_qty < 1) return

  const findItem = props.hubSales.cart.find(el => el.id === item.id && el.retail_price === item.retail_price)

  if(!!findItem) {
    props.hubSales.cart.map(el => { if (el.id === item.id && el.retail_price === item.retail_price) el.quantity++ })
  } else {
    item.quantity = 1
    props.hubSales.cart.push(item)
  }
  // item.critical_qty--
}
const minusinCart = (item) => {
  if (item.quantity === 1) return
  // item.critical_qty++
  item.quantity--
}

</script>
