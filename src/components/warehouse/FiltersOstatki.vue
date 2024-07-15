<template>
  
  <div class="column q-mb-xl items-start" style="width: 100%;">
		<div class="col" style="margin-bottom: 11px;">
			<div class="text-h6">Фильтры</div>
		</div>
		<div class="inputs-block items-start col">
		<q-select
			filled
			v-model="selectedCategory"
			:options="categories"
			label="Категория"
			style="border-radius: 0.375rem; overflow: hidden;"
		/>
		<q-select
			filled
			v-model="selectedSubcategory"
			:options="subcategories"
			label="Подкатегория"
			style="border-radius: 0.375rem; overflow: hidden;"
		/>
		<q-select
			filled
			v-model="selectedWarehouse"
			:options="warehouses"
			label="Склад"
			style="border-radius: 0.375rem; overflow: hidden;"
		/>
		<q-select
			filled
			v-model="selectedRemains"
			:options="remainsOptions"
			label="Остатки (шт.)"
			style="border-radius: 0.375rem; overflow: hidden;"
		/>
		<q-select
			filled
			v-model="selectedCostPrice"
			:options="costPriceOptions"
			label="Себестоимость (шт.)"
			style="border-radius: 0.375rem; overflow: hidden;"
		/>
		<q-input
			color="grey-9"
			standout
			v-model="searchText"
			type="text"
			class="my-input-standart my-input-standart-middle bg-blue-grey-8"
			placeholder="Название или артикул"
		>
			<template v-slot:prepend>
			<q-icon name="svguse:icons/allIcons.svg#loop" size="2rem" color="grey-9" />
			</template>
		</q-input>
		</div>
	</div>

</template>

<script setup>

	import {ref} from 'vue';

	const categories = ref(['Категория 1', 'Категория 2']);
	const subcategories = ref(['Подкатегория 1', 'Подкатегория 2']);
	const warehouses = ref(['Склад 1', 'Склад 2']);
	const remainsOptions = ref(['Опция 1', 'Опция 2']);
	const costPriceOptions = ref(['Опция 1', 'Опция 2']);
	const selectedCategory = ref(null);
	const selectedSubcategory = ref(null);
	const selectedWarehouse = ref(null);
	const selectedRemains = ref(null);
	const selectedCostPrice = ref(null);
	const searchText = ref('');

</script>

<style lang="scss"> 

</style>