<template>

	<div class="content-booking__body body-content-booking row q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="column items-start">

			<div class="column col">

					<div class="row items-center" style="margin-bottom: 80px;">

						<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="orderSource"
							label="Источник заказа*" style="min-width: 264px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

							<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="typeGame"
							label="Тип игры*" style="min-width: 264px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

							<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="service"
							label="Услуга*" style="min-width: 264px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

					</div>

					<div class="row items-center">

						<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="date" 
							label="Дата*" style="min-width: 264px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

							<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="time"
							label="Время*" style="min-width: 264px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

							<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="duration"
							label="Длительность*" style="min-width: 264px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

							<q-btn unelevated color="blue-1" class="my-btn text-weight-bold q-mb-lg">
								<span class="block">Изменить дату и время</span>
							</q-btn>

					</div>

			</div>

			<div class="col">

				<div class="body-content-booking__table table-content-booking q-mb-md">
					<div class="table-content-booking__label text-grey-10">Дата создания:</div>
					<div class="table-content-booking__value">9 февраля 2024 в 10:20</div>
					<div class="table-content-booking__label text-grey-10">Администратор:</div>
					<div class="table-content-booking__value">Гусев Матвей</div>
				</div>

			</div>

		</div>
	
	</div>

	<!-- Content Booking Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-xs q-pl-md">
		<div class="footer-content-booking__inner row justify-center items-center" style="width: 100%; gap: 80px;">

			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Редактировать</span>
			</q-btn>

			<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" primary/>
			 
			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Сохранить</span>
			</q-btn>

			<q-btn unelevated class="my-btn text-weight-bold" style="background-color: #32353A; color:#616161;">
			  <span class="block">Сохранить</span>
		  </q-btn>

		</div>
	</div>

</template>

<script setup>

import { ref } from 'vue';

const orderSource = ref('');
const typeGame = ref('');
const service = ref('');
const date = ref('');
const time = ref('');
const duration = ref('');

</script>

<style >

	/* .body-content-booking .q-field--filled .q-field__control {
		height: 100%;
	} */
	.body-content-booking .q-field--filled .q-field__control {
    background: inherit !important;
	}

</style>