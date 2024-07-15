<template>

	<div class="cards-product__catalog catalog-cards row">

		<!-- Компонент карточек  -->
		<CardProducts
			title="VR Super-Agent"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="Stereolife Twister"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="VR Eggs"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="Stereolife Emotion"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="VR Helicopter"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="Futurift"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="Moto VR"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="Infinity VR"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>
		<CardProducts
			title="Galaxy Rift"
			price="9 000"
			category="УСЛУГА"
			imageSrc="путь_к_изображению.jpg"
			imageAlt="описание изображения"
			link="https://example.com/product"
		/>

	</div>
	
</template>

<script setup>

import { ref } from 'vue';
import CardProducts from 'src/components/products/CardProducts.vue';

</script>

<style>

.catalog-cards {
	display: grid; 
	grid-template-columns: repeat(auto-fill, minmax(14.5rem, 1fr)); 
	gap: 2rem;
}

</style>