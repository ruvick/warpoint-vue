<template>

	<div class="cards-registration__item item-cards-registration" v-if="title">
		<div class="item-cards-registration__img">
			<q-img
				v-if="imageSrc"
				:src="imageSrc"
				:alt="imageAlt"
				ratio="16/9" 
			  />
		</div>
		<div class="item-cards-registration__body">
			<div class="item-cards-registration__title"> {{ title }} </div>
			<div class="item-cards-registration__actions" v-if="price">
				<div class="item-cards-registration__price"> {{ price }} ₽</div>
				<q-btn color="green" class="btn-no-effects">
					<q-icon name="svguse:icons/allIcons.svg#plus" color="white" size="14px" @click="toggleProducts" />
				</q-btn>
			</div>
		</div>
	</div>

</template>

<script setup>

	import { ref } from 'vue';

	defineProps({
		title: String,
		imageSrc: String,
		imageAlt: String,
		price: Number,
	});

</script>

<style lang="scss">

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
	.item-cards-registration__title:not(:last-child){
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

</style>