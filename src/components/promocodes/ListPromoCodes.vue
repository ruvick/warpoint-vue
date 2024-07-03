<template>
	
	<q-table
		class="my-sticky-dynamic table-promo"
		style="height: 550px"
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
				<span><span class="q-table__control-name">Записей:</span> {{ rows.length }} из {{ totalRows }}</span>
			</div>
		</template>
		<template v-slot:body-cell-status="props">
			<q-td :props="props" :class="getStatusClass(props.row.status)">
				{{ props.row.status }}
			</q-td>
		</template>
		<template v-slot:body-cell-startDate="props">
			<q-td :props="props">
				<div>{{ props.row.startDate }}</div>
				<div class="additional-text">{{ props.row.startDateAdditional }}</div>
			</q-td>
		</template>
		<template v-slot:body-cell-endDate="props">
			<q-td :props="props">
				<div>{{ props.row.endDate }}</div>
				<div class="additional-text">{{ props.row.endDateAdditional }}</div>
			</q-td>
		</template>
		<template v-slot:body-cell-management="props">
			<q-td>
				<q-btn class="q-btn-management" :props="props" @click="dialogPromoModal = true">
					<span></span>
					<span></span>
					<span></span>
				</q-btn>
			</q-td>
		</template>
	</q-table>

	<q-dialog
		v-model="dialogPromoModal"
		class="dialog-full dialog-new-booking"
		position="right"
	>
		<PromoModal />
	</q-dialog>

</template>

<script setup>

import { ref, computed } from 'vue';
import PromoModal from 'src/components/PromoModal.vue';

const dialogPromoModal = ref(false);

// export default {
// 	name: 'ListPromoCodes',
// }

const rows = ref([
{ promocode: 'WYLSA', date: '14.01.2024', created: 'УК', status: 'Завершен', typeDiscount: 'Абсолютная', startDate: '01.01.2024', endDate: '01.03.2024', startDateAdditional: 'в 14:00', endDateAdditional: 'в 15:00', discountAmount: '1 000 ₽', distribution: 'ИГРЫ', management: '' },
{ promocode: 'WPteam', date: '14.01.2024', created: 'Вами', status: 'Активен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024', startDateAdditional: 'в 14:00', endDateAdditional: 'в 15:00', discountAmount: '50%', distribution: 'ИГРЫ, ТОВАРЫ', management: '' },
{ promocode: 'GVA12', date: '14.01.2024', created: 'Вами', status: 'Активен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024', startDateAdditional: 'в 14:00', endDateAdditional: 'в 15:00', discountAmount: '20%', distribution: 'ИГРЫ, ТОВАРЫ', management: '' },
{ promocode: '09may', date: '14.01.2024', created: 'Вами', status: 'Завершен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024', startDateAdditional: 'в 14:00', endDateAdditional: 'в 15:00', discountAmount: '30%', distribution: 'ИГРЫ, ТОВАРЫ', management: '' },
{ promocode: 'SQUAD', date: '14.01.2024', created: 'Вами', status: 'Активен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024', startDateAdditional: 'в 14:00', endDateAdditional: 'в 15:00', discountAmount: '1 500 ₽', distribution: 'ИГРЫ, ТОВАРЫ', management: '' },
{ promocode: 'BNUI-01', date: '14.01.2024', created: 'Вами', status: 'Завершен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024', startDateAdditional: 'в 14:00', endDateAdditional: 'в 15:00', discountAmount: '50%', distribution: 'ИГРЫ, ТОВАРЫ', management: '' },
{ promocode: '12PROMO', date: '14.01.2024', created: 'Вами', status: 'Активен', typeDiscount: 'Процентная', startDate: '01.01.2024', endDate: '01.03.2024', startDateAdditional: 'в 14:00', endDateAdditional: 'в 15:00', discountAmount: '50%', distribution: 'ИГРЫ, ТОВАРЫ', management: '' },
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
{ name: 'management', label: 'Управление', field: 'management' }
]);

const loading = ref(false);
const pagination = ref({ page: 1, rowsPerPage: 13 });

const totalRows = computed(() => rows.value.length);

const onScroll = () => {
console.log('Virtual scroll event');
};

const getStatusClass = (status) => {
return {
    'status-active': status === 'Активен',
    'status-completed': status === 'Завершен'
};
};

</script>
