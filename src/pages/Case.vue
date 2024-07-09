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
						 <q-tab class="no-hover" style="flex: 0;" name="mails" label="Касса" />
						 <q-tab class="no-hover" style="flex: 0;" name="alarms" label="Денежные операции" />
						 <q-tab class="no-hover" style="flex: 0;" name="movies" label="Статьи платежей" />
					 </q-tabs>
	
					 <!-- Tab-panels -->
					 <q-tab-panels class="bg-dark-panel" v-model="tab" animated>
						 <!-- Content Tab 1 -->
						 <q-tab-panel class="column items-start bg-dark-panel q-pt-lg q-pb-md" name="mails">
						  <!-- Top panel -->
						  <div class="row q-mb-xl" style="width: 100%;">
							  <div class="col">
								<div class="text-h6">Список касс</div>
							  </div>
							  <div class="col-auto">
								<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold" no-caps @click="dialogCreateCaseModal = true">
									<q-icon name="svguse:icons/allIcons.svg#plus" size="0.75rem" class="q-mr-sm" />
									<span class="block">Создать кассу</span>
								</q-btn>
							  </div>
							  <!-- Окно Создать кассу -->
							  <CreateCaseModal v-model="dialogCreateCaseModal" />
						  </div>
	
						  <!-- Card Wrapper -->
						  <div class="case-cards__inner row">
							  <CaseCard
								title="ОСНОВНАЯ КАССА"
								subtitle="Касса на ресепшн"
								subtitleColor="#C7CCCC"
								price="56 000"
								linkName="Операции"
								@edit="dialogEditCaseModal = true"
							  />
							  <CaseCard
								title="РАСЧЁТНЫЙ СЧЁТ"
								subtitle="Банк точка"
								subtitleColor="#C7CCCC"
								price="0"
								linkName="Операции"
								@edit="dialogEditCaseModal = true"
							  />
							  <CaseCard
								title="КАССА ДЛЯ ПРЕДОПЛАТ"
								subtitle="Касса для учета предоплат КАССА"
								subtitleColor="#C7CCCC"
								price="0"
								linkName="Операции"
								@edit="dialogEditCaseModal = true"
							  />
						  </div>
						 </q-tab-panel>
	
						 <!-- Content Tab 2 -->
						 <q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="alarms">
						  <!-- Panels -->
						  <div class="column q-mb-lg" style="width: 100%;">
							  <div class="col">
								<div class="text-h6 q-mb-sm">Сводка</div>
							  </div>
							  <div class="col row items-center">
								inputs
							  </div>
						  </div>
	
						  <!-- Panels 2 -->
						  <div class="column q-mb-lg" style="width: 100%;">
							  <div class="col">
								<div class="text-h6 q-mb-sm">Фильтры</div>
							  </div>
							  <div class="col row items-center">
								inputs
							  </div>
						  </div>
	
						  <!-- Table -->
						  <div class="column" style="width: 100%;">
							  <div class="col">
								<div class="text-h6 q-mb-sm">Список денежных операций</div>
							  </div>
							  <div class="col">
								<q-table
									class="my-sticky-dynamic case-table-operation"
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
									<template v-slot:body-cell-management="props">
									 <q-td :props="props">
										<span style="font-size: 16; color: #5B89F8;">Удалить</span>
										 <q-btn flat round dense icon="delete" @click="deleteRow(props.row.index)" style="color: #5B89F8;" />
									 </q-td>
									</template>
									<template v-slot:bottom>
									 <div class="q-table__control">
										 <span> <span class="q-table__control-name">Записей:</span> {{ rows.length }} из {{ totalRows }}</span>
										 <span style="margin-left: 50px;"> {{ formattedTotalCarbs }} ₽</span>
									 </div>
									</template>
								</q-table>
							  </div>
						  </div>
						 </q-tab-panel>
	
						 <!-- Content Tab 3 -->
						 <q-tab-panel class="column items-start bg-dark-panel q-pt-lg q-pb-md" name="movies">
						  <!-- Top panel -->
						  <div class="row q-mb-xl" style="width: 100%;">
							  <div class="col">
								<div class="text-h6">Список статей</div>
							  </div>
							  <div class="col-auto">
								<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold" no-caps @click="dialogCreateArticleModal = true">
									<q-icon name="svguse:icons/allIcons.svg#plus" size="0.75rem" class="q-mr-sm" />
									<span class="block">Создать статью</span>
								</q-btn>
							  </div>
							  <!-- Окно Создать статью -->
							  <CreateArticleModal v-model="dialogCreateArticleModal" />
						  </div>
	
						  <!-- Card Wrapper -->
						  <div class="case-cards__inner row">
							  <CaseCard
								title="ВЫПЛАТА ЗАРПЛАТЫ"
								subtitle="Расходы"
								headerLinkBg="#5B89F826"
								backgroundColor="linear-gradient(252.73deg, #ECECEE 0.94%, #8DA5E0 100.73%)"
								titleColor="#25272D"
								subtitleColor="#25272D"
								imageSrc="./icons/art-01.svg"
								@edit="dialogEditCaseModal = true"
							  />
							  <CaseCard
								title="АРЕНДА"
								subtitle="Расходы"
								headerLinkBg="#5B89F826"
								backgroundColor="linear-gradient(252.73deg, #ECECEE 0.94%, #8DA5E0 100.73%)"
								titleColor="#25272D"
								subtitleColor="#25272D"
								imageSrc="./icons/art-02.svg"
								@edit="dialogEditCaseModal = true"
							  />
							  <CaseCard
								title="КОММУНАЛЬНЫЕ ПЛАТЕЖИ"
								subtitle="Расходы"
								headerLinkBg="#5B89F826"
								backgroundColor="linear-gradient(252.73deg, #ECECEE 0.94%, #8DA5E0 100.73%)"
								titleColor="#25272D"
								subtitleColor="#25272D"
								imageSrc="./icons/art-03.svg"
								@edit="dialogEditCaseModal = true"
							  />
							  <CaseCard
								title="РЕКЛАМА И ПРОДВИЖЕНИЕ"
								subtitle="Расходы"
								headerLinkBg="#5B89F826"
								backgroundColor="linear-gradient(252.73deg, #ECECEE 0.94%, #8DA5E0 100.73%)"
								titleColor="#25272D"
								subtitleColor="#25272D"
								imageSrc="./icons/art-04.svg"
								@edit="dialogEditCaseModal = true"
							  />
						  </div>
						 </q-tab-panel>
					 </q-tab-panels>
					</q-card>
				</div>
			  </div>
	
			  <EditCaseModal v-model="dialogEditCaseModal" />
		  </q-page>
		 </q-page-container>
	</q-layout>
	</template>
	
	<script setup>
	import { ref, computed } from 'vue';
	import CreateCaseModal from 'src/components/case/casemodal/CreateCaseModal.vue';
	import CreateArticleModal from 'src/components/case/casemodal/CreateArticleModal.vue';
	import CaseCard from 'src/components/case/CaseCard.vue';
	import EditCaseModal from 'src/components/case/casemodal/EditCaseModal.vue';
	
	const tab = ref('mails');
	const dialogCreateCaseModal = ref(false);
	const dialogCreateArticleModal = ref(false);
	const dialogEditCaseModal = ref(false);
	
	// table
	const rows = ref([
	{ summa: '890', article: 'Оплата заказа', date: '06.10.2023', time: '19:43:02', sodium: 'Проведена', case: 'Основная касса', method: 'Наличный', management: '' },
	{ summa: '35 000', article: 'Оплата заказа', date: '18.03.2024', time: '20:58:41', sodium: 'Проведена', case: 'Расчетный счет', method: 'Безналичный', management: '' },
	]);
	
	const columns = ref([
	{ name: 'summa', required: true, label: 'Сумма', align: 'right', field: row => row.summa, format: val => `${val}`, sortable: true },
	{ name: 'article', align: 'right', label: 'Статья', field: 'article', sortable: true },
	{ name: 'date', align: 'right', label: 'Дата', field: 'date', sortable: true },
	{ name: 'time', align: 'right', label: 'Время', field: 'time', sortable: true },
	{ name: 'sodium', label: 'Статус', field: 'sodium', sortable: true },
	{ name: 'case', align: 'right', label: 'Касса', field: 'case', sortable: true },
	{ name: 'method', align: 'right', label: 'Метод', field: 'method', sortable: true },
	{ name: 'management', align: 'right', label: 'Управление', field: 'management' },
	]);
	
	const loading = ref(false);
	const pagination = ref({ page: 1, rowsPerPage: 13 });
	
	const totalRows = computed(() => rows.value.length);
	
	const totalCarbs = computed(() => {
	return rows.value.reduce((total, row) => total + parseInt(row.summa.replace(/\s/g, ''), 10), 0);
	});
	
	const formattedTotalCarbs = computed(() => {
	return totalCarbs.value.toLocaleString();
	});
	
	const onScroll = () => {
	console.log('Virtual scroll event');
	};
	
	const deleteRow = (index) => {
	rows.value = rows.value.filter(row => row.index !== index);
	};
	</script>
	
	<style lang="scss">
	.case-cards__inner {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 40px;
	width: 100%;
	}
	
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
	}
	</style>