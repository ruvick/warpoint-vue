<template>
	<q-dialog>
		 <q-card class="column justify-between bg-blue-grey-9 q-mb-md" style="max-width: 1344px; width: 100%; height: 840px;">
		  <!-- Header -->
		  <q-card-section class="qr-block__header row items-center q-pl-xl" style="flex: 1 1 auto;">
			  <div class="text-h6 text-grey-10">Проведение операции в кассе</div>
			  <q-space />
			  <q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
		  </q-card-section>
	
		  <!-- Body -->
		  <q-card-section class="col" style="padding: 0;">
			  <div class="operation row">
				<div class="operation__navbar navbar-operation column" style="flex: 0 0 344px; padding: 40px; background-color: #1D1F24;">
					<q-btn-toggle
					 v-model="localModel"
					 toggle-color="primary"
					 flat
					 class="operation-toggle column items-start"
					 :options="options"
					>
					 <template v-slot:label="scope">
						 <div class="row items-center">
						  <q-icon :name="scope.opt.icon" color="white" size="32px" class="q-ml-sm" />
						  {{ scope.opt.label }}
						 </div>
					 </template>
					</q-btn-toggle>
				</div>
	
				<div class="operation__body body-operation" style="flex: 1 1 auto;">
					<!-- Content Components -->
					<component :is="currentComponent" :title="currentLabel" />
				</div>
			  </div>
		  </q-card-section>
		 </q-card>
	</q-dialog>
	</template>
	
	<script setup>
	import { ref, computed, watch } from 'vue';
	
	import ReplenishBalance from './casemodalContent/ReplenishBalance.vue';
	import SpendExpenses from './casemodalContent/SpendExpenses.vue';
	import TransferMoney from './casemodalContent/TransferMoney.vue';
	import Collection from './casemodalContent/Collection.vue';
	
	const localModel = ref('info');
	
	const options = [
	{ label: 'Пополнить баланс', value: 'info', component: ReplenishBalance, class: '', icon: 'svguse:icons/allIcons.svg#top-right-diagonal' },
	{ label: 'Провести расходы', value: 'service', component: SpendExpenses, class: '', icon: 'svguse:icons/allIcons.svg#bottom-right-diagonal' },
	{ label: 'Перевести деньги', value: 'client', component: TransferMoney, class: '', icon: 'svguse:icons/allIcons.svg#translation' },
	{ label: 'Инкассация', value: 'order', component: Collection, class: '', icon: 'svguse:icons/allIcons.svg#castle-cashe' },
	];
	
	const currentComponent = computed(() => {
	const selectedOption = options.find(option => option.value === localModel.value);
	return selectedOption ? selectedOption.component : null;
	});
	
	const currentLabel = computed(() => {
	const selectedOption = options.find(option => option.value === localModel.value);
	return selectedOption ? selectedOption.label : '';
	});
	
	const currentClass = computed(() => {
	const selectedOption = options.find(option => option.value === localModel.value);
	return selectedOption ? selectedOption.class : '';
	});
	</script>
	
	<style lang="scss">
	.operation-toggle {
	.q-btn {
		 padding: 23px 5px 23px 16px;
		 color: #5B89F8;
		 border: 2px solid #1D1F24;
		 font-size: 18px;
		 font-weight: 700;
		 line-height: 21.09px;
	}
	.q-btn.text-primary {
		 border: 2px solid #5B89F8;
		 border-radius: 6px;
	}
	.q-btn__content {
		 flex-direction: row-reverse;
	}
	.q-icon {
		 margin: -5px 0 0 8px;
	}
	}
	</style>