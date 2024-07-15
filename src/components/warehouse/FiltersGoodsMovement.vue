<template>

	<div class="column q-mb-xl" style="width: 100%;">

		<div class="col" style="margin-bottom: 0.6875rem;">
			<div class="text-h6">Фильтры</div>
		</div>

		<div class="inputs-block items-center col">
			<q-select
				filled
				v-model="selectedCategory"
				:options="categories"
				label="Дата / период"
				style="border-radius: 0.375rem; overflow: hidden;"
			/>
			<q-select
				filled
				v-model="selectedSubcategory"
				:options="subcategories"
				label="Тип операции"
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
				label="Наименование"
				style="border-radius: 0.375rem; overflow: hidden;"
			/>
		</div>
	</div>
  
</template>

<script setup>

</script>

<style>

</style>