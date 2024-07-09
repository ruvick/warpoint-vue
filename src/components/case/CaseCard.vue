<template>
	<div
		 class="case-cards__card case-card column justify-between q-pt-md q-pb-md q-pl-md q-pr-md"
		 :style="{
		  borderRadius: '10px',
		  background: backgroundColor,
		  overflow: 'hidden'
		 }"
	>
		 <div class="case-card__header header-case-card column items-start">
		  <div class="header-case-card__title-block col row justify-between items-center" style="width: 100%; margin-bottom: 8.5px;">
			  <div class="header-case-card__title text-h6" :style="{ color: titleColor }">{{ title }}</div>
			  <div class="header-case-card__link">
				<q-btn class="btn-no-effects no-hover q-pa-none"
					:style="{
					 background: headerLinkBg,
					 borderRadius: '6px'
					}"
					@click="dialogEditCaseModal = true"
				>
					<q-icon name="svguse:icons/allIcons.svg#edit" color="white" size="36px" />
				</q-btn>
			  </div>
		  </div>
		  <div class="header-case-card__subtitle text-body1" v-if="subtitle" :style="{ color: subtitleColor }">{{ subtitle }}</div>
		 </div>
	
		 <div class="case-card__body body-case-card">
		  <div class="body-case-card__price q-mt-lg q-mb-xl" style="font-size: 40px; line-height: 46.88px;" v-if="price">{{ price }} ₽</div>
		  <div class="body-case-card__img row justify-end">
			  <img width="160" height="160" v-if="imageSrc" :src="imageSrc" loading="lazy" alt="Картинка" />
		  </div>
		 </div>
	
		 <div class="case-card__footer footer-case-card">
		  <div class="footer-case-card__btn">
			  <q-btn
				v-if="linkName"
				class="btn-no-effects no-hover q-pa-none"
				no-caps
				:style="{
					padding: '4px 8px',
					borderRadius: '16px',
					background: linkBgColor
				}"
			  >
				<span class="text-body1" style="color: #25272D; margin-right: 4px;">{{ linkName }}</span>
				<q-icon name="svguse:icons/allIcons.svg#btn-arrow-right" color="white" size="22px" />
			  </q-btn>
		  </div>
		 </div>
	</div>
	
	<EditCaseModal v-model="dialogEditCaseModal" />

	</template>
	
	<script setup>
	import { defineProps, ref, watch } from 'vue';
	import EditCaseModal from './casemodal/EditCaseModal.vue';

	
	const props = defineProps({
	title: String,
	subtitle: String,
	price: Number,
	link: String,
	linkName: String,
	imageSrc: String,
	headerLinkBg: {
		 type: String,
		 default: '#6f95ee'
	},
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
	},
	linkBgColor: {
		 type: String,
		 default: '#5c78b9'
	},
	dialogEditCaseModal: {
		 type: Boolean,
		 default: false
	}
	});
	
	const dialogEditCaseModal = ref(false);


	</script>
	
	<style scoped>
	.case-card {
	/* min-height: 224px; */
	}
	</style>