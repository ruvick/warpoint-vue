<template>

	<q-card class="modal-card bg-blue-grey-9" style="height: 100%;">
			<q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
			 <q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
			</q-btn>
	
			<q-card-section class="modal-card__sec bg-blue-grey-9 q-mb-md" style="height: 100vh; overflow: auto; padding-bottom: 100px;">
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
											v-for="(card, index) in cards"
											:key="index"
											:imageSrc="card.imageSrc"
											:imageAlt="card.imageAlt"
											:title="card.title"
											:price="card.price"
											@add-to-list="addToList"
									 />
									</div>
							 </div>
							</div>
	
							<div class="body-registration__info info-body-registration" style="flex: 0 1 632px; overflow: hidden;">
							 <ListProductsRegistration v-if="products.length > 0" :products="products" @remove-product="removeProduct" @clear-list="clearList" />
							 <NoProducts v-else />
							</div>
	
					 </div>
					</div>
			 </q-card-section>
			</q-card-section>
	</q-card>

</template>
	
<script setup>

	import { ref } from 'vue';
	import RegistrationNavBar from 'src/components/warehouse/RegistrationNavBar.vue';
	import CardRegistration from 'src/components/warehouse/CardRegistration.vue';
	import ListProductsRegistration from 'src/components/warehouse/ListProductsRegistration.vue';
	import NoProducts from 'src/components/warehouse/NoProducts.vue';
	
	const selectedCategory = ref('VR-Аттракционы');
	const tab = ref('bar');
	const products = ref([]);
	
	const cards = [
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'VR Super-Agent', price: 9000 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'Stereolife Twister', price: 9500 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'VR Super-Agent', price: 3000 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'Stereolife Twister', price: 10000 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'VR Super-Agent', price: 5500 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'Stereolife Twister', price: 7000 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'VR Super-Agent', price: 19000 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'Stereolife Twister', price: 9000 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'VR Super-Agent', price: 9500 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'Stereolife Twister', price: 19500 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'VR Super-Agent', price: 9000 },
	{ imageSrc: 'путь_к_изображению.jpg', imageAlt: 'описание изображения', title: 'Stereolife Twister', price: 9300 },
	];
	
	function updateCategory(category) {
	selectedCategory.value = category;
	}
	
	function addToList(product) {
	const existingProduct = products.value.find(p => p.title === product.title);
	if (existingProduct) {
			existingProduct.quantity++;
			existingProduct.costPrice = (existingProduct.quantity * existingProduct.unitPrice).toLocaleString() + ' ₽';
	} else {
			products.value.push({ ...product, quantity: 1, costPrice: product.price + ' ₽', unitPrice: product.price });
	}
	}
	
	function removeProduct(title) {
	const index = products.value.findIndex(p => p.title === title);
	if (index !== -1) {
			products.value.splice(index, 1);
	}
	}
	
	function clearList() {
	products.value = [];
	}

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

</style>