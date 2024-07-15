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
				<span><span class="q-table__control-name">Записей:</span> {{ rows.length }} из {{ totalRows }}</span>
			</div>
		</template>
	</q-table>
  
</template>

<script setup>

	import { ref, computed } from 'vue';

	const rows = ref([
		{ index: 1, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Управляющий', status: '*' },
		{ index: 2, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Администратор', status: '*' },
		{ index: 3, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '*' },
	]);

	const columns = ref([
		{ name: 'index', label: '№', field: 'index' },
		// { name: 'name', required: true, label: 'Фамилия', align: 'right', field: row => row.orderNumber, format: val => `${val}`, sortable: true },
		{ name: 'surname', align: 'right', label: 'Фамилия', field: 'surname', sortable: true },
		{ name: 'name', align: 'right', label: 'Имя', field: 'name', sortable: true },
		{ name: 'phone', align: 'right', label: 'Телефон', field: 'phone', sortable: true },
		{ name: 'email', align: 'right', label: 'E-mail', field: 'email', sortable: true },
		{ name: 'post', align: 'right', label: 'Должность', field: 'post', sortable: true },
		{ name: 'status', align: 'right', label: 'Статус', field: 'status', sortable: true },
		// { name: 'sodium', label: 'Статус сертификата', field: 'sodium', sortable: true }
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

<style lang="scss">

</style>