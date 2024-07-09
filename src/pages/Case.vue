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
								subtitle="КАССА НА РЕСЕПШН"
								price="56 000"
								linkName="Операции"
							  />
							  <CaseCard
								title="РАСЧЁТНЫЙ СЧЁТ"
								subtitle="БАНК ТОЧКА"
								price="0"
								linkName="Операции"
							  />
							  <CaseCard
								title="КАССА ДЛЯ ПРЕДОПЛАТ"
								subtitle="КАССА ДЛЯ УЧЕТА ПРЕДОПЛАТ"
								price="0"
								linkName="Операции"
							  />
						  </div>
						 </q-tab-panel>
	
						 <!-- Content Tab 2 -->
						 <q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="alarms">
						  <!-- Content for Tab 2 -->
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
								backgroundColor="red"
								titleColor="yellow"
								subtitleColor="green"
							  />
							  <CaseCard
								title="АРЕНДА"
								subtitle="Расходы"
							  />
							  <CaseCard
								title="КОММУНАЛЬНЫЕ ПЛАТЕЖИ"
								subtitle="Расходы"
							  />
							  <CaseCard
								title="РЕКЛАМА И ПРОДВИЖЕНИЕ"
								subtitle="Расходы"
							  />
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
	import CreateCaseModal from 'src/components/case/casemodal/CreateCaseModal.vue';
	import CreateArticleModal from 'src/components/case/casemodal/CreateArticleModal.vue';
	import CaseCard from 'src/components/case/CaseCard.vue';
	
	const tab = ref('mails');
	const dialogCreateCaseModal = ref(false);
	const dialogCreateArticleModal = ref(false);
	</script>
	
	<style lang="scss">
	.case-cards__inner {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 40px;
	width: 100%;
	}
	</style>