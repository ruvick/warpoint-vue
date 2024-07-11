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
			  <q-td :props="props">
				<q-btn class="no-hover" no-caps no-hover flat round dense @click="deleteRow(props.row.id)" style="color: #5B89F8;">
					<span style="font-size: 16px; margin-right: 4px;">Удалить</span>
					<q-icon name="svguse:icons/allIcons.svg#cart" size="20px" />
				</q-btn>
			  </q-td>
		  </template>
		  <template v-slot:body-cell-quantity="props">
			  <q-td :props="props" :class="props.row['quantity-class']">
				{{ props.row.quantity }}
			  </q-td>
		  </template>
		  <template v-slot:bottom>
			  <div class="q-table__control">
				<span style="margin-right: 50px;">
					<span class="q-table__control-name" style="font-size: 18px; color: #9E9E9E !important;">Записей:</span>
					<span style="font-size: 18px; color: #fff;">{{ rows.length }} из {{ totalRows }}</span>
				</span>
				<span style="margin-right: 50px;">
					<span class="q-table__control-name" style="font-size: 18px; color: #9E9E9E !important;">На странице:</span>
					<span style="font-size: 18px; color: #fff;">{{ rows.length }} из {{ totalRows }}</span>
				</span>
				<span style="font-size: 18px; color: #fff;">{{ formattedTotalCostPrice }} ₽</span>
				<!-- <span style="margin-left: 50px;">
					<span class="q-table__control-name" style="font-size: 18px; color: #9E9E9E !important;">Общее количество ячеек на странице:</span>
					<span style="font-size: 18px; color: #fff;">{{ totalCellsOnPage }}</span>
				</span> -->
			  </div>
		  </template>
		 </q-table>
	</div>
	</template>
	
	<script setup>
	import { ref, computed } from 'vue';
	
	const rows = ref([
	{ id: 1, index: 1, typeOperation: 'Оприходование', name: 'Футболка S размер', date: '06.10.2023', time: '19:43:12', warehouse: 'Основной', quantity: '+ 10', 'quantity-class': 'green', amount: '890 ₽', management: '' },
	{ id: 2, index: 2, typeOperation: 'Перемещение', name: 'Жетон', date: '06.10.2023', time: '20:11', warehouse: 'Резервный', quantity: '+ 2', 'quantity-class': 'red', amount: '200 ₽', management: '' },
	{ id: 3, index: 3, typeOperation: 'Продажа', name: 'Сок яблочный 0,2 л', date: '06.10.2023', time: '19:43:12', warehouse: 'Основной', quantity: '+ 1', 'quantity-class': 'red', amount: '150 ₽', management: '' },
	{ id: 4, index: 4, typeOperation: 'Списание', name: 'Браслет', date: '06.10.2023', time: '19:43:12', warehouse: 'Основной', quantity: '+ 1', 'quantity-class': 'red', amount: '150 ₽', management: '' },
	]);
	
	const columns = ref([
	{ name: 'index', label: '№', field: 'index' },
	{ name: 'typeOperation', align: 'right', label: 'Тип операции', field: 'typeOperation', sortable: true },
	{ name: 'name', align: 'right', label: 'Наименование', field: 'name', sortable: true },
	{ name: 'date', align: 'right', label: 'Дата', field: 'date', sortable: true },
	{ name: 'time', align: 'right', label: 'Время', field: 'time', sortable: true },
	{ name: 'warehouse', label: 'Склад', field: 'warehouse', sortable: true },
	{ name: 'quantity', align: 'right', label: 'Количество', field: 'quantity', sortable: true },
	{ name: 'amount', required: true, align: 'right', label: 'Сумма', field: 'amount', sortable: true },
	{ name: 'management', align: 'right', label: 'Управление', field: 'management' },
	]);
	
	const loading = ref(false);
	
	const totalRows = computed(() => rows.value.length);
	
	const totalCostPrice = computed(() => {
	return rows.value.reduce((total, row) => {
		 const amount = parseInt(row.amount.replace(/\s/g, '').replace('₽', ''), 10);
		 return !isNaN(amount) ? total + amount : total;
	}, 0);
	});
	
	const formattedTotalCostPrice = computed(() => {
	return totalCostPrice.value.toLocaleString();
	});
	
	const deleteRow = (id) => {
	rows.value = rows.value.filter(row => row.id !== id);
	};
	
	const onScroll = () => {
	console.log('Virtual scroll event');
	};
	
	const totalCellsOnPage = computed(() => {
	return rows.value.length * columns.value.length;
	});
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