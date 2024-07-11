<template>
	<div class="col" style="width: 100%;">
		 <q-table
		  class="my-sticky-dynamic case-table-sklad"
		  style="height: 700px"
		  flat
		  :rows="rows"
		  :columns="columns"
		  :loading="loading"
		  row-key="id"
		  virtual-scroll
		  :virtual-scroll-item-size="48"
		  :virtual-scroll-sticky-size-start="48"
		  :rows-per-page-options="[0]"
		  @virtual-scroll="onScroll"
		 >
		  <template v-slot:body-cell-management="props">
			  <q-td>
				<q-btn class="q-btn-management" :props="props" @click="dialogPromoModal = true">
					<span></span>
					<span></span>
					<span></span>
				</q-btn>
			  </q-td>
		  </template>
		  <template v-slot:body-cell-name="props">
			  <q-td :props="props">
				<q-btn flat @click="openWindow(props.row)">
					{{ props.row.name }}
				</q-btn>
			  </q-td>
		  </template>
		  <template v-slot:bottom>
			  <div class="q-table__control">
				<span class="q-mr-xl" style="font-size: 18px; color: #fff;">
					<span class="q-mr-md" style="font-size: 18px; color: #9E9E9E !important;">Итого (кол-во):</span>
					<span class="remais">{{ formattedTotalRemains }}</span>
				</span>
				<span style="font-size: 18px; color: #fff;">
					<span class="q-mr-md" style="font-size: 18px; color: #9E9E9E !important;">Итого (себестоимость):</span>
					<span class="costPriceTotal">{{ formattedTotalCostPrice }} ₽</span>
				</span>
			  </div>
		  </template>
		 </q-table>
	
		 <q-dialog v-model="dialogInfoMovementModal">
		  <q-card>
			  <q-card-section>
				<div class="text-h6">Информация о товаре</div>
			  </q-card-section>
	
			  <q-card-section>
				<div>Наименование: {{ selectedRow.name }}</div>
				<div>Категория: {{ selectedRow.category }}</div>
				<div>Подкатегория: {{ selectedRow.subcategory }}</div>
				<div>Склад: {{ selectedRow.warehouse }}</div>
				<div>Остаток: {{ selectedRow.remains }}</div>
				<div>Себестоимость (шт.): {{ selectedRow.costPricePc }}</div>
				<div>Себестоимость (итого): {{ selectedRow.costPriceTotal }}</div>
			  </q-card-section>
	
			  <q-card-actions align="right">
				<q-btn flat label="Закрыть" color="primary" v-close-popup />
			  </q-card-actions>
		  </q-card>
		 </q-dialog>
	</div>
	</template>
	
	<script setup>
	import { ref, computed } from 'vue';
	
	const rows = ref([
	{ id: 1, index: 1, name: 'Футболка S размер', category: 'Мерч', subcategory: 'Футболки', warehouse: 'Основной', remains: '5', costPricePc: '890 ₽', costPriceTotal: '4 450 ₽', management: '' },
	{ id: 2, index: 2, name: 'Сок яблочный 0,2 л', category: 'Товар', subcategory: 'Напитки', warehouse: 'Основной', remains: '10', costPricePc: '90 ₽', costPriceTotal: '900 ₽', management: '' },
	{ id: 3, index: 3, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 4, index: 4, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 5, index: 5, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 6, index: 6, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 7, index: 7, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 8, index: 8, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 9, index: 9, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 10, index: 10, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 11, index: 11, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 12, index: 12, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 13, index: 13, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 14, index: 14, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 15, index: 15, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 16, index: 16, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 17, index: 17, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 18, index: 18, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 19, index: 19, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	{ id: 20, index: 20, name: 'Наименование', category: 'Категория', subcategory: 'Подкатегория', warehouse: 'Склад', remains: 'Остаток', costPricePc: 'Себес (шт)', costPriceTotal: 'Себес (итого)', management: '' },
	]);
	
	const columns = ref([
	{ name: 'index', label: '№', field: 'index' },
	{ name: 'name', align: 'right', label: 'Наименование', field: 'name', sortable: true },
	{ name: 'category', align: 'right', label: 'Категория', field: 'category', sortable: true },
	{ name: 'subcategory', align: 'right', label: 'Подкатегория', field: 'subcategory', sortable: true },
	{ name: 'warehouse', align: 'right', label: 'Склад', field: 'warehouse', sortable: true },
	{ name: 'remains', label: 'Остаток', field: 'remains', sortable: true },
	{ name: 'costPricePc', align: 'right', label: 'Себестоимость (шт.)', field: 'costPricePc', sortable: true },
	{ name: 'costPriceTotal', required: true, align: 'right', label: 'Себестоимость (итого)', field: 'costPriceTotal', field: row => row.costPriceTotal, format: val => `${val}`, sortable: true },
	{ name: 'management', align: 'right', label: 'Управление', field: 'management' },
	]);
	
	const loading = ref(false);
	
	const totalRemains = computed(() => {
	return rows.value.reduce((total, row) => {
		 const remains = parseInt(row.remains.replace(/\s/g, ''), 10);
		 return !isNaN(remains) ? total + remains : total;
	}, 0);
	});
	
	const formattedTotalRemains = computed(() => {
	return totalRemains.value.toLocaleString();
	});
	
	const totalCostPrice = computed(() => {
	return rows.value.reduce((total, row) => {
		 const costPrice = parseInt(row.costPriceTotal.replace(/\s/g, ''), 10);
		 return !isNaN(costPrice) ? total + costPrice : total;
	}, 0);
	});
	
	const formattedTotalCostPrice = computed(() => {
	return totalCostPrice.value.toLocaleString();
	});
	
	const dialogInfoMovementModal = ref(false);
	const selectedRow = ref({});
	
	const openWindow = (row) => {
	selectedRow.value = row;
	dialogInfoMovementModal.value = true;
	};
	
	const onScroll = () => {
	console.log('Virtual scroll event');
	};
	</script>
	
	<style lang="scss">
	.case-table-sklad {
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
	.q-table tbody tr td:nth-child(2) {
		 text-align: left;
		 width: 16.75rem;
		 background: #252e42;
		 border-radius: 0.375rem;
		 font-size: 1.125rem;
		 font-weight: 700;
		 line-height: 1.3181rem;
		 border: 0.125rem solid #1C1E22;
	}
	.q-table thead tr th:nth-child(9) {
		 text-align: right;
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
		 transform: translateY(0);
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
	.case-table-sklad .q-table tbody td:nth-child(9) {
	text-align: right;
	}
	.case-table-sklad .q-table tbody td.green {
	color: #69B56D;
	}
	.case-table-sklad .q-table tbody td.red {
	color: #E43D44;
	}
	</style>