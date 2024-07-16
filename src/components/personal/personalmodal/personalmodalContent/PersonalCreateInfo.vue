<template>

	<div class="content-booking__body body-content-booking column q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="col" style="width: 100%;">
			<div class="row items-center">
				<div class="text-h6 text-white q-mb-lg">Личные данные</div> 
			</div>
			<div class="row items-center" style="max-width: 1060px; width: 100%; gap: 24px;">
				<q-input
					color="grey-9"
					standout
					v-model="surName"
					type="text"
					class="my-input-standart my-input-standart-middle bg-blue-grey-8"
					placeholder="Фамилия"
					clearable 
					clear-icon="close" 
					style="width: 336px;"
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
					style="width: 336px;"
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
					style="width: 336px;"
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
					style="width: 336px;"
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
					style="width: 336px;"
				/>
			</div>
			<q-separator style="background-color: #25272D;" />
		</div>
		
	</div>

	<!-- Content Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-xs q-pl-md">
		<div class="footer-content-booking__inner row justify-between items-center" style="width: 30%; margin: 0 auto;">
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

</script>

<style lang="scss">



</style>