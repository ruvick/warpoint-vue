<template>

	<q-dialog v-model="dialog">
		 <q-card class="column justify-between bg-blue-grey-9 q-mb-md" style="max-width: 832px; width: 100%; min-height: 440px;">
		  <!-- Header -->
		  <q-card-section class="qr-block__header row items-center q-pl-xl" style="flex: 1 1 auto;">
			  <div class="text-h6 text-grey-10">Информация об операции с товаром</div>
			  <q-space />
			  <q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
		  </q-card-section>
	
		  <!-- Body -->
		  <q-card-section class="col q-pl-xl q-pr-xl">
			  <div class="col column justify-center items-start" style="width: 100%;">
				<div class="row items-start items-center q-pt-lg q-mb-xl" style="width: 640px;">
					<div class="input-info q-mr-md q-mb-md" style="width: 416px;">
					 <div class="input-info__name">Наименование</div> 
					 <div class="input-info__value">{{ row.name }}</div>
					</div>
					<div class="input-info q-mr-md q-mb-md" style="width: 200px;">
					 <div class="input-info__name">Количество</div>
					 <div class="input-info__value">{{ row.quantity }}</div>
					</div>
					<div class="input-info q-mr-md q-mb-md" style="width: 200px;">
					 <div class="input-info__name">Сумма</div>
					 <div class="input-info__value">{{ row.amount }}</div>
					</div>
					<div class="input-info q-mb-md" style="width: 200px;">
					 <div class="input-info__name">Склад</div>
					 <div class="input-info__value">{{ row.warehouse }}</div>
					</div>
				</div>
	
				<div class="col-auto">
					<div class="table-content-booking q-mb-md">
					 <div class="table-content-booking__label text-grey-9">Дата и время:</div>
					 <div class="table-content-booking__value" style="color: #C7CCCC;">{{ row.date }} в {{ row.time }}</div>
					 <div class="table-content-booking__label text-grey-9">Тип операции:</div>
					 <div class="table-content-booking__value" style="color: #C7CCCC;">{{ row.typeOperation }}</div>
					 <div class="table-content-booking__label text-grey-9">Пользователь:</div>
					 <div class="table-content-booking__value" style="color: #C7CCCC;">Бычков Соломон</div>
					</div>
				</div>
			  </div>
		  </q-card-section>
		 </q-card>
	</q-dialog>

</template>
	
<script setup>

	import { ref, watch } from 'vue';
	
	const props = defineProps({
	dialog: Boolean,
	row: Object
	});
	
	const emit = defineEmits(['update:dialog']);
	
	const dialog = ref(props.dialog);
	
	watch(() => props.dialog, (newVal) => {
	dialog.value = newVal;
	});
	
	watch(dialog, (newVal) => {
	emit('update:dialog', newVal);
	});

</script>
	
<style lang="scss">

	.input-info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	padding: 11px 16px;
	background-color: #25272D;
	border-radius: 4px;
	overflow: hidden;
	}
	.input-info__name {
	font-size: 16px;
	font-weight: 500;
	line-height: 18.75px;
	color: #9E9E9E;
	}
	.input-info__value {
	font-size: 20px;
	font-weight: 500;
	line-height: 23.44px;
	color: #fff;
	}
	
	.table-content-booking {
	display: grid;
	grid-template-columns: auto auto;
	align-items: flex-end;
	font-size: 18px;
	font-weight: 500;
	line-height: 21.09px;
	}
	
	.table-content-booking__label {
	margin-right: 15px;
	padding: 6px;
	}
	
	.table-content-booking__value {
	padding: 6px;
	}

</style>