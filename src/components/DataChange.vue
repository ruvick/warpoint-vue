<template>
  <q-dialog
    v-model="dialog"
    class="dialog-date"
  >
    <q-card class="bg-blue-grey-9" :class="{'period-active': periodActive}">
      <q-card-section class="text-center q-pt-sm row justify-center sec-dates">
        <div class="date-sec">
          <q-date
            v-model="g.selectedDate"
            mask="YYYY-MM-DD"
            minimal
            color="positive"
            class="my-date bg-blue-grey-9 text-grey-10"
          />
        </div>
        <div class="date-sec">
          <q-date
            v-model="g.selectedDate"
            mask="YYYY-MM-DD"
            minimal
            color="positive"
            class="my-date bg-blue-grey-9 text-grey-10"
            v-if="periodActive"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none text-center section-period q-pt-sm">
        <div class="row q-pb-md q-pl-xl q-pr-xl items-start">
          <q-input
            color="grey-10"
            standout
            v-model="g.selectedDate"
            type="date"
            class="no-calendar my-input-date bg-dark text-subtitle q-ml-lg q-mb-sm"
            style="width: 148px"
            v-if="!periodActive"
          >
            <template v-slot:append>
              <q-icon name="svguse:icons/allIcons.svg#pen" size="14px" color="primary" />
            </template>
          </q-input>

          <div class="row inputs-periods q-ml-auto q-pl-xl" v-if="periodActive">
            <div class="row items-center q-mr-sm q-ml-lg">
              <div class="text-semimini text-grey-10 q-mb-sm">
                Начало периода
              </div>
              <q-input
                color="grey-10"
                standout
                v-model="g.selectedDate"
                type="date"
                class="no-calendar my-input-date bg-dark text-subtitle q-ml-lg q-mb-sm"
                style="width: 148px"
              >
                <template v-slot:append>
                  <q-icon name="svguse:icons/allIcons.svg#pen" size="14px" color="primary" />
                </template>
              </q-input>
            </div>
            <div class="row items-center q-ml-lg">
              <div class="text-semimini text-grey-10 q-mb-sm">
                Конец периода
              </div>
              <q-input
                color="grey-10"
                standout
                v-model="g.selectedDate"
                type="date"
                class="no-calendar my-input-date bg-dark text-subtitle q-ml-lg q-mb-sm"
                style="width: 148px"
              >
                <template v-slot:append>
                  <q-icon name="svguse:icons/allIcons.svg#pen" size="14px" color="primary" />
                </template>
              </q-input>
            </div>
          </div>

          <div class="column q-ml-auto items-center q-pb-sm">
            <q-toggle
              v-model="periodActive"
              class="toggle-switcher"
              color="primary"
            />
            <div class="row q-pt-xs text-grey-1 q-mr-xs">
              <div class="text-minized q-mr-md" :class="{'text-primary': !periodActive}">День</div>
              <div class="text-minized q-ml-xs" :class="{'text-primary': periodActive}">Период</div>
            </div>
          </div>
        </div>
        <div class="periods-btns">
          <q-btn
            v-for="item in periods"
            :key="item"
            unelevated
            rounded
            color="blue-grey-8"
            class="text-blue-2 my-btn-period text-semimax q-ma-sm"
            no-caps
            :label="item.label"
          />
        </div>
      </q-card-section>

      <q-card-actions class="row q-pt-md q-pb-md q-pr-xl q-pl-xl">
        <div class="col text-left">
          <q-btn flat label="Отмена" v-close-popup class="text-grey-10 no-hover my-btn" />
        </div>
        <div class="col text-right">
          <q-btn unelevated label="OK" color="blue-1" v-close-popup class="my-btn big-btn semicircular text-white" padding="16px 16px" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>

  <div class="row">
    <q-btn square color="primary" class="br-left bg-blue-grey-8 q-pl-xs q-pr-xs" @click="chengePrevDay">
      <q-icon name="svguse:icons/allIcons.svg#arrow-prev" size="28.8px" color="primary" />
    </q-btn>
    <q-btn square color="dark" class="my-btn my-btn-select text-weight-medium" no-caps @click="dialog = true">
      <span class="block text-grey-10 q-mr-xs q-ml-sm">{{ formatDateinDDMM(g.selectedDate) }}</span>
      <q-icon name="svguse:icons/allIcons.svg#celendar" size="25px" class="q-ml-sm q-mr-sm" />
    </q-btn>
    <q-btn square color="primary" class="br-right bg-blue-grey-8 q-pl-xs q-pr-xs" @click="chengeNextDay">
      <q-icon name="svguse:icons/allIcons.svg#arrow-next" size="28.8px" color="primary" />
    </q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from 'src/stores/main.js'
import { formatDateinDDMM, getNextDay, getPreviousDay } from 'src/composables/useFormatDate.js'

const { g } = useMainStore()

const dialog = ref(false)
const periodActive = ref(false)

const periods = ref([
  {
    label: 'Сегодня',
    value: ''
  },
  {
    label: 'Вчера',
    value: ''
  },
  {
    label: 'За все время',
    value: ''
  },
  {
    label: 'Текущая неделя',
    value: ''
  },
  {
    label: 'Прошлая неделя',
    value: ''
  },
  {
    label: 'Текущий месяц',
    value: ''
  },
  {
    label: 'Прошлый месяц',
    value: ''
  },
])

const chengeNextDay = () => {
  g.selectedDate = getNextDay(g.selectedDate)
}
const chengePrevDay = () => {
  g.selectedDate = getPreviousDay(g.selectedDate)
}


</script>
