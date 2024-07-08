<template>
	<div class="content-booking__body body-content-booking row q-pt-xl" style="flex: 1 1 auto; color: #fff;">
		 <div class="column col items-start">
		  <div class="body-content-booking__inputs row items-center" style="margin-bottom: 7.5rem; width: 100%;">
			  <q-input
				class="q-mr-lg q-mb-lg"
				clearable
				clear-icon="close"
				filled
				v-model="phone"
				mask="AAAA - #### - #### - SSS"
				label="Телефон*"
				style="max-width: 320px; width: 100%; border-radius: 0.375rem; overflow: hidden; background-color: #25272D;"
			  />
			  <q-input
				class="q-mr-lg q-mb-lg"
				clearable
				clear-icon="close"
				filled
				v-model="name"
				label="Имя*"
				style="max-width: 320px; width: 100%; border-radius: 0.375rem; overflow: hidden; background-color: #25272D;"
			  />
			  <q-input
				class="q-mr-lg q-mb-lg"
				clearable
				clear-icon="close"
				filled
				v-model="surname"
				label="Фамилия*"
				style="max-width: 320px; width: 100%; border-radius: 0.375rem; overflow: hidden; background-color: #25272D;"
			  />
			  <q-input
				class="q-mb-lg"
				clearable
				clear-icon="close"
				filled
				v-model="email"
				label="Email"
				style="max-width: 320px; width: 100%; border-radius: 0.375rem; overflow: hidden; background-color: #25272D;"
			  />
		  </div>
	
		  <div class="row">
			  <div class="col-auto">
				<div class="body-content-booking__table table-content-booking q-mb-md">
					<div class="table-content-booking__label text-grey-10">Имя:</div>
					<div class="table-content-booking__value">Наталья</div>
					<div class="table-content-booking__label text-grey-10">Фамилия:</div>
					<div class="table-content-booking__value">—</div>
					<div class="table-content-booking__label text-grey-10">Телефон:</div>
					<div class="table-content-booking__value">+7 (927) 987-65-48</div>
					<div class="table-content-booking__label text-grey-10">E-mail:</div>
					<div class="table-content-booking__value">natanuta@example.ru</div>
				</div>
	
				<div class="body-content-booking__table table-content-booking q-mb-md">
					<div class="table-content-booking__label text-grey-10">Кол-во визитов:</div>
					<div class="table-content-booking__value">5</div>
					<div class="table-content-booking__label text-grey-10">Потрачено:</div>
					<div class="table-content-booking__value">15 000 ₽</div>
					<div class="table-content-booking__label text-grey-10">Бонусы:</div>
					<div class="table-content-booking__value">1 050</div>
					<div class="table-content-booking__label text-grey-10">Статус:</div>
					<div class="table-content-booking__value">Бронзовый</div>
				</div>
	
				<div class="body-content-booking__table table-content-booking">
					<div class="table-content-booking__label text-grey-10">Место первой <br> регистрации:</div>
					<div class="table-content-booking__value">Екатеринбург, Радуга</div>
					<div class="table-content-booking__label text-grey-10">Откуда узнали:</div>
					<div class="table-content-booking__value">От знакомых</div>
				</div>
			  </div>
		  </div>
		 </div>
	</div>
	
	<!-- Content Booking Footer -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-xs q-pl-md">
		 <div class="footer-content-booking__inner row justify-center items-center" style="width: 100%; gap: 80px;">
		  <q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" primary />
		  <q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
			  <span class="block">Сохранить</span>
		  </q-btn>
		  <q-btn unelevated class="my-btn text-weight-bold" style="background-color: #32353A; color:#616161;">
			  <span class="block">Сохранить</span>
		  </q-btn>
		  <q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
			  <span class="block">Сменить клиента</span>
		  </q-btn>
		 </div>
	</div>
	</template>
	
	<script setup>

	import { ref } from 'vue';
	
	const phone = ref('');
	const name = ref('');
	const email = ref('');
	const surname = ref('');

	</script>