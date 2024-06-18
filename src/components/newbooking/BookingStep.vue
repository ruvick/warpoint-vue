<template>
  <div class="step-sec q-mb-md">
    <div class="text-title-minimized text-white">Шаг 4: бронь</div>
  </div>

  <div class="step-sec step-sec--booking q-mt-xl">
    <div class="row">
      <div class="col col-info">
        <div class="text-subtitle text-white q-mb-lg">Детали брони</div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Источник:</div>
          <div class="col text-white">{{ props.formData.sourceOrder.name }}</div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Тип игры:</div>
          <div class="col text-white">{{ props.formData.typeGame.name }}</div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Услуга:</div>
          <div class="col text-white">{{ props.formData.service.name }}</div>
        </div>
        <div class="row text-subtitle q-mb-lg">
          <div class="col text-grey-10">Кол-во игроков:</div>
          <div class="col text-white">{{ props.formData.persons }}</div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Длительность:</div>
          <div class="col text-white"></div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Дата:</div>
          <div class="col text-white"></div>
        </div>
        <div class="row text-subtitle q-mb-lg">
          <div class="col text-grey-10">Время:</div>
          <div class="col text-white"></div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Имя клиента:</div>
          <div class="col text-white">{{ props.formData.first_name }} {{ props.formData.last_name }}</div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Телефон:</div>
          <div class="col text-white">{{ props.formData.phone }}</div>
        </div>
        <div class="row text-subtitle q-mb-lg">
          <div class="col text-grey-10">E-mail:</div>
          <div class="col text-white" v-if="!!props.formData.email">{{ props.formData.email }}</div>
          <div class="col text-white" v-else>—</div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Стоимость:</div>
          <div class="col text-white">{{ useNumberDivider(props.formData.timeBooking?.price * formData?.persons / 100) }} ₽</div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Промокод:</div>
          <div class="col text-white"></div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Скидка</div>
          <div class="col text-white"></div>
        </div>
        <div class="row text-subtitle q-mb-sm">
          <div class="col text-grey-10">Итого к оплате:</div>
          <div class="col text-white">{{ useNumberDivider(props.formData.timeBooking?.price * formData?.persons / 100) }} ₽</div>
        </div>
      </div>

      <div class="col col-fields">
        <div class="column q-pb-xs">
          <q-input
            color="grey-9"
            standout
            v-model="props.formData.comment"
            type="textarea"
            class="my-input-standart my-input-textarea bg-blue-grey-8"
            placeholder="Комментарий клиента"
          />
        </div>
        <div class="row items-center q-mt-xl">
          <q-input
            color="grey-9"
            standout
            v-model="props.formData.promo"
            type="text"
            class="my-input-standart my-input-standart-big bg-blue-grey-8 inp-promo"
            label="Промокод"
            clearable
            clear-icon="close"
          />
          <q-btn
            outline
            color="primary"
            class="my-btn q-mr-md text-weight-bold q-ml-lg"
            label="Применить"
            :disable="!props.formData.promo"
          />
        </div>
      </div>
    </div>
  </div>

  <q-card-actions class="sec-navigation q-mt-auto">
    <q-btn
      flat
      label="Назад"
      class="text-grey-10 no-hover my-btn q-mr-auto"
      @click="emit('nextStep', 3)" />
    <q-btn
      unelevated
      label="забронировать"
      color="blue-1"
      class="my-btn big-btn semicircular text-white btn-disabled text-bold"
      padding="16px"
      type="submit"
    />
  </q-card-actions>
</template>

<script setup>
import { computed } from 'vue'
import { useNumberDivider } from 'src/composables/useSplitNumber'

const props = defineProps({
  formData: Object
})

</script>
