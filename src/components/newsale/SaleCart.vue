<template>
  <q-dialog
    v-model="dialogPay"
    class="dialog-pay"
  >
    <PayModal />
  </q-dialog>

  <div class="row items-center justify-center no-cards sec-busket-title" v-if="!hubSales.cart.length">
    <div class="text-subtitle text-grey-10">Корзина пуста</div>
    <q-icon name="svguse:icons/allIcons.svg#card-ico" class="q-ml-sm" color="grey-10" size="24px" />
  </div>

  <div class="row items-center justify-center q-pt-md" v-if="hubSales.cart.length">
    <div class="text-title-middle text-white">Корзина</div>
    <q-icon name="svguse:icons/allIcons.svg#card-ico" class="q-ml-sm" color="grey-10" size="24px" />
  </div>

  <div class="column sec-busket-content" v-if="hubSales.cart.length">
    <q-table
      :rows="hubSales.cart"
      :columns="columns"
      row-key="name"
      dark
      class="bg-null no-shadow my-table table-cart q-mt-lg"
      hide-pagination
      :pagination="tablePagination"
    >
      <template v-slot:body-cell-index="props">
        <q-td :props="props" class="td-index">
          <div class="text-white">
            {{ props.pageIndex + 1 }}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-name="props">
        <q-td :props="props" class="td-name">
          <div class="text-white text">
            {{ props.row.name }}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-price="props">
        <q-td :props="props" class="td-price">
          <div class="text-white row items-center no-wrap" v-if="!props.row.customPrice">
            <span>{{ useNumberDivider(props.row.retail_price / 100) }} ₽</span>
            <q-icon
              name="svguse:icons/allIcons.svg#pen"
              class="q-ml-sm cursor-pointer"
              color="primary"
              size="24px"
              @click="checkEditPrice(props.row)"
            />
          </div>

          <q-input
            color="grey-10"
            standout
            v-model="props.row.customPrice"
            type="number"
            class="no-calendar my-input-date bg-dark text-subtitle"
            style="width: 120px"
            v-if="props.row.customPrice"
          >
            <template v-slot:append>
              <q-icon
                name="svguse:icons/icons-btns2.svg#check"
                class="cursor-pointer q-mr-xs"
                size="20px"
                color="primary"
                @click="applyPrice(props.row)"
              />
              <q-icon
                name="svguse:icons/icons-btns2.svg#close"
                class="cursor-pointer"
                size="12px"
                color="primary"
                @click="denyPrice(props.row)"
              />
            </template>
          </q-input>

        </q-td>
      </template>
      <template v-slot:body-cell-available="props">
        <q-td :props="props" class="td-available">
          <div class="text-white">
            <!-- {{ findCriticalQty(props.row.id, hubSales.salesGroups) }} -->
            <q-icon name="svguse:icons/infinity.svg#infinity" size="24px" color="white" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-quantity="props">
        <q-td :props="props" class="td-quantity">
          <div class="row items-center justify-center bg-blue-grey-8 sec-quantity no-wrap">
            <q-btn round color="dark" class="btn-no-effects q-ml-xs" size="9px" @click="minusQuantityity(props.row)">
              <q-icon name="svguse:icons/allIcons.svg#minus-btn" size="12px" color="primary" />
            </q-btn>
            <span class="text-quantity">{{ props.row.quantity }}</span>
            <q-btn round color="dark" class="btn-no-effects q-mr-xs" size="9px" @click="plusQuantityity(props.row)">
              <q-icon name="svguse:icons/allIcons.svg#plusik" size="12px" color="primary" />
            </q-btn>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-sum="props">
        <q-td :props="props" class="td-sum">
          <div class="text-white">
            {{ useNumberDivider(props.row.retail_price * props.row.quantity / 100) }} ₽
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-action="props">
        <q-td :props="props" class="td-action">
          <q-icon name="svguse:icons/icon-new.svg#del" size="24px" color="blue-2" class="cursor-pointer" @click="delIteminCart(props.row)" />
        </q-td>
      </template>
    </q-table>

    <div class="q-pa-md">
      <q-list class="list-itog">
        <q-item class="row items-center">
          <span class="text-caps text-minized-bold text-grey-1">ИТОГО:</span>
          <span class="text-subtitle text-white">{{ useNumberDivider(resultPrice.result / 100) }} ₽</span>
        </q-item>
        <q-item class="row items-center">
          <span class="text-caps text-minized-bold text-grey-1">СУММА СКИДКИ:</span>
          <span class="text-subtitle text-white">{{ useNumberDivider(clientInfo.sumSale / 100) }} ₽</span>
        </q-item>
        <q-item class="row items-center">
          <span class="text-caps text-minized-bold text-grey-1">ИТОГО К ОПЛАТЕ:</span>
          <span class="text-subtitle text-white">{{ useNumberDivider(resultPrice.resultSale / 100) }} ₽</span>
        </q-item>
      </q-list>
    </div>

    <div class="q-pa-md q-mt-auto">
      <div class="cart-bonus bg-blue-grey-9 q-pa-md">
        <div class="text-title-minimized text-white">
          Проверим, есть ли бонусы у клиента:
        </div>
        <div class="row q-mt-md items-center">
          <q-input
            color="grey-9"
            standout
            v-model="clientInfo.clientPhone"
            type="text"
            class="my-input-standart my-input-standart-big bg-blue-grey-8 inp-phone "
            label="Телефон клиента"
            clearable
            clear-icon="close"
            mask="+7 (###) ###-##-##"
          />
          <div class="column q-ml-md q-mr-auto" v-if="clientInfo.balance !== null">
            <div class="row">
              <div class="text-subtitle text-grey-9">Имя:</div>
              <div class="text-subtitle text-white q-ml-sm">{{ clientInfo.name }}</div>
            </div>
            <div class="row q-mt-xs q-mb-xs">
              <div class="text-subtitle text-grey-9">Уровень:</div>
              <div class="text-subtitle text-white q-ml-sm">{{ clientInfo.level }}</div>
            </div>
            <div class="row">
              <div class="text-subtitle text-grey-9">Бонусный баланс:</div>
              <div class="text-subtitle text-white q-ml-sm">{{ useNumberDivider(clientInfo.balance / 100) }}</div>
            </div>
          </div>
          <q-btn
            unelevated
            color="blue-1"
            class="my-btn big-btn text-weight-bold q-ml-md"
            label="ок"
            padding="0 16px"
            v-if="clientInfo.clientPhone?.length > 17"
            @click="getSale()"
          />
        </div>
        <div class="text-mini text-grey-9 q-mt-sm" v-if="!clientInfo.saleActive">
          Клиент не зарегистрирован, оплата бонусами недоступна
        </div>
      </div>
    </div>

    <div class="row q-mt-md q-pb-lg q-mb-sm">
      <q-btn
        unelevated
        color
        class="my-btn big-btn q-mr-md text-weight-bold q-ml-md"
        label="очистить всё"
        padding="0 16px"
      />
      <q-btn
        unelevated
        color="positive"
        class="my-btn big-btn q-mr-md text-weight-bold q-ml-auto"
        label="Принять оплату"
        padding="0 16px"
        @click="dialogPay = true"
      />
    </div>
  </div>

