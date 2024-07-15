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
						 	<FiltersOstatki/>
						 	<ListProductPanel/>
						 	<TableSkladOstatki />
						 </q-tab-panel>
	
						 <!-- Content Tab 2 -->
						 <q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="movement">

						  <FiltersGoodsMovement/>

						  <div class="row q-mb-xl" style="width: 100%;">
							  <div class="col">
								<div class="text-h6">Журнал движения товаров</div>
							  </div>
						  </div>

							<TableGoodsMovement />

							<div class="row q-mt-xl" style="width: 100%;">
							  <div class="col">
								<div class="text-h6">Модальные окна</div>
								<div class="column items-start q-mt-md">
									<q-btn unelevated color="blue-1" class="my-btn q-mb-md text-weight-bold" no-caps @click="dialogFilterEmpModal = true">
										<span class="block">Окно Наим-е Фильтр Emp</span>
									</q-btn>
								</div>
							  </div>
							  <!-- Componenets Modal -->
								<!-- <InfoMovementModal v-model="dialogInfoMovementModal" /> -->
								<FilterEmpModal v-model="dialogFilterEmpModal" />
						  	</div>

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
	import FiltersOstatki from 'src/components/warehouse/FiltersOstatki.vue'
	import TableSkladOstatki from 'src/components/warehouse/TableSkladOstatki.vue'; 
	import TableGoodsMovement from 'src/components/warehouse/TableGoodsMovement.vue';
	import FilterEmpModal from 'src/components/warehouse/warehousemodal/FilterEmpModal.vue';
	import ListProductPanel from 'src/components/warehouse/ListProductPanel.vue'
	import FiltersGoodsMovement from 'src/components/warehouse/FiltersGoodsMovement.vue';
	// import RegisterProductModal from 'src/components/warehouse/warehousemodal/RegisterProductModal.vue';
	// import InfoMovementModal from 'src/components/warehouse/warehousemodal/InfoMovementModal.vue'; 

	// Elements 
	const tab = ref('remains');

	// Modals 
	// const dialogInfoMovementModal = ref(false);
	const dialogRegisterProductModal = ref(false);
	const dialogFilterEmpModal = ref(false);

	</script>
	
	<style lang="scss">

		.inputs-block {
			display: grid; 
			grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); 
			gap: 1.875rem;
			width: 100%;
			input {
				font-size: 1.125rem;
			}
		}
		.q-tab-panel {
			padding-right: 0;
		}

	</style>