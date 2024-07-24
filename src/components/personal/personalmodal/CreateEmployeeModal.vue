<template>

	<q-card class="booking-modal bg-blue-grey-9" style="height: 100%;">
		 <!-- Кнопка закрытия -->
		 <q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
		  <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="2rem" />
		 </q-btn>
	
		 <q-card-section class="booking-modal__wrapper" style="height: 100%; overflow: auto; display: flex; flex-direction: column;">
		  <!-- Header -->
		  <q-card-section class="booking-modal__header" style="padding: 0.875rem 1.5rem 0.875rem 3rem;">
			  <div class="text-title-middle text-grey-10">
				Создание нового сотрудника
			  </div>
		  </q-card-section>
	
		  <q-card-section class="booking-modal__body body-booking-modal row q-pt-lg q-pl-lg q-pr-lg q-pb-lg" style="height: 100%; gap: 0.625rem;">
			  <!-- Booking Navbar -->
			  <NavBarPersonal v-model:modelValue="model" :options="options" />  
	
			  <!-- Booking Content -->
			  <div class="body-booking-modal__content content-booking col">
				<div class="content-booking__wrapper column" style="min-height: 100%;">
					<!-- Content Header -->
					<div class="content-booking__header header-content-booking q-pl-xl q-pt-sm q-pt-md">
					 <div :class="['header-content-booking__title', 'text-title-middle', 'text-white', currentClass]" style="text-transform: uppercase;">
						 {{ currentLabel }}
					 </div>
					</div>
	
					<!-- Content Body -->
					<component :is="currentComponent" />
				</div>
			  </div>
		  </q-card-section>
		 </q-card-section>
	</q-card>

</template>

<script setup>

	import { ref, computed } from 'vue';
	import NavBarPersonal from './NavBarPersonal.vue';
	import PersonalCreateInfo from 'src/components/personal/personalmodal/personalmodalContent/PersonalCreateInfo.vue';
	import PersonalCreateLevel from 'src/components/personal/personalmodal/personalmodalContent/PersonalCreateLevel.vue';
	import PersonalCreatePassword from 'src/components/personal/personalmodal/personalmodalContent/PersonalCreatePassword.vue';

	const model = ref('info');
	
	const options = [
		{ label: 'Инфо', value: 'info', component: PersonalCreateInfo, class: '' },
		{ label: 'Уровень доступа', value: 'accessLevel', component: PersonalCreateLevel, class: '' },
		{ label: 'Пароль', value: 'password', component: PersonalCreatePassword, class: '' },
	];
	
	const currentComponent = computed(() => {
		const selectedOption = options.find(option => option.value === model.value);
		return selectedOption ? selectedOption.component : null;
	});
	
	const currentLabel = computed(() => {
		const selectedOption = options.find(option => option.value === model.value);
		return selectedOption ? selectedOption.label : '';
	});
	
	const currentClass = computed(() => {
		const selectedOption = options.find(option => option.value === model.value);
		return selectedOption ? selectedOption.class : '';
	});

</script>

<style lang="scss">

</style>