</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useSaleStore } from 'src/stores/sale.js'
import { useNumberDivider } from 'src/composables/useSplitNumber'
import { findNestedItemById } from 'src/composables/useSalesFuncs'
import PayModal from 'src/components/PayModal.vue'

const saleStore = useSaleStore()

const props = defineProps({
  hubSales: Object
})

const columns = [
  {
    name: 'index',
    required: true,
    label: '№',
    align: 'left',
    field: 'index',
    sortable: false
  },
  {
    name: 'name',
    required: true,
    label: 'Наименование',
    align: 'left',
    field: 'name',
    sortable: false
  },
  {
    name: 'price',
    align: 'left',
    label: 'Цена',
    field: 'price',
    sortable: false
  },
  {
    name: 'available',
    label: 'Доступное кол-во',
    field: 'available',
    sortable: false,
    align: 'center',
  },
  {
    name: 'quantity',
    label: 'Кол-во к продаже',
    field: 'quantity',
    sortable: false,
    align: 'center',
  },
  {
    name: 'sum',
    label: 'Сумма',
    field: 'sum',
    sortable: false,
    align: 'center',
  },
  {
    name: 'action',
    label: 'Удалить из заказа',
    field: 'action',
    sortable: false,
    align: 'center',
  },
]
const tablePagination = ref({
  rowsPerPage: -1
})
const dialogPay = ref(false)

