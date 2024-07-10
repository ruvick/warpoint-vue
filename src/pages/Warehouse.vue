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
												v-model="selectedReceiptBox"
												:options="receiptBox"
												label="Категория"
												style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
											/>
											<q-select
												class="q-mr-xl"
												filled
												v-model="selectedReceiptBox"
												:options="receiptBox"
												label="Подкатегория"
												style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
											/>
											<q-select
												class="q-mr-xl"
												filled
												v-model="selectedReceiptBox"
												:options="receiptBox"
												label="Склад"
												style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
											/>

											<q-select
												class="q-mr-xl"
												filled
												v-model="selectedReceiptBox"
												:options="receiptBox"
												label="Остатки (шт.)"
												style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
											/>
											<q-select
												class="q-mr-xl"
												filled
												v-model="selectedReceiptBox"
												:options="receiptBox"
												label="Себестоимость (шт.)"
												style="width: 256px; border-radius: 0.375rem; overflow: hidden;"
											/>
											<q-input
												color="grey-9"
												standout
												v-model="text"
												type="text"
												class="my-input-standart my-input-standart-middle bg-blue-grey-8"
												placeholder="Название или артикул"
												style="width: 296px;">		
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

									<div class="col" style="width: 100%;">
										<q-table
											  class="my-sticky-dynamic case-table-operation"
											  style="height: 643px"
											  flat
											  :rows="paginatedRows"
											  :columns="columns"
											  :loading="loading"
											  row-key="id"
											  virtual-scroll
											  :virtual-scroll-item-size="48"
											  :virtual-scroll-sticky-size-start="48"
											  :pagination="pagination"
											  :rows-per-page-options="[0]"
											  @virtual-scroll="onScroll"
										 >
											  <!-- <template v-slot:body-cell-management="props">
												<q-td :props="props">
													 <q-btn class="no-hover" no-caps no-hover flat round dense @click="deleteRow(props.row.id)" style="color: #5B89F8;">
													 	<span style="font-size: 16; margin-right: 4px;">Удалить</span>
													 	<q-icon name="svguse:icons/allIcons.svg#cart" size="20px" />
													 </q-btn>
												</q-td>
											  </template> -->
											  <template v-slot:body-cell-management="props">
													<q-td>
														<q-btn class="q-btn-management" :props="props" @click="dialogPromoModal = true">
															<span></span> 
															<span></span>
															<span></span>
														</q-btn>
													</q-td>
												</template>
											  <template v-slot:bottom>
												<div class="q-table__control">
													 <!-- <span style="margin-right: 50px;"> <span class="q-table__control-name" style="font-size: 18px; color: #9E9E9E !important;">Записей:</span> <span style="font-size: 18px; color: #fff;"> {{ rows.length }} из {{ totalRows }} </span></span> -->
													 <!-- <span style="font-size: 18px; margin-right: 50px;">На странице: {{ paginatedRows.length }}</span> -->
													 <span class="q-mr-xl" style="font-size: 18px; color: #fff;"> <span style="font-size: 18px; color: #9E9E9E !important;">Итого (кол-во):</span> {{ formattedTotalCarbs }} ₽</span>
													 <span style="font-size: 18px; color: #fff;"> <span style="font-size: 18px; color: #9E9E9E !important;">Итого (себестоимость):</span> {{ formattedTotalCarbs }} ₽</span>
												</div>
												<q-pagination
													 v-model="pagination.page"
													 :max="maxPage"
													 max-pages="5"
													 boundary-numbers
													 direction-links
													 @update:model-value="updatePagination"
												/>
											  </template>
										 </q-table>
									</div>

								</q-tab-panel>
	
								<!-- Content Tab 2 -->
								<q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="movement">

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

	import { ref, computed } from 'vue';

	const tab = ref('remains');

	const rows = ref([
	{ id: 1, name: 'Футболка S размер', categoty: 'Мерч', subcategory: 'Футболки', sklad: 'Основной', remainss: '5', costpricepc: '890 ₽', costpricetotal: '4 450 ₽', management: '' },
	{ id: 2, name: 'Сок яблочный 0,2 л', categoty: 'Товар', subcategory: 'Напитки', sklad: 'Основной', remainss: '10', costpricepc: '90 ₽', costpricetotal: '900 ₽', management: '' },
	{ id: 3, name: 'Наименование', categoty: 'Категория', subcategory: 'Подкатегория', sklad: 'Склад', remainss: 'Остаток', costpricepc: 'Себес (шт)', costpricetotal: 'Себес (итого)', management: '' },
	]);
	
	const columns = ref([
	{ name: 'name', align: 'right', label: 'Наименование', field: 'name', sortable: true },
	{ name: 'categoty', align: 'right', label: 'Категория', field: 'categoty', sortable: true },
	{ name: 'subcategory', align: 'right', label: 'Подкатегория', field: 'subcategory', sortable: true },
	{ name: 'sklad', align: 'right', label: 'Склад', field: 'sklad', sortable: true },
	{ name: 'remains', label: 'Остаток', field: 'remains', sortable: true },
	{ name: 'costpricepc', align: 'right', label: 'Себестоимость (шт.)', field: 'costpricepc', sortable: true },
	{ name: 'costpricetotal', required: true, align: 'right', label: 'Себестоимость (итого)', field: 'costpricetotal', field: row => row.costpricetotal, format: val => `${val}`, sortable: true },
	{ name: 'management', align: 'right', label: 'Управление', field: 'management' },
	]);
	
	const loading = ref(false);
	const pagination = ref({ page: 1, rowsPerPage: 10 });
	
	const totalRows = computed(() => rows.value.length);
	
	const totalCarbs = computed(() => {
	return rows.value.reduce((total, row) => total + parseInt(row.costpricetotal.replace(/\s/g, ''), 10), 0);
	});
	
	const formattedTotalCarbs = computed(() => {
	return totalCarbs.value.toLocaleString();
	});
	
	const paginatedRows = computed(() => {
	const start = (pagination.value.page - 1) * pagination.value.rowsPerPage;
	const end = start + pagination.value.rowsPerPage;
	return rows.value.slice(start, end);
	});
	
	const maxPage = computed(() => {
	return Math.ceil(totalRows.value / pagination.value.rowsPerPage);
	});
	
	const onScroll = () => {
	console.log('Virtual scroll event');
	};
	
	const deleteRow = (id) => {
	rows.value = rows.value.filter(row => row.id !== id);
	};
	
	const updatePagination = (page) => {
	pagination.value.page = page;
	};

