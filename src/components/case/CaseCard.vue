<template>
	<div
		 class="case-cards__card case-card column justify-between q-pt-md q-pb-md q-pl-md q-pr-md"
		 :style="{
		  borderRadius: '10px',
		  background: backgroundColor,
		  overflow: 'hidden'
		 }"
	>
		 <div class="case-card__header header-case-card column items-start q-mb-lg">
		  <div class="header-case-card__title-block col row justify-between items-center" style="width: 100%; margin-bottom: 8.5px;">
			  <div class="header-case-card__title text-h6" :style="{ color: titleColor }">{{ title }}</div>
			  <div class="header-case-card__link">
				<q-btn class="btn-no-effects no-hover q-pa-none">
					<q-icon name="svguse:icons/allIcons.svg#edit" color="white" size="36px" />
				</q-btn>
			  </div>
		  </div>
		  <div class="header-case-card__subtitle text-body1" v-if="subtitle" :style="{ color: subtitleColor }">{{ subtitle }}</div>
		 </div>
	
		 <div class="case-card__body body-case-card q-mb-xl">
		  <div class="body-case-card__price" style="font-size: 40px; line-height: 46.88px;" v-if="price">{{ price }} ₽</div>
		  <img v-if="imageSrc" :src="imageSrc" loading="lazy" alt="Картинка" />
		 </div>
	
		 <div class="case-card__footer footer-case-card">
		  <div class="footer-case-card__btn">
			  <q-btn
				v-if="linkName"
				class="btn-no-effects no-hover q-pa-none"
				no-caps
				style="padding: 4px 8px; border-radius: 16px; background-color: #5c78b9;"
			  >
				<span class="text-body1" style="color: #25272D; margin-right: 4px;">{{ linkName }}</span>
				<q-icon name="svguse:icons/allIcons.svg#btn-arrow-right" color="white" size="22px" />
			  </q-btn>
		  </div>
		 </div>
	</div>
</template>
	
<script setup>
	import { defineProps } from 'vue';
	
	const props = defineProps({
	title: String,
	subtitle: String,
	price: Number,
	link: String,
	linkName: String,
	imageSrc: String,
	backgroundColor: {
		 type: String,
		 default: 'linear-gradient(270.12deg, #5B89F8 0.02%, #365192 98.43%)'
	},
	titleColor: {
		 type: String,
		 default: 'white'
	},
	subtitleColor: {
		 type: String,
		 default: 'white'
	}
	});
</script>
	
<style scoped>
	.case-card {
		 min-height: 224px;
	}
</style>