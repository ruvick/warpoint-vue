<template>

	<div class="case-wrapper__item case-card column q-pt-md q-pb-md q-pl-md q-pr-md" style="border-radius: 10px; background: linear-gradient(270.12deg, #5B89F8 0.02%, #365192 98.43%); overflow: hidden;">

		<div class="case-card__header header-case-card column items-start">
			<div class="header-case-card__title-block row items-center">
				<div class="header-case-card__title"> {{ title }} </div>
				<div class="header-case-card__link"></div>
			</div>
			<div class="header-case-card__subtitle"> {{ subtitle }} </div>
		</div>

		<div class="case-card__body body-case-card">
			<div class="body-case-card__price"> {{ price }} ₽</div>
		</div>

		<div class="case-card__footer footer-case-card">
			<div class="footer-case-card__btn">

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