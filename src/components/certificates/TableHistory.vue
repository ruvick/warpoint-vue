<template>

	<q-table
		class="my-sticky-dynamic"
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
				<span style="margin-left: 50px;"> {{ formattedTotalCarbs }} ₽</span>
			</div>
		</template>
	</q-table>

</template>

<script>

import { ref, computed } from 'vue';

export default {
name: 'TableHistory',
setup() {
    const tab = ref('mails');
    const value = ref(71);
    const certificateNumber = ref('');
    const pin = ref('');
    const icon = ref(false);

    return {
     tab,
     value,
     certificateNumber,
     pin,
     icon,
     columns,
     rows,
     loading,
     pagination,
     totalRows,
     totalCarbs,
     formattedTotalCarbs,
     onScroll
    };
}
};

const rows = ref([
{ index: 1, orderNumber: '1234-5678-90', date: '20.08.2024', time: '20.08.2024', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 2, orderNumber: '2464-5832-45', date: '20.08.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 3, orderNumber: '4365-4754-78', date: '21.08.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 4, orderNumber: '5475-1358-30', date: '24.08.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 5, orderNumber: '5735-6403-73', date: '29.08.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 6, orderNumber: '5674-3089-24', date: '01.09.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 7, orderNumber: '5678-9247-89', date: '01.09.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 8, orderNumber: '6804-8956-48', date: '02.09.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 9, orderNumber: '5367-6478-90', date: '04.09.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 10, orderNumber: '5674-7889-51', date: '08.09.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 11, orderNumber: '5678-9247-89', date: '01.09.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 12, orderNumber: '5674-3089-24', date: '01.09.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 13, orderNumber: '4365-4754-78', date: '21.08.2024', time: '11:10:56', nominal: '5000 ₽', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
]);

const columns = ref([
{ name: 'index', label: '№', field: 'index' },
{ name: 'orderNumber', required: true, label: 'Номер заказа сертификата', align: 'right', field: row => row.orderNumber, format: val => `${val}`, sortable: true },
{ name: 'date', align: 'right', label: 'Дата', field: 'date', sortable: true },
{ name: 'time', align: 'right', label: 'Время', field: 'time', sortable: true },
{ name: 'nominal', align: 'right', label: 'Номинал', field: 'nominal', sortable: true },
{ name: 'protein', align: 'right', label: 'Номер сертификата', field: 'protein', sortable: true },
{ name: 'sodium', label: 'Статус сертификата', field: 'sodium', sortable: true }
]);

const loading = ref(false);
const pagination = ref({ page: 1, rowsPerPage: 13 });

const totalRows = computed(() => rows.value.length);

const totalCarbs = computed(() => {
return rows.value.reduce((total, row) => total + parseInt(row.nominal.replace(/\s/g, ''), 10), 0);
});

const formattedTotalCarbs = computed(() => {
return totalCarbs.value.toLocaleString();
});

const onScroll = () => {
console.log('Virtual scroll event');
};

</script>
