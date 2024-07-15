<template>
  
	<div class="row q-mb-xl" style="width: 100%;">
		<div class="col">
			<div class="text-h6">Список товаров</div>
		</div>
		<div class="col-auto">
			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold" no-caps @click="dialogRegisterProductModal = true">
				<q-icon name="svguse:icons/allIcons.svg#plus" size="0.75rem" class="q-mr-sm" />
				<span class="block">Оприходовать товар</span>
			</q-btn>
		</div>
		<!-- Окно -->
		<q-dialog
			v-model="dialogRegisterProductModal"
			class="dialog-full"
			position="right"
		>
			<RegisterProductModal />
		</q-dialog>
	</div>

</template>

<script setup>

	import {ref} from 'vue';
	import RegisterProductModal from 'src/components/warehouse/warehousemodal/RegisterProductModal.vue';

	const dialogRegisterProductModal = ref(false);

</script>

<style>

</style>