<template>
	<q-layout>
		 <!-- Container -->
		 <q-page-container class="my-page-container">
		  <q-page class="my-page-body q-pt-md q-pb-sm" style="padding: 0.3937rem 2rem 0.3937rem 8.5rem; margin-top: 4.375rem;">
			  <!-- Обертка -->
			  <div class="q-pa-md" style="padding: 0;">
				<div class="q-gutter-y-md">
					<q-card class="q-layout no-shadow no-border-radius">
					 <!-- Tabs -->
					 <q-tabs
						 v-model="tab"
						 dense
						 class="text-grey"
						 active-color="primary"
						 indicator-color="primary"
						 align="justify"
						 narrow-indicator
					 >
						 <q-tab class="no-hover" style="flex: 0;" name="remains" label="Остатки" />
						 <q-tab class="no-hover" style="flex: 0;" name="movement" label="Движение товаров" />
					 </q-tabs>
	
					 <!-- Tab-panels -->
					 <q-tab-panels class="bg-dark-panel" v-model="tab" animated>
						 <!-- Content Tab 1 -->
						 <q-tab-panel class="column items-start bg-dark-panel q-pt-lg q-pb-md" name="remains">
						  <div class="column q-mb-xl" style="width: 100%;">
							  <div class="col" style="margin-bottom: 11px;">
								<div class="text-h6">Фильтры</div>
							  </div>
							  <div class="row items-center col justify-between">
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedCategory"
									:options="categories"
									label="Категория"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedSubcategory"
									:options="subcategories"
									label="Подкатегория"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedWarehouse"
									:options="warehouses"
									label="Склад"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedRemains"
									:options="remainsOptions"
									label="Остатки (шт.)"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedCostPrice"
									:options="costPriceOptions"
									label="Себестоимость (шт.)"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-input
									color="grey-9"
									standout
									v-model="searchText"
									type="text"
									class="my-input-standart my-input-standart-middle bg-blue-grey-8"
									placeholder="Название или артикул"
									style="width: 296px;"
								>
									<template v-slot:prepend>
									 <q-icon name="svguse:icons/allIcons.svg#loop" size="2rem" color="grey-9" />
									</template>
								</q-input>
							  </div>
						  </div>
	
						  <div class="row q-mb-xl" style="width: 100%;">
							  <div class="col">
								<div class="text-h6">Список товаров</div>
							  </div>
							  <div class="col-auto">
								<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold" no-caps @click="dialogCreateArticleModal = true">
									<q-icon name="svguse:icons/allIcons.svg#plus" size="0.75rem" class="q-mr-sm" />
									<span class="block">Оприходовать товар</span>
								</q-btn>
							  </div>
							  <!-- Окно Создать статью -->
							  <CreateArticleModal v-model="dialogCreateArticleModal" />
						  </div>
	
						  <!-- Таблица Остатки  -->
						  <TableSkladOstatki />

						 </q-tab-panel>
	
						 <!-- Content Tab 2 -->
						 <q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="movement">
							<div class="column q-mb-xl" style="width: 100%;">
							  <div class="col" style="margin-bottom: 11px;">
								<div class="text-h6">Фильтры</div>
							  </div>
							  <div class="row items-center col">
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedCategory"
									:options="categories"
									label="Дата / период"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedSubcategory"
									:options="subcategories"
									label="Тип операции"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedWarehouse"
									:options="warehouses"
									label="Склад"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
								<q-select
									class="q-mr-xl"
									filled
									v-model="selectedRemains"
									:options="remainsOptions"
									label="Наименование"
									style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
								/>
							  </div>
						  </div>
	
						  <div class="row q-mb-xl" style="width: 100%;">
							  <div class="col">
								<div class="text-h6">Журнал движения товаров</div>
							  </div>
							  <!-- Окно Создать статью -->
							  <CreateArticleModal v-model="dialogCreateArticleModal" />
						  </div>

							<!-- Таблица Журнал движения товаров  -->
							<TableGoodsMovement />

						 </q-tab-panel>

					 </q-tab-panels>

					</q-card>

				</div>
			  </div>
		  </q-page>
		 </q-page-container>
	</q-layout>
	</template>
	
	<script setup>

	import { ref } from 'vue';
	import TableSkladOstatki from 'src/components/warehouse/TableSkladOstatki.vue'; 
	import TableGoodsMovement from 'src/components/warehouse/TableGoodsMovement.vue';

	const tab = ref('remains');
	
	
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