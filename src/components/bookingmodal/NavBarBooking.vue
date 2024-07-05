<template>
	<div class="body-booking-modal__navbar navbar-booking-modal col-2 column items-start">
		 <!-- Booking Navbar Header -->
		 <div class="navbar-booking-modal__header header-navbar-booking" style="flex: 1 1 auto; width: 100%;">
		  <q-btn-toggle
			  v-model="localModel"
			  toggle-color="primary"
			  flat
			  class="header-navbar-booking__buttons column items-start"
			  :options="options"
		  />
		 </div>
	
		 <!-- Booking Navbar Footer -->
		 <div class="navbar-booking-modal__footer footer-navbar-booking column" style="gap: 30px;">
	
		  <div class="footer-navbar-booking__item column">
			  <div class="footer-navbar-booking__item-text text-grey-10 q-mb-xs">Изменить статус брони:</div>
			  <q-btn unelevated color="yellow-8" class="my-btn q-mr-md text-weight-bold">
				<span class="block">Новая</span>
			  </q-btn>
		  </div>
	
		  <div class="footer-navbar-booking__item column">
			  <div class="footer-navbar-booking__item-text text-grey-10">Итого стоимость: <span class="text-white">55 000 ₽</span></div>
			  <div class="footer-navbar-booking__item-text text-grey-10 q-mb-xs">Остаток к оплате: <span class="text-white">50 000 ₽</span></div>
			  <q-btn unelevated color="green" class="my-btn q-mr-md text-weight-bold">
				<span class="block">Принять оплату</span>
			  </q-btn>
		  </div>
	
		  <div class="footer-navbar-booking__item column">
			  <q-btn unelevated color="red" class="my-btn q-mr-md text-weight-bold">
				<span class="block q-mr-xs">Запустить игру</span>
				<q-icon name="svguse:icons/allIcons.svg#power" color="white" size="26px" />
			  </q-btn>
		  </div>
	
		 </div>
	</div>
	</template>
	
	<script setup>
		import { ref, watch, toRefs } from 'vue';
		
		const props = defineProps({
		modelValue: {
			type: String,
			required: true
		},
		options: {
			type: Array,
			required: true
		}
		});
		
		const emit = defineEmits(['update:modelValue']);
		
		const { modelValue, options } = toRefs(props);
		const localModel = ref(modelValue.value);
		
		watch(localModel, (newValue) => {
		emit('update:modelValue', newValue);
		});
	</script>
	
	<style>
		.header-navbar-booking__buttons {
			width: 100%;
		}
		.header-navbar-booking__buttons .q-btn-item {
			width: 100%;
			align-self: start;
			color: #C7CCCC;
		}
		.header-navbar-booking__buttons .my-custom-toggle {
			border: 1px solid #027be3;
		}
		.header-navbar-booking__buttons .text-center {
			text-align: left;
			justify-content: start;
		}
		.header-navbar-booking__buttons .text-center span {
			font-size: 20px;
			font-weight: 500;
			line-height: 23.44px;
			padding: 8px 13px;
			width: 100%;
		}
		.header-navbar-booking__buttons .q-btn-item:hover .q-focus-helper {
			opacity: 0;
		}
	</style>