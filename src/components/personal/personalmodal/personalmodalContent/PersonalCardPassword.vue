<template>

	<div class="personal-modal content-booking__body body-content-booking column q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="col q-mb-xl" style="width: 100%;">
			<div class="column q-pl-xl q-pb-lg">
				<div class="column items-start" style="width: 100%; gap: 16px;">
					<q-input
						color="grey-9"
						standout
						v-model="password"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="Новый пароль"
						clearable 
						clear-icon="close" 
						style="width: 336px;"
					/>
					<q-input
						color="grey-9"
						standout
						v-model="repeatPassword"
						type="text"
						class="my-input-standart my-input-standart-middle bg-blue-grey-8"
						placeholder="Повторите новый пароль"
						clearable 
						clear-icon="close"
						style="width: 336px;"
					/>
				</div>
			</div>
		</div>
	
	</div>

	<!-- Content Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-lg q-pl-md">
		<div class="footer-content-booking__inner row justify-center items-center" style="width: 100%; gap: 80px;">
		</div>
	</div>
	
</template>

<script setup>

	import {ref} from 'vue';

	const password = ref('');
	const repeatPassword = ref('');

</script>

<style lang="scss">
	.personal-modal {
		.my-input-standart-middle .q-field__inner .q-field__control .q-field__label {
			top: 18px;
		}
	}

</style>