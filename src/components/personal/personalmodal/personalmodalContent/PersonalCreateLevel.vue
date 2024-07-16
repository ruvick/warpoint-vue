<template>

	<div class="personal-modal content-booking__body body-content-booking column q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="col q-mb-xl" style="width: 100%;">
			<div class="column q-pl-xl q-pb-lg">
				<div class="row items-center">
					<div class="text-h6 text-white q-mb-lg">Личные данные</div> 
				</div>
				<div class="row items-center" style="max-width: 75rem; width: 100%; gap: 1.5rem;">
					<q-input
						color="grey-9"
						standout
						v-model="surName"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="Фамилия"
						clearable 
						clear-icon="close" 
						style="width: 21rem;"
					/>
					<q-input
						color="grey-9"
						standout
						v-model="name"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="Имя"
						clearable 
						clear-icon="close"
						style="width: 21rem;"
					/>
					<q-input
						color="grey-9"
						standout
						v-model="patronymic"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="Отчество"
						clearable 
						clear-icon="close"
						style="width: 21rem;"
					/>
					<q-select
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						filled
						v-model="selectedOption"
						:options="typeGender"
						label="Пол"
						style="width: 21rem;"
					/>
					<q-input
						color="grey-9"
						standout
						v-model="name"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="Дата рождения"
						clearable 
						clear-icon="close"
						style="width: 21rem;"
					/>
				</div>
			</div>
			<q-separator style="background-color: #25272D;" />
		</div>

		<div class="col q-mb-xl" style="width: 100%;">
			<div class="column q-pl-xl q-pb-lg">
				<div class="row items-center">
					<div class="text-h6 text-white q-mb-lg">Контакты</div> 
				</div>
				<div class="row items-center" style="width: 100%; gap: 1.5rem;">
					<q-input
						color="grey-9"
						standout
						v-model="surName"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="Телефон"
						clearable 
						clear-icon="close" 
						style="width: 21rem;"
					/>
					<q-input
						color="grey-9"
						standout
						v-model="name"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="E-mail"
						clearable 
						clear-icon="close"
						style="width: 21rem;"
					/>
				</div>
			</div>
			<q-separator style="background-color: #25272D;" />
		</div>
		
	</div>

	<!-- Content Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-xs q-pl-md">
		<div class="footer-content-booking__inner row justify-between items-center" style="width: 100%;">
			<q-btn class="q-btn-no text-h6 no-hover text-grey-10 q-mr-md" outline flat label="Отмена" primary/>
			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Сохранить</span>
			</q-btn>
		</div>
	</div>
	
</template>

<script setup>

	import {ref} from 'vue';

	const surName = ref('');
	const name = ref('');
	const patronymic = ref('');
	const selectedOption = ref(null);
	const typeGender = ref([
		'Мужской', 'Женский',
	]);
	const typePost = ref([
		'Администратор', 'Управляющий',
	]);

</script>

<style lang="scss">
	.personal-modal {
		.my-input-standart-middle .q-field__inner .q-field__control .q-field__label {
			top: 1.125rem;
		}
	}

</style>