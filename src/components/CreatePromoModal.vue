<template>

	<q-card class="modal-card bg-blue-grey-9" style="height: 100%;">
		<q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
			<q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
		</q-btn>

		<q-card-section class="modal-card__sec q-pt-md q-pl-lg q-pr-xl q-pb-lg" style="display: flex; flex-direction: column; min-height: 100%;">

			<q-card-section class="modal-card__wrapper" style="padding: 10px 20px 40px 20px; flex: 1 1 auto">

				<q-card-section class="modal-card__header" style="padding: 0 0 32px 0;">
					<div class="text-title-middle text-grey-10">Создание промокода</div>
				</q-card-section>

				<q-card-section class="modal-card__body body-modal"> 

					<div class="body-modal__row row" style="padding-bottom: 60px;">

						<div class="body-modal__item col colum">
							<div class="text-h6 text-white q-mb-lg">Основная информация</div>

							<div class="body-modal__inner row items-center q-mb-lg">
								<q-input class="q-mr-lg" filled	label="Название промокода" v-model="input" style="border-radius: 0.375rem; overflow: hidden; max-width: 312px; width: 100%;"/>
								<div class="q-toggle-container text-grey-10">
									<span class="left-label">Активен</span>
										<q-toggle v-model="toggle" />
									<span class="right-label">Да</span>
								</div>
							</div>

							<div class="body-modal__inner row">
								<q-select
									class="q-mr-lg"
									filled
									v-model="selectedOption"
									:options="typeDiscount"
									label="Тип скидки"
									style="max-width: 312px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
									<q-select
									class="q-mr-lg"
									filled
									v-model="selectedOptions"
									:options="typeDiscounts"
									label="Размер скидки"
									style="max-width: 240px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
									<q-select
									class=""
									filled
									v-model="selectedOptionsr"
									:options="typeDiscountsr"
									label="Кол-во применений (на клиента)"
									style="max-width: 328px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
							</div>

						</div>

						<div class="body-modal__item col-4 colum">
							<div class="text-h6 text-white q-mb-lg">Срок действия</div>
							<div class="body-modal__inner row">
									<q-input
									class="q-mr-lg q-mb-lg"
									filled
									v-model="date"
									label="Дата начала"
									mask="####-##-##"
									style="max-width: 232px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
									<q-input
									class="q-mr-lg q-mb-lg"
									filled
									v-model="date"
									label="Дата окончания"
									mask="####-##-##"
									style="max-width: 232px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
									<q-select
									class="q-mr-lg q-mb-lg"
									filled
									v-model="selectedOption"
									:options="typeDiscount"
									label="Время начала"
									style="max-width: 232px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
									<q-select
									class="q-mr-lg q-mb-lg"
									filled
									v-model="selectedOptions"
									:options="typeDiscounts"
									label="Время окончания"
									style="max-width: 232px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
							</div>
						</div>

					</div>

					<q-separator style="background-color: #25272D;" />

					<div class="body-modal__row q-pt-md q-pb-md">

						<div class="text-h6 text-white q-mb-lg">Куда применить промокод</div>

						<div class="row">

							<div class="col-4">
								l
							</div>

							<div class="col-4">
								r
							</div>

						</div>

					</div>

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
							<span class="block">Создать</span>
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

const typeDiscount = ref([
'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]);
const typeDiscounts = ref([
'xxGoogle', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]);
const typeDiscountsr = ref([
'yyyxxGoogle', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]);

</script>


<style>

	.modal-card-body {

	}

</style>