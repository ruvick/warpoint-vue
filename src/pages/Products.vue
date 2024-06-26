<template>

	<q-layout>
		<q-page-container class="my-page-container">
			<q-page class="page-promo" style="color: #fff; padding: 4.0625rem 2rem 4.0625rem 8.5rem;">

				<div class="row q-mb-xl">
					<div class="col">
						<div class="text-h6">Товары и услуги</div>
					</div>
				</div>

				


				<q-btn label="Открыть окно" @click="dialogProductsModal = true" />

				<!-- Окно  -->
				<q-dialog
					v-model="dialogProductsModal"
					class="dialog-full dialog-new-booking"
					position="right">
					<ProductsModal />
				</q-dialog>

			</q-page>
		</q-page-container> 
	</q-layout>

</template>

<script setup>
import { ref, computed } from 'vue';

// Подключение компонентов
import ProductsModal from 'src/components/ProductsModal.vue';
const dialogProductsModal = ref(false);

</script>

<style>



</style>