<template>
	<q-card class="booking-modal bg-blue-grey-9" style="height: 100%;">
	
		 <!-- Кнопка закрытия -->
		 <q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
		  <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
		 </q-btn>
	
		 <q-card-section class="booking-modal__wrapper" style="height: 100%; padding-bottom: 50px;">
	
		  <!-- Header -->
		  <q-card-section class="booking-modal__header" style="padding: 14px 24px 14px 48px;">
			  <div class="text-title-middle text-grey-10">Управление бронью <span style="color: #fff;">№419-562: VR-ARENA / Открытая игра / 9 февраля 2024 (16:00 - 18:00)</span></div>
		  </q-card-section>
	
		  <q-card-section class="booking-modal__body body-booking-modal row q-pt-lg q-pl-lg q-pr-lg q-pb-lg" style="height: 100%; gap: 10px;">
	
			  <!-- Booking Navbar -->
			  <NavBarBooking v-model:modelValue="model" :options="options" />
	
			  <!-- Booking Content -->
			  <div class="body-booking-modal__content content-booking col">
	
				<div class="content-booking__wrapper column" style="height: 100%;">
	
					<!-- Content Booking Header -->
					<div class="content-booking__header header-content-booking q-pt-sm q-pt-md">
					 <div class="header-content-booking__title text-title-middle text-white" style="text-transform: uppercase;">
						 {{ currentLabel }}
					 </div>
					</div>
	
					<!-- Content Booking Body -->
					<component :is="currentComponent" />
	
				</div>
	
			  </div>
	
		  </q-card-section>
	
		 </q-card-section>
	
	</q-card>
	</template>
	
	<script setup>
		import { ref, computed } from 'vue';
		import NavBarBooking from './NavBarBooking.vue';
		import BookingInfo from 'src/components/bookingmodal/bookingmodalContent/BookingInfo.vue';
		import BookingService from 'src/components/bookingmodal/bookingmodalContent/BookingService.vue';
		import BookingClient from 'src/components/bookingmodal/bookingmodalContent/BookingClient.vue';
		import BookingOrder from 'src/components/bookingmodal/bookingmodalContent/BookingOrder.vue';
		import BookingPlayers from 'src/components/bookingmodal/bookingmodalContent/BookingPlayers.vue';
		import BookingPayments from 'src/components/bookingmodal/bookingmodalContent/BookingPayments.vue';
		import BookingOperations from 'src/components/bookingmodal/bookingmodalContent/BookingOperations.vue';
		import BookingUTM from 'src/components/bookingmodal/bookingmodalContent/BookingUTM.vue';
		import BookingChat from 'src/components/bookingmodal/bookingmodalContent/BookingChat.vue';
		import BookingFeedback from 'src/components/bookingmodal/bookingmodalContent/BookingFeedback.vue';
		
		const model = ref('info');
		const promocodeBooking = ref('');
		
		const options = [
		{ label: 'Инфо', value: 'info', component: BookingInfo },
		{ label: 'Услуга', value: 'service', component: BookingService },
		{ label: 'Клиент', value: 'client', component: BookingClient },
		{ label: 'Заказ', value: 'order', component: BookingOrder },
		{ label: 'Игроки', value: 'players', component: BookingPlayers },
		{ label: 'Платежи', value: 'payments', component: BookingPayments },
		{ label: 'Операции', value: 'operations', component: BookingOperations },
		{ label: 'UTM', value: 'UTM', component: BookingUTM },
		{ label: 'Чат', value: 'chat', component: BookingChat },
		{ label: 'Отзыв', value: 'feedback', component: BookingFeedback },
		];
		
		const currentComponent = computed(() => {
		const selectedOption = options.find(option => option.value === model.value);
		return selectedOption ? selectedOption.component : null;
		});
		
		const currentLabel = computed(() => {
		const selectedOption = options.find(option => option.value === model.value);
		return selectedOption ? selectedOption.label : '';
		});
	</script>
	
	<style>

	</style>