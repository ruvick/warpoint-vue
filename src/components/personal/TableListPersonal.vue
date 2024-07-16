<template>

	<q-table
		class="my-sticky-dynamic personal-table"
		style="height: 1160px"
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
	<template v-slot:body-cell-surname="props">
		<q-td :props="props">
			<q-btn class="personal-table-btn no-hover" no-caps flat round @click="dialogCardEmployeeModal = true" style="width: 100%;"> 
				{{ props.row.surname }}
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.8667 7.46484H9.60001C9.03421 7.46484 8.49159 7.6896 8.09151 8.08968C7.69144 8.48976 7.46667 9.03238 7.46667 9.59818V22.3982C7.46667 22.964 7.69144 23.5066 8.09151 23.9067C8.49159 24.3067 9.03421 24.5315 9.60001 24.5315H22.4C22.9658 24.5315 23.5084 24.3067 23.9085 23.9067C24.3086 23.5066 24.5333 22.964 24.5333 22.3982V18.1315M16 15.9982L24.5333 7.46484M24.5333 7.46484V12.7982M24.5333 7.46484H19.2" stroke="#5B89F8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</q-btn>
		</q-td>
		</template>
		<template v-slot:body-cell-status="props">
		<q-td :props="props">
			<q-btn class="personal-table-btn no-hover" no-caps flat round @click="dialogCardEmployeeModal = true" style="width: 100%;"> 
				<q-icon name="svguse:icons/allIcons.svg#snowflake" color="white" size="32px" />
			</q-btn>
		</q-td>
		</template>
		<template v-slot:bottom>
			<div class="q-table__control">
				<span><span class="q-table__control-name" style="color: #9E9E9E !important;">Записей:</span> <span class="text-white" style="font-size: 1.125rem;">{{ rows.length }} из {{ totalRows }}</span> </span>
			</div>
		</template>
	</q-table>

	<q-dialog
		v-model="dialogCardEmployeeModal"
		class="dialog-full dialog-new-booking"
		position="right"
	>
		<CardEmployeeModal/>
	</q-dialog>
  
</template>

<script setup>

	import { ref, computed } from 'vue';
	import CardEmployeeModal from './personalmodal/CardEmployeeModal.vue';

	const rows = ref([
		{ index: 1, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Управляющий', status: '' },
		{ index: 2, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Администратор', status: '' },
		{ index: 3, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 4, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Франчайзи', status: '' },
		{ index: 5, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 6, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 7, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 8, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 9, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 10, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 11, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 12, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 13, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 14, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 15, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 16, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
		{ index: 17, surname: 'Котов Николай', name: '', phone: '+7 (993) 840-31-53', email: 'n.v.kotov@warpoint.example.ru', post: 'Оператор', status: '' },
	]);

	const columns = ref([
		{ name: 'index', label: '№', field: 'index' },
		// { name: 'name', required: true, label: 'Фамилия', align: 'right', field: row => row.orderNumber, format: val => `${val}`, sortable: true },
		{ name: 'surname', align: 'right', label: 'Фамилия Имя', field: 'surname', sortable: true },
		// { name: 'name', align: 'right', label: 'Имя', field: 'name', sortable: true },
		{ name: 'phone', align: 'right', label: 'Телефон', field: 'phone', sortable: true },
		{ name: 'email', align: 'right', label: 'E-mail', field: 'email', sortable: true },
		{ name: 'post', align: 'right', label: 'Должность', field: 'post', sortable: true },
		{ name: 'status', align: 'right', label: 'Статус', field: 'status', sortable: true },
		// { name: 'sodium', label: 'Статус сертификата', field: 'sodium', sortable: true }
	]);

	const loading = ref(false);
	const pagination = ref({ page: 1 });

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

	const dialogCardEmployeeModal = ref(false);

</script>

<style lang="scss">
	.personal-table .q-table tbody tr td:nth-child(2) {
		width: 19.5rem;
		padding: 0;
		.q-btn {
			padding: 0.625rem 1rem;
		}
	}
	.personal-table .q-table tbody tr td:nth-child(6) {
		text-align: center;
		width: 10rem;
		.personal-table-btn .q-btn__content {
			justify-content: center;
		}
		.q-btn {
			opacity: 0;
		}
	}
	.personal-table .q-table tbody tr:hover td {
		background: #5B89F826;
		.q-btn {
			opacity: 1;
		}
	}
	.personal-table-btn .q-btn__content {
		justify-content: space-between;
	}
</style>