</script>
	
<style lang="scss">

.case-table-operation {
	.q-table__top,
	.q-table__bottom,
	thead tr:first-child th {
		 color: #535965;
		 background-color: #1F2024;
	}
	thead tr th {
		 position: sticky;
		 z-index: 1;
	}
	thead tr:last-child th {
		 top: 2.5rem;
	}
	thead tr:first-child th {
		 top: 0;
	}
	tbody {
		 scroll-margin-top: 3rem;
	}
	.q-table__card {
		 background-color: #1C1E22;
	}
	.q-table th, .q-table td {
		 color: #fff;
		 padding: 0.625rem 1rem;
		 background-color: #1C1E22;
		 font-size: 1.125rem !important;
		 font-weight: 500;
		 line-height: 1.3181rem;
	}
	.q-table thead, .q-table tr, .q-table th, .q-table td {
		 border: none;
	}
	.q-table .q-virtual-scroll__content .text-left {
		 width: 13.5rem;
		 background: #252e42;
		 border-radius: 0.375rem;
		 font-size: 1.125rem;
		 font-weight: 700;
		 line-height: 1.3181rem;
	}
	.q-table tbody tr td:nth-child(1) { 
		 text-align: left;
		 width: 13.5rem;
		 background: #252e42;
		 border-radius: 0.375rem;
		 font-size: 1.125rem;
		 font-weight: 700;
		 line-height: 1.3181rem;
		 border: 0.125rem solid #1C1E22;
	}
	.q-table tbody tr td:nth-child(2) {
		 width: 13.5rem;
		 background: inherit;
		 border-radius: 0.375rem;
		 font-size: 1.125rem;
		 font-weight: 700;
		 line-height: 1.3181rem;
		 border: 0.125rem solid #1C1E22;
	}
	.q-table thead tr th {
		 text-align: left;
		 color: #535965;
		 font-size: 1.125rem;
		 font-weight: 500;
		 line-height: 1.3181rem;
		 white-space: normal;
	}
	.q-table thead tr th:nth-child(1) {
		 text-align: center;
	}
	.q-table thead tr th:nth-child(2) {
		 width: 12.5rem;
		 align-items: center;
	}
	.q-table thead tr th:nth-child(3) {
		 padding-left: 5rem;
	}
	.q-table thead tr th:nth-child(2) .q-table__sort-icon {
		 transform: translateY(0.625rem);
	}
	.q-table tbody td {
		 text-align: left;
	}
	.q-table tbody td:nth-child(3) {
		 padding-left: 5rem;
	}
	.q-table th.sortable .q-table__sort-icon {
		 opacity: 1;
		 float: left;
	}
	.q-table__separator {
		 display: none;
	}
	.q-table__bottom {
		 justify-content: flex-start;
	}
	.q-table__control span {
		 font-size: 1.125rem;
		 font-weight: 500;
		 line-height: 1.3181rem;
		 color: #9E9E9E;
	}
	.q-table__control span:nth-child(2) {
		 font-size: 1.5rem;
		 font-weight: 400;
		 line-height: 1.7581rem;
		 color: #fff;
	}
	.q-table__control-name {
		 color: #fff !important;
	}
	.q-btn--send .q-icon {
		 margin: 0.5rem 0.3125rem 0.3125rem 0.3125rem;
	}
	.q-table__bottom {
		justify-content: space-between;
	}
	.q-pagination .q-btn.bg-primary {
		background-color: #1A1B1D !important;
	}
	}
	.case-table-operation .q-table thead tr th:nth-child(8) {
		text-align: right;
	}
	.case-table-operation .q-table tbody td:nth-child(8) {
		text-align: right;
	}
	.q-btn-management {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.5rem;
		height: 2.5rem;
		overflow: hidden;
		background-color: #282D37;
		border-radius: 0.5rem;
		margin-left: auto;
		.q-btn__content {
			flex-wrap: nowrap;
    		gap: 0.3125rem;
				span {
				width: 0.3125rem;
				flex: 0 0 0.3125rem;
				height: 0.3125rem;
				border-radius: 50%;
				background: #5B89F8;
			}
		}
	}
</style>