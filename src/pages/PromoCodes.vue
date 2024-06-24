<template>

<q-layout>
	<q-page-container class="my-page-container">
		<q-page class="page-promo" style="color: #fff; padding: 4.0625rem 2rem 4.0625rem 8.5rem;">

				<!-- Top panel  -->
				<div class="row q-mb-xl">
					<div class="col">
						<div class="text-h6">Список промокодов</div>
					</div>
					<div class="col-auto">
						<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold" no-caps @click="dialogCreatePromoModal = true">
							<q-icon name="svguse:icons/allIcons.svg#plus" size="12px" class="q-mr-sm" />
							<span class="block">Создать промокод</span>
          			</q-btn>
					</div>
				</div>

				<!-- Table  -->
				<q-table
					class="my-sticky-dynamic table-promo"
					style="height: 643px"
					flat
					:rows="rows"
					:columns="columns"
					:loading="loading"
					row-key="index"
					virtual-scroll
					:virtual-scroll-item-size="48"
					:virtual-scroll-sticky-size-start="48"
					:pagination="pagination"
					:rows-per-page-options="[0]"
					@virtual-scroll="onScroll"
					>
					<template v-slot:bottom>
						<div class="q-table__control">
							<span> <span class="q-table__control-name">Записей:</span> {{ rows.length }} из {{ totalRows }}</span>
						</div>
					</template>
					<template v-slot:body-cell-management="props">
						<q-td>
							<q-btn class="q-btn-management" :props="props" @click="dialogPromoManagementModal = true" >
								<span></span>
								<span></span>
								<span></span>
							</q-btn>
						</q-td>
					</template>
				</q-table>

				<!-- Окно Создание Промокода  -->
				<q-dialog
					v-model="dialogCreatePromoModal"
					class="dialog-full dialog-new-booking"
					position="right"
				>
					<CreatePromoModal />
				</q-dialog>

				<!-- Окно Управление Промокодом  -->
				<q-dialog
					v-model="dialogPromoManagementModal"
					class="dialog-full dialog-new-booking"
					position="right"
				>
					<PromoManagementModal />
				</q-dialog>
			
		</q-page>
	</q-page-container>
</q-layout>

</template>

<script setup>
import { ref, computed } from 'vue';

// Подключение компонентов 
import PromoManagementModal from 'src/components/PromoManagementModal.vue'
import CreatePromoModal from 'src/components/CreatePromoModal.vue'
const dialogPromoManagementModal = ref(false)
const dialogCreatePromoModal = ref(false)

const rows = ref([
{  promocode: 'WYLSA', date: '14.01.2024', created: 'УК', status: 'Завершен', typeDiscount: 'Абсолютная', startDate: '01.01.2024', endDate: '01.03.2024',
	discountAmount: '1 000 ₽', distribution: 'ИГРЫ', management: '',
 },
 { promocode: 'WPteam', date: '14.01.2024', created: 'Вами', status: 'Активен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024',
	discountAmount: '50%', distribution: 'ИГРЫ, ТОВАРЫ', management: '',
 },
 { promocode: 'GVA12', date: '14.01.2024', created: 'Вами', status: 'Активен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024',
	discountAmount: '20%', distribution: 'ИГРЫ, ТОВАРЫ', management: '',
 },
]);

const columns = ref([
{ name: 'promocode', required: true, label: 'Промокод', align: 'right', field: row => row.promocode, format: val => `${val}`, sortable: true },
{ name: 'date', align: 'right', label: 'Дата создания', field: 'date', sortable: true },
{ name: 'created', align: 'right', label: 'Кем создан', field: 'created', sortable: true },
{ name: 'status', align: 'right', label: 'Статус', field: 'status', sortable: true },
{ name: 'typeDiscount', align: 'right', label: 'Тип скидки', field: 'typeDiscount', sortable: true },
{ name: 'startDate', label: 'Дата и время начала', field: 'startDate', sortable: true },
{ name: 'endDate', label: 'Дата и время окончания', field: 'endDate', sortable: true },
{ name: 'discountAmount', label: 'Размер скидки', field: 'discountAmount', sortable: true },
{ name: 'distribution', label: 'На что распространяется', field: 'distribution', sortable: true },
{ name: 'management', label: 'Управление', field: 'management', }
]);

const loading = ref(false);
const pagination = ref({ page: 1, rowsPerPage: 13 });

const totalRows = computed(() => rows.value.length);

const onScroll = () => {
console.log('Virtual scroll event');
};

// export default {
// name: 'PromoCodes',
// setup() {

   //  return {
     columns,
     rows,
     loading,
     pagination,
     totalRows,
     onScroll
   //  };
// }
// };
</script>

<style lang="scss">

	.table-promo {
		.q-table thead tr th:nth-child(2) {
    		width: auto;
    		align-items: center;
		}
		.q-table thead tr th:nth-child(3) {
			padding-left: 1rem;
		}
		.q-table tbody tr td:nth-child(1) {
    		width: auto;
		}
		.q-table tbody td:nth-child(3) {
    		padding-left: 1rem;
		}
		.q-table tbody tr td:nth-child(2) {
			width: auto;
			background: inherit;
			border-radius: none;
			font-size: 1.125rem;
			font-weight: 700;
			line-height: 1.3181rem;
			border: none;
		}
		.q-table thead tr th .q-table__sort-icon {
    		height: 40px;
		}
		.q-table thead tr th:nth-child(1),
		.q-table thead tr th:nth-child(3),
		.q-table thead tr th:nth-child(5) {
    		white-space: nowrap;
		}
		.q-table thead tr th:nth-child(4) .q-table__sort-icon,
		.q-table thead tr th:nth-child(1) .q-table__sort-icon,
		.q-table thead tr th:nth-child(3) .q-table__sort-icon,
		.q-table thead tr th:nth-child(5) .q-table__sort-icon {
    		height: auto;
		}
		.q-table thead tr th:nth-child(1) {
    		text-align: left;
		}
		.q-table tbody tr td:nth-child(1) {
    		width: 200px;
    		text-align: left;
		}
		.q-table tbody tr td:nth-child(10) {
			text-align: right;
    		display: flex;
    		justify-content: flex-end;
		}
	}
	.q-btn-management {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		overflow: hidden;
		background-color: #282D37;
		border-radius: 8px;
		margin-left: auto;
		.q-btn__content {
			flex-wrap: nowrap;
    		gap: 5px;
				span {
				width: 5px;
				flex: 0 0 5px;
				height: 5px;
				border-radius: 50%;
				background: #5B89F8;
			}
		}
	}
</style>