const clientInfo = reactive({
  sumSale: 0,
  saleActive: true,
  balance: null,
  name: null,
  level: null,
  clientPhone: null
})

const plusQuantityity = (item) => {
  // const nestedItem = findNestedItemById(props.hubSales.salesGroups, item.id)

  // if (nestedItem && nestedItem.critical_qty > 0) {
    item.quantity++
    // nestedItem.critical_qty--
  // }
}

const minusQuantityity = (item) => {
  // const nestedItem = findNestedItemById(props.hubSales.salesGroups, item.id)

  // if (nestedItem && item.quantity > 1) {
  if (item.quantity > 1) {
    item.quantity--
    // nestedItem.critical_qty++
  }
}

const delIteminCart = (item) => {
  // props.hubSales.cart.forEach(el => {
  //   if (el.id === item.id) {
  //     el.critical_qty += el.quantity
  //   }
  // })

  props.hubSales.cart = props.hubSales.cart.filter(el => !(el.id === item.id && el.retail_price === item.retail_price))

  const nestedItem = findNestedItemById(props.hubSales.salesGroups, item.id)
  if (nestedItem && !item.hereditary) {
    // nestedItem.critical_qty += item.quantity
    nestedItem.quantity = 0
  }
}

const checkEditPrice = (item) => {
  item.customPrice = item.retail_price / 100
}

const applyPrice = (item) => {
  const tolerance = 0.01

  const foundMatch = props.hubSales.cart.some(el => {
    const elRetailPriceConverted = el.retail_price / 100
    return el.id === item.id && Math.abs(elRetailPriceConverted - item.customPrice) < tolerance
  })

  if (foundMatch) return delete item.customPrice

  if (item.customPrice === item.retail_price / 100 || item.customPrice < 1) {
    delete item.customPrice
    return
  } else {
    // item.critical_qty--
    let newItem = { ...item }
    newItem.retail_price = newItem.customPrice * 100
    newItem.quantity = 1
    newItem.hereditary = true

    delete item.customPrice
    delete newItem.customPrice

    // const nestedItem = findNestedItemById(props.hubSales.salesGroups, item.id)
    // if (nestedItem) {
    //   nestedItem.critical_qty--
    // }

    props.hubSales.cart.push(newItem)
  }
}

const denyPrice = (item) => {
  return delete item.customPrice
}

const getSale = async () => {
  try {
    const resp = await saleStore.getSale(clientInfo.clientPhone)
    clientInfo.balance = resp.balance
    clientInfo.name = resp.customer.last_name
    clientInfo.level = resp.loyalty_level.name
  } catch(e) {
    clientInfo.balance = null
    clientInfo.name = null
    clientInfo.level = null
    clientInfo.saleActive = false
  }
}

const resultPrice = computed(() => {
  let itog = props.hubSales.cart.reduce((itogSum, {retail_price, quantity}) => itogSum + (retail_price * quantity), 0)
  let itogWithSale = itog - clientInfo.sumSale
  return {
    result: itog,
    resultSale: itogWithSale
  }
})



</script>
