<template>

	<div class="case-cards__card case-card column justify-between q-pt-md q-pb-md q-pl-md q-pr-md" style="border-radius: 10px; background: linear-gradient(270.12deg, #5B89F8 0.02%, #365192 98.43%); overflow: hidden;">

		<div class="case-card__header header-case-card column items-start q-mb-lg">
			<div class="header-case-card__title-block row items-center" style="margin-bottom: 8.5px;">
				<div class="header-case-card__title text-h6"> {{ title }} </div>
				<div class="header-case-card__link"></div>
			</div>
			<div class="header-case-card__subtitle text-body1" v-if="subtitle"> {{ subtitle }} </div>
		</div>

		<div class="case-card__body body-case-card q-mb-xl">
			<div class="body-case-card__price" style="font-size: 40px; line-height: 46.88px;" v-if="price"> {{ price }} ₽</div>
		</div>

		<div class="case-card__footer footer-case-card">
			<div class="footer-case-card__btn">
				Link 
			</div>
		</div>

	</div>

</template>

<script setup>

	defineProps({
		title: String,
		subtitle: String,
		price: Number,
		Link: String,
		linkName: String
	});

</script>

<style>



</style>