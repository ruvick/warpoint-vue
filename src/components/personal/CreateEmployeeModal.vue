<template>

	<q-card class="modal-card bg-blue-grey-9" style="height: 100%;">
		<q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
			<q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
		</q-btn>

		<q-card-section class="modal-card__sec q-pt-md q-pl-lg q-pr-xl q-pb-lg" style="display: flex; flex-direction: column; min-height: 100%;">

			<q-card-section class="modal-card__wrapper" style="padding: 10px 20px 40px 20px; flex: 1 1 auto">

				<!-- Header Создание Промокода  -->
				<q-card-section class="modal-card__header" style="padding: 0 0 32px 0;"> 
					<div class="text-title-middle text-grey-10">Создание нового сотрудника</div> 
				</q-card-section>

				<!-- Header Управление Промокодом  -->
				<q-card-section class="modal-card__header row items-center" style="padding: 0 0 32px 0; display: none;">

				</q-card-section>
 
				<q-card-section class="modal-card__body body-modal" style="height: 730px; overflow: auto;"> 

				</q-card-section>

			</q-card-section>

			<q-card-section class="modal-card__footer">
				<!-- Bottom-Buttons-Panel  -->
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

const selectedOption = ref(null); 
const selectedOptions = ref(null); 
const selectedOptionsr = ref(null); 
const toggle = ref(false);
const date = ref('');
const checkAll = ref(['line']);
const checkGames1 = ref(['line']);
const checkGames2 = ref(['line']);
const checkGames3 = ref(['line']);
const checkGames4 = ref(['line']);
const shape = ref(['line']); 
const checkVRArena = ref(false); 
const checkVRRoom = ref(false); 
const checkBirthday = ref(false);

const typeDiscount = ref([
'Абсолютная', 'Процентная', 'Абсолютная', 'Процентная', 'Абсолютная'
]);
const typeDiscounts = ref([
'Абсолютная', 'Процентная', 'Абсолютная', 'Процентная', 'Абсолютная'
]);
const typeDiscountsr = ref([
'1', '2', '3', '4', '5'
]);

</script>

<style>
	.body-box-promo__checkbox .q-expansion-item__container {
		width: 100%;
	}
	.body-box-promo__checkbox .q-item {
		justify-content: space-between;
		padding: 8px 0 0 0;
	}
	.body-box-promo__checkbox .q-item__section--side > .q-icon {
    color: #5B89F8;
	}
	.body-modal .q-checkbox__bg {
    border: none;
	 background: #5B89F84D;
	}
	.q-virtual-scroll__content .q-item {
		color: #fff;
		background: #252e42;
	}
	.body-modal .q-field__native, .q-field__input {
    color: #fff;
	}
</style>