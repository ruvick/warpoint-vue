<template>
  <q-card class="bg-blue-grey-9">
    <q-card-section class="dialog-head row items-center">
      <div class="text-title-middle text-grey-10 q-mr-auto">Приём оплаты</div>
      <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="grey-9" size="28px" class="cursor-pointer" v-close-popup />
    </q-card-section>

    <q-card-section class="pay-bar column" :class="{'pay-bar-horisontal justify-center': tab === null}">
      <div class="text-title-minimized text-white q-mb-lg text-center q-pb-xs" v-if="!tab">Выберите способ оплаты:</div>
      <q-tabs
        v-model="tab"
        :vertical="!!tab"
        class="text-primary my-tabs tab-pay"
      >
        <q-tab name="sertificat" icon="svguse:icons/iconsPay.svg#price" label="подарочный сертификат" />
        <q-tab name="non-cash" icon="svguse:icons/iconsPay.svg#noncash" label="безналичная" />
        <q-tab name="cash" icon="svguse:icons/iconsPay.svg#cash" label="наличная" />
        <q-tab name="bonus" icon="svguse:icons/iconsPay.svg#bonus" label="бонусами" />
        <q-tab name="online" icon="svguse:icons/iconsPay.svg#online" label="онлайн по ссылке" />
      </q-tabs>

      <div class="q-mt-auto q-pr-lg" v-if="!!tab">
        <div class="row no-wrap q-mb-lg items-end">
          <div class="text-title-minimized text-grey-10">Полная стоимость:</div>
          <div class="text-title-middle text-white q-ml-auto text-no-wrap">50 000 ₽</div>
        </div>
        <div class="row no-wrap q-mb-sm items-end">
          <div class="text-title-minimized text-grey-10">Оплачено:</div>
          <div class="text-title-middle text-white q-ml-auto text-no-wrap">0 ₽</div>
        </div>
        <div class="row no-wrap items-end">
          <div class="text-title-minimized text-grey-10">Остаток к оплате:</div>
          <div class="text-title-middle text-warning q-ml-auto text-no-wrap">50 000 ₽</div>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="pay-content">

      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        class="bg-blue-grey-9"
      >
        <q-tab-panel name="sertificat" class="panel-sertificat">
          <SertificatPanel :data="data" />
        </q-tab-panel>

        <q-tab-panel name="non-cash">
          <NonCash :data="data" />
        </q-tab-panel>

        <q-tab-panel name="cash">
          <CashPay :data="data" />
        </q-tab-panel>

        <q-tab-panel name="bonus">
          <BonusPay :data="data" />
        </q-tab-panel>

        <q-tab-panel name="online">
          <OnlinePay :data="data" />
        </q-tab-panel>

      </q-tab-panels>

    </q-card-section>


  </q-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import SertificatPanel from 'src/components/paymodal/SertificatPanel.vue'
import NonCash from 'src/components/paymodal/NonCash.vue'
import CashPay from 'src/components/paymodal/CashPay.vue'
import BonusPay from 'src/components/paymodal/BonusPay.vue'
import OnlinePay from 'src/components/paymodal/OnlinePay.vue'

const tab = ref(null)

const data = reactive({
  sertificat: {
    number: null,
    balance: null,
    available: null,
    pin: null,
    sum: null,
  },
  nonCash: {
    sum: null,
  },
  cash: {
    cash: null,
    withPay: null,
  },
  bonus: {
    balance: null,
    available: null,
    sum: null,
    code: null,
  },
  online: {
    sum: null,
  },
  payApproved: false
})

</script>
