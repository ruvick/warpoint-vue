<template>
	<q-card class="modal-card bg-blue-grey-9" style="height: 100%;">
		 <q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
		  <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
		 </q-btn>
	
		 <q-card-section class="modal-card__sec q-pt-md q-pl-lg q-pr-xl q-pb-lg" style="display: flex; flex-direction: column; min-height: 100%;">
	
		  <q-card-section class="modal-card__wrapper" style="padding: 10px 20px 40px 20px; flex: 1 1 auto">
	
			  <!-- Header -->
			  <q-card-section class="modal-card__header" style="padding: 0 0 32px 0;">
				<div class="text-title-middle text-grey-10">Создание нового товара / услуги</div>
			  </q-card-section>
	
			  <q-card-section class="modal-card__body body-modal" style="height: 730px; overflow: auto;">
	
				<div class="body-modal__row row" style="padding-bottom: 20px;">
	
					<div class="body-modal__item col colum q-mr-lg q-mb-lg">
					 <div class="text-h6 text-white q-mb-lg">Основная информация</div>
	
					 <div class="body-modal__inner row items-center q-mb-lg">
						 <q-input class="q-mr-lg" filled label="Наименование" v-model="input" style="border-radius: 0.375rem; overflow: hidden; max-width: 500px; width: 100%;"/>
						 <div class="q-toggle-container text-grey-10">
						  <span class="left-label">Активен</span>
						  <q-toggle v-model="toggle" />
						  <span class="right-label">Да</span>
						 </div>
					 </div>
	
					 <div class="body-modal__inner row">
						 <q-select
						  class="q-mr-lg q-mb-lg"
						  filled
						  v-model="selectedOption"
						  :options="typeDiscount"
						  label="Категория"
						  style="max-width: 312px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
						 />
						 <q-select
						  class="q-mr-lg q-mb-lg"
						  filled
						  v-model="selectedOptions"
						  :options="typeDiscounts"
						  label="Подкатегория"
						  style="max-width: 312px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
						 />
					 </div>
	
					</div>
	
					<div class="body-modal__item col-auto q-mb-lg">
					 <q-file
						 name="poster_file"
						 v-model="file"
						 filled
						 class="custom-file-uploader"
					 >
						 <template v-slot:prepend>
						  <div class="custom-uploader-content">
							  <img src="icons/camera.svg" alt="Custom Image" class="custom-image" />
							  <div class="custom-text">Загрузить фото
								<q-icon name="svguse:icons/allIcons.svg#upload" size="26px" class="q-ml-sm" />
							  </div>
						  </div>
						 </template>
					 </q-file> 
					</div>
	
				</div>
	
			  </q-card-section>
	
		  </q-card-section>
	
		  <q-card-section class="modal-card__footer">
			  <!-- Bottom-Buttons-Panel -->
			  <div class="body-modal__row row justify-between items-center" style="padding: 10px;">
				<div class="col-auto">
					<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" type="reset" primary/>
				</div>
				<div class="col-auto">
					<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
					 <span class="block">Сохранить</span>
					</q-btn>
				</div>
			  </div>
		  </q-card-section>
	
		 </q-card-section>
	
	</q-card>
	</template>
	
	<script setup>
	import { ref } from 'vue';
	
	const input = ref('');
	const toggle = ref(false);
	const selectedOption = ref(null);
	const selectedOptions = ref(null);
	const typeDiscount = ref([
	{ label: 'Категория 1', value: 'category1' },
	{ label: 'Категория 2', value: 'category2' }
	]);
	const typeDiscounts = ref([
	{ label: 'Подкатегория 1', value: 'subcategory1' },
	{ label: 'Подкатегория 2', value: 'subcategory2' }
	]);
	
	const file = ref(null);
	</script>
	
	<style >
	.custom-file-uploader {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 280px;
		height: 280px;
		border: none;
		border-radius: 8px;
		text-align: center;
		overflow: hidden;
	}
	
	.custom-uploader-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		pointer-events: none;
	}
	
	.custom-file-uploader .custom-image {
		max-width: 100px;
		margin-bottom: 10px;
		pointer-events: none;
	}
	.custom-file-uploader .q-field__prepend {
		pointer-events: none;
	}
	
	.custom-file-uploader .custom-text {
		font-size: 18px;
		font-weight: 500;
		line-height: 21.09px;
		color: #5B89F8;
		margin-top: 20px;
	}
	.custom-file-uploader .q-field__control {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.custom-file-uploader .q-field__control-container {
		display: none;
	}
	.custom-file-uploader .q-field--filled .q-field__control {
    background: #25272D;
	}
	</style>