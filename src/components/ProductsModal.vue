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
						  <span class="left-label">Товар</span>
						  <q-toggle v-model="toggle" />
						  <span class="right-label">Услуга</span>
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
						<q-uploader
    label="Загрузить фото"
    auto-upload
    :url="getUrl"
    multiple
    class="custom-file-uploader"
    @uploaded-files="handleUploadedFiles"
  />
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
	import { ref, onMounted, onBeforeUnmount } from 'vue';
	
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

	let observer;

// function getUrl() {
// return 'https://your-upload-url.com/upload'; // Замените на ваш URL для загрузки
// }

// function handleUploadedFiles({ files }) {
// if (files.length > 0) {
//     const fileName = files[0].name;
//     const titleElement = document.querySelector('.q-uploader__header-content .q-uploader__title');
//     if (titleElement) {
//      titleElement.textContent = fileName;
//     }
// }
// }

// function handleFileRemoved() {
// const titleElement = document.querySelector('.q-uploader__header-content .q-uploader__title');
// if (titleElement) {
//     titleElement.textContent = 'Загрузить фото';
//     titleElement.classList.remove('no-after');
// }
// }

onMounted(() => {
const targetNode = document.querySelector('.q-uploader__list');
const config = { childList: true, subtree: true };

observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
     if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        const fileHeader = mutation.addedNodes[0].querySelector('.q-uploader__file-header .q-uploader__title');

        if (fileHeader) {
         const fileName = fileHeader.textContent;
			const customUploader = document.querySelector('.custom-file-uploader');
         const titleElement = document.querySelector('.q-uploader__header-content .q-uploader__title');
			titleElement.classList.add('no-after');
			customUploader.classList.add('no-after');
         if (titleElement) {
            titleElement.textContent = fileName;
         }
		}

     }
    }
});

const	customUploaderCl = ('custom-file-uploader .q-btn--round');
if (customUploaderCl) {
	document.addEventListener("click", function (e) {
		const customUploader = document.querySelector('.custom-file-uploader');
    	const titleElement = document.querySelector('.q-uploader__header-content .q-uploader__title');
    if (titleElement && customUploader) {
        titleElement.textContent = 'Загрузить фото';
        titleElement.classList.remove('no-after');
		  customUploader.classList.remove('no-after');
    }
	});
}

if (targetNode) {
    observer.observe(targetNode, config);
}
});

onBeforeUnmount(() => {
if (observer) {
    observer.disconnect();
}
});
</script>
	
	<style lang="scss">
	.custom-file-uploader {
		position: relative;
		display: flex;
		flex-direction: column-reverse;
		height: 280px;
		background-color: #25272D;
		border-radius: 8px;
		box-shadow: none;
		overflow: hidden;
		&::before{
			content:''; 
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 148px;
			height: 148px; 
			background-size: 100%; 
			background-position: 0 0; 
			background-repeat: no-repeat; 
			background-image: url('/public/icons/camera.svg');
		}
	}
	.custom-file-uploader.no-after {
		&::before{
			display: none;
		}
	}
	.custom-file-uploader .q-uploader__file--img {
			position: absolute !important;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #fff;
			width: 148px;
			height: 135px;
			background-position: 50% 50%;
			background-size: cover;
			background-repeat: no-repeat;
			min-width: auto;
			border: 0;
		}
	.custom-file-uploader .q-uploader__header {
		position: relative;
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
		background-color: #25272D;
		color: #fff;
		width: 100%;
	}
	.custom-file-uploader .q-uploader__subtitle {
		display: none;
	}
	.custom-file-uploader .q-btn--actionable {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 1;
	}
	.custom-file-uploader button .q-anchor--skip  {
			position: absolute;
			top: -5px;
			right: -30px;
			color: #5B89F8;
		}
	.custom-file-uploader .q-btn.q-btn--rectangle  {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: visible;
		opacity: 0;
	}
	.custom-file-uploader .q-btn--actionable:hover .q-focus-helper {
    opacity: 0 !important;
	}	
	.custom-file-uploader .q-uploader__file-header-content {
		// display: none;
		opacity: 0;
		visibility: hidden;
	}
	.custom-file-uploader .q-uploader__header-content {
    	padding: 30px;
	}
	.custom-file-uploader .q-uploader__title {
		display: flex;
		align-self: center;
		font-size: 18px;
		font-weight: 500;
		line-height: 21.09px;
		color: #5B89F8;
		text-align: center;
		&::after {
			content:''; 
			float: right;
			width: 24px;
			height: 24px; 
			margin-left: 10px; 
			background-size: 100%; 
			background-position: 0 0; 
			background-repeat: no-repeat; 
			background-image: url('/public/icons/upload.svg');
		}
	}
	.custom-file-uploader .q-uploader__title.no-after {
		&::after {
			display: none;
		}
	}
	.custom-file-uploader .q-uploader__file--img .q-uploader__file-header {
    	padding-bottom: 0;
    	background: none;
	}
	.custom-file-uploader .q-uploader__list {
    position: static;
	}
	</style>