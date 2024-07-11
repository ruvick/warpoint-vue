<template>
	<q-dialog v-model="dialog">

		 <q-card class="column justify-between bg-blue-grey-9 q-mb-md" style="max-width: 832px; width: 100%; min-height: 570px;">

		  <!-- Header -->
		  <q-card-section class="qr-block__header row items-center q-pl-xl" style="flex: 1 1 auto;">
			  <div class="text-h6 text-grey-10">Информация об остатках товара</div>
			  <q-space />
			  <q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
		  </q-card-section>
	
		  <!-- Body -->
		  <q-card-section class="col q-pl-xl q-pr-xl">

			<div class="column q-pb-lg" style="width: 100%;">
				<div class="row justify-between items-center">

					<div class="col-auto">

						<div class="row">
							<div class="input-info q-mb-md" style="width: 360px;">
								<div class="input-info__name">Наименование</div> 
								<div class="input-info__value">{{ row.name }}</div>
							</div>
						</div>

						<div class="row justify-between items-center">
							<div class="input-info q-mr-md" style="width: 168px;">
								<div class="input-info__name">Количество</div> 
								<div class="input-info__value"> {{ row.remains }} </div>
							</div>
							<div class="input-info" style="width: 168px;">
								<div class="input-info__name">Склад</div> 
								<div class="input-info__value"> {{ row.warehouse }} </div>
							</div>
						</div>

					</div>

					<div class="col-auto">
						<div class="row">
							<div class="img-info">
								<img v-if="imagePath" :src="imagePath" alt="Картинка" /> 
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="column q-pt-lg q-pb-lg" style="width: 100%;">
				<div class="row justify-between items-center">
					<div class="col-auto">
						<div class="table-content-booking q-mb-md">
							<div class="table-content-booking__label text-grey-9">Категория:</div>
							<div class="table-content-booking__value" style="color: #C7CCCC;"> {{ row.category }} </div>
							<div class="table-content-booking__label text-grey-9">Подкатегория:</div>
							<div class="table-content-booking__value" style="color: #C7CCCC;"> {{ row.subcategory }} </div>
						</div>
					</div>
					<div class="col-auto">
	
					</div>
				</div>
			</div>

			<div class="column q-pt-lg" style="width: 100%;">
				<div class="row justify-between items-center">
					<div class="col-auto">
						<div class="table-content-booking q-mb-md">
							<div class="table-content-booking__label text-grey-9">Цена продажи:</div>
							<div class="table-content-booking__value" style="color: #C7CCCC;"> {{ row.costPricePc }} </div>
							<div class="table-content-booking__label text-grey-9">Себестоимость (итого):</div>
							<div class="table-content-booking__value" style="color: #C7CCCC;"> {{ row.costPriceTotal }} </div>
						</div>
					</div>
				</div>
			</div>

		  </q-card-section>

		 </q-card>

	</q-dialog>
</template>
	
<script setup>

	import { ref, watch } from 'vue';

	const imagePath = ref('путь к картинке');
	
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

	.img-info {
		display: flex;
		width: 208px;
		height: 208px;
		background-color: #25272D;
		border-radius: 8px;
		overflow: hidden;
		background-image: url('./icons/img-info.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: 60%;
		img {
			width: 100%;
			height: 100%;
		}
	}

</style>