<template>
	<q-card class="modal-card bg-blue-grey-9" style="height: 100%;">
		 <q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
		  <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
		 </q-btn>
	
		 <q-card-section class="modal-card__sec bg-blue-grey-9 q-mb-md">
		  <!-- Header -->
		  <q-card-section class="qr-block__header row items-center q-pl-xl" style="flex: 1 1 auto;">
			  <div class="text-h6 text-grey-10">Оприходование товара</div>
			  <q-space />
			  <q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
		  </q-card-section>
	
		  <!-- Body -->
		  <q-card-section class="col" style="padding: 0;">
			  <div class="registration row" style="width: 100%;">
				<RegistrationNavBar @category-selected="updateCategory" />
	
				<div class="registration__body body-registration row col" style="width: 100%;">
					<div class="body-registration__content content-registration column items-start" style="flex: 1 1 auto; padding: 26px 32px;">
					 <div class="row items-center justify-between" style="width: 100%; margin-bottom: 1.5rem;">
						 <div class="row items-center col-auto">
						  <div class="text-white" style="font-size: 1.5rem; margin-right: 2rem;">{{ selectedCategory }}</div>
						  <q-tabs class="text-primary my-tabs no-ripple no-hover tabs-display q-ml-lg bg-dark" v-model="tab">
							  <q-tab name="bar">
								<q-icon name="svguse:icons/allIcons.svg#nav-tab-bar" size="1.4063rem" />
							  </q-tab>
							  <q-tab name="list">
								<q-icon name="svguse:icons/allIcons.svg#nav-tab-list" size="1.875rem" />
							  </q-tab>
						  </q-tabs>
						 </div>
						 <div class="nav-cards-product__buttons col-auto row items-center">
						  <q-input
							  color="grey-9"
							  standout
							  type="text"
							  class="my-input-standart my-input-standart-middle bg-blue-grey-8"
							  placeholder="Название или артикул"
							  style="width: 328px;"
						  >
							  <template v-slot:prepend>
								<q-icon name="svguse:icons/allIcons.svg#loop" size="2rem" color="grey-9" />
							  </template>
						  </q-input>
						 </div>
					 </div>
	
					 <!-- Cards Catalog -->
					 <div class="column" style="width: 100%; overflow: auto; height: 848px;">
						 <div class="content-registration__cards cards-registration q-pt-lg q-pb-lg" style="width: 100%; max-width: 600px; margin: 0 auto;">
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="VR Super-Agent"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Stereolife Twister"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="VR Eggs"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Stereolife Emotion"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="VR Helicopter"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Futurift"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Moto VR"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Infinity VR"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Galaxy Rift"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Stereolife Emotion"
							  price="9 000"
						  />
						  <CardRegistration
							  imageSrc="путь_к_изображению.jpg"
							  imageAlt="описание изображения"
							  title="Futurift"
							  price="9 000"
						  />
						 </div>
					 </div>
					</div>
	
					<div class="body-registration__info info-body-registration" style="flex: 0 1 632px; overflow: hidden;">
					 <div class="info-body-registration__list-products list-products-registration column items-start q-pb-lg" style="height: 100%;">
						 <!-- Body -->
						 <div class="list-products-registration__main" style="flex: 1 1 auto; width: 100%;">
						  <div class="row items-center justify-center text-h6 text-grey-10 q-pt-xl q-pb-xl">
							  Список товаров к оприходованию
							  <i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
								<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#cube"></use></svg>
							  </i>
						  </div>
	
						  <div class="col">
							  <q-table
								class="my-sticky-dynamic list-products-table"
								style="height: 300px"
								flat
								:rows="rows"
								:columns="columns"
								:loading="loading"
								row-key="id"
								virtual-scroll
								:virtual-scroll-item-size="48"
								:virtual-scroll-sticky-size-start="48"
								:rows-per-page-options="[0]"
								@virtual-scroll="onScroll"
							  >
								<template v-slot:body-cell-management="props">
									<q-td :props="props">
									 <q-btn class="no-hover" no-caps no-hover flat round dense @click="deleteRow(props.row.id)" style="color: #5B89F8;">
										 <q-icon name="svguse:icons/allIcons.svg#cart" size="20px" />
									 </q-btn>
									</q-td>
								</template>
								<template v-slot:body-cell-quantity="props">
									<q-td :props="props" :class="props.row['quantity-class']">
									 <div class="quantity row items-center">
										 <q-btn icon="remove" @click="decreaseQuantity(props.row)" />
										 <q-input v-model="props.row.quantity" type="number" class="" />
										 <q-btn icon="add" @click="increaseQuantity(props.row)" />
									 </div>
									</q-td>
								</template>
								<template v-slot:body-cell-typeOperation="props">
									<q-td :props="props">
									 <q-btn flat @click="openWindow(props.row)">
										 {{ props.row.typeOperation }}
									 </q-btn>
									</q-td>
								</template>
								<template v-slot:bottom>
									<div class="q-table__control">
									 <span style="margin-right: 50px;">
										 <span class="q-table__control-name q-mr-md" style="font-size: 18px; color: #9E9E9E !important;">Записей:</span>
										 <span style="font-size: 18px; color: #fff;">{{ rows.length }} из {{ totalRows }}</span>
									 </span>
									 <span style="margin-right: 50px;">
										 <span class="q-table__control-name q-mr-md" style="font-size: 18px; color: #9E9E9E !important;">На странице:</span>
										 <span style="font-size: 18px; color: #fff;">{{ rows.length }} из {{ totalRows }}</span>
									 </span>
									 <span style="font-size: 18px; color: #fff;">{{ formattedTotalCostPrice }} ₽</span>
									</div>
								</template>
							  </q-table>
						  </div>
						 </div>
	
						 <!-- Footer -->
						 <div class="list-products-registration__footer row justify-between" style="width: 100%;">
						  <div class="col-auto">
							  <q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Очистить список" type="reset" primary />
						  </div>
						  <div class="col-auto">
							  <q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
								<span class="block">Далее</span>
							  </q-btn>
						  </div>
						 </div>
					 </div>
	
					 <!-- No Products -->
					 <div class="no-products column justify-center items-center" style="height: 100%; display: none;">
						 <div class="row items-center justify-center text-h6 text-grey-10">
						  Список товаров к оприходованию пуст
						  <i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
							  <svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#cube"></use></svg>
						  </i>
						 </div>
						 <div class="row items-center justify-center text-h6 text-grey-10">Начните добавлять товары</div>
					 </div>
					</div>
				</div>
			  </div>
		  </q-card-section>
		 </q-card-section>
	</q-card>
	</template>
	
	<script setup>
	import { ref, computed } from 'vue';
	import RegistrationNavBar from 'src/components/warehouse/RegistrationNavBar.vue';
	import CardRegistration from 'src/components/warehouse/CardRegistration.vue';
	
	const selectedCategory = ref('VR-Аттракционы');
	const tab = ref('bar');
	
	function updateCategory(category) {
	selectedCategory.value = category;
	}
	
	const rows = ref([
	{ id: 1, index: 1, name: 'Футболка S размер', quantity: 1, costPrice: '400 ₽', unitPrice: 400 },
	{ id: 2, index: 2, name: 'Шейкер малый', quantity: 1, costPrice: '600 ₽', unitPrice: 400 },
	]);
	
	const columns = ref([
	{ name: 'index', label: '№', field: 'index' },
	{ name: 'name', align: 'right', label: 'Наименование', field: 'name' },
	{ name: 'quantity', align: 'right', label: 'Кол-во', field: 'quantity' },
	{ name: 'costPrice', align: 'right', label: 'Себестоимость (шт.)', field: 'costPrice' },
	{ name: 'management', align: 'right', label: '', field: 'management' },
	]);
	
	const loading = ref(false);
	
	const totalRows = computed(() => rows.value.length);
	
	const totalCostPrice = computed(() => {
	return rows.value.reduce((total, row) => {
		 const amount = parseInt(row.costPrice.replace(/\s/g, '').replace('₽', ''), 10);
		 return !isNaN(amount) ? total + amount : total;
	}, 0);
	});
	
	const formattedTotalCostPrice = computed(() => {
	return totalCostPrice.value.toLocaleString();
	});
	
	const deleteRow = (id) => {
	rows.value = rows.value.filter(row => row.id !== id);
	};
	
	const onScroll = () => {
	console.log('Virtual scroll event');
	};
	
	const dialogInfoMovementModal = ref(false);
	const selectedRow = ref({});
	
	const openWindow = (row) => {
	selectedRow.value = row;
	dialogInfoMovementModal.value = true;
	};
	
	const totalCellsOnPage = computed(() => {
	return rows.value.length * columns.value.length;
	});
	
	const increaseQuantity = (row) => {
	row.quantity++;
	row.costPrice = (row.quantity * row.unitPrice).toLocaleString() + ' ₽';
	};
	
	const decreaseQuantity = (row) => {
	if (row.quantity > 0) {
		 row.quantity--;
		 row.costPrice = (row.quantity * row.unitPrice).toLocaleString() + ' ₽';
	}
	};
	</script>
	
	<style lang="scss">
	.q-expansion-item__container {
	width: 100%;
	}
	
	.cards-registration {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
	gap: 72px;
	}
	
	.item-cards-registration {
	display: flex;
	flex-direction: column;
	}
	
	.item-cards-registration__img {
	position: relative;
	padding-bottom: 86.2%;
	background-color: #27292d;
	border-radius: 10px;
	overflow: hidden;
	img {
		 position: absolute;
		 top: 0;
		 left: 0;
		 width: 100%;
		 height: 100%;
		 object-fit: cover;
	}
	}
	
	.item-cards-registration__body {
	padding: 8px 0;
	}
	
	.item-cards-registration__title {
	font-size: 18px;
	font-weight: 500;
	line-height: 21.09px;
	color: #fff;
	}
	
	.item-cards-registration__title:not(:last-child) {
	margin-bottom: 8px;
	}
	
	.item-cards-registration__actions {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	.q-btn {
		 font-size: 0;
		 flex: 0 0 32px;
		 width: 32px;
		 height: 32px;
		 padding: 0;
		 overflow: hidden;
		 border-radius: 50%;
	}
	}
	
	.item-cards-registration__price {
	font-size: 18px;
	font-weight: 500;
	line-height: 21.09px;
	color: #fff;
	}
	
	.list-products-table {
	.q-table tbody tr td:nth-child(2) {
		 width: 13.5rem;
		 background: inherit;
		 border-radius: 0.375rem;
		 font-size: 1.125rem;
		 font-weight: 700;
		 line-height: 1.3181rem;
		 border: 0.125rem solid #1C1E22;
	}
	.q-table tbody tr td:nth-child(4) {
		 width: 104px;
		 background: #252e42;
		 border-radius: 0.375rem;
		 font-size: 1.125rem;
		 font-weight: 700;
		 line-height: 1.3181rem;
		 border: 0.125rem solid #1C1E22;
	
		 display: flex;
		 align-items: center;
		 margin-top: 8px;
	}
	.q-table thead tr th:nth-child(3) {
		 padding-left: 1rem;
	}
	.q-table thead tr th:nth-child(4) {
		 text-align: center;
	}
	.q-table tbody td:nth-child(3) {
		 padding-left: 1rem;
	}
	}
	
	.quantity {
	width: 112px !important;
	height: 46px;
	flex-wrap: nowrap;
	overflow: hidden;
	background: #5B89F826;
	padding: 0 10px;
	.q-btn {
		 width: 24px;
		 height: 24px;
		 flex: 0 0 24px;
		 padding: 0;
		 border-radius: 50%;
		 min-height: auto;
		 background-color: #25272D;
		 .q-icon, .q-spinner {
		  font-size: 16px;
		  color: #5B89F8;
		 }
	}
	.q-btn:before {
		 content: "";
		 display: block;
		 position: absolute;
		 left: 0;
		 right: 0;
		 top: 0;
		 bottom: 0;
		 border-radius: inherit;
		 box-shadow: none;
	}
	.q-field__native {
		 text-align: center;
	}
	}
	</style>