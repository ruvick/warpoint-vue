<template>

	<q-card class="modal-card bg-blue-grey-9" style="height: 100%;">
		<q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
			<q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
		</q-btn>

		<q-card-section class="modal-card__sec q-pt-md q-pl-lg q-pr-xl q-pb-lg" style="display: flex; flex-direction: column; min-height: 100%;">

			<q-card-section class="modal-card__wrapper" style="padding: 10px 20px 40px 20px; flex: 1 1 auto">

				<!-- Header Создание Промокода  -->
				<q-card-section class="modal-card__header" style="padding: 0 0 32px 0;">
					<div class="text-title-middle text-grey-10">Создание промокода</div>
				</q-card-section>

				<!-- Header Управление Промокодом  -->
				<q-card-section class="modal-card__header row items-center" style="padding: 0 0 32px 0; display: none;">
					<div class="text-title-middle text-grey-10 col">Управление промокодом —  <span>WYLSACOM</span> </div>
						<q-btn unelevated class="col-auto my-btn q-mr-md text-weight-bold" style="color: #C7CCCC; border: 1px solid #C7CCCC;">
							<span class="block">Удалить из базы</span>
							<q-icon name="svguse:icons/allIcons.svg#cart" size="26px" class="q-ml-sm" />
          			</q-btn>
				</q-card-section>
 
				<q-card-section class="modal-card__body body-modal" style="height: 730px; overflow: auto;"> 

					<div class="body-modal__row row" style="padding-bottom: 20px;">

						<div class="body-modal__item col colum q-mr-lg q-mb-lg">
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
									class="q-mr-lg q-mb-lg"
									filled
									v-model="selectedOption"
									:options="typeDiscount"
									label="Тип скидки"
									style="max-width: 312px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
									<q-select
									class="q-mr-lg q-mb-lg"
									filled
									v-model="selectedOptions"
									:options="typeDiscounts"
									label="Размер скидки"
									style="max-width: 240px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
									<q-select
									class="q-mb-lg"
									filled
									v-model="selectedOptionsr"
									:options="typeDiscountsr"
									label="Кол-во применений (на клиента)"
									style="max-width: 328px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
									/>
							</div>

						</div>

						<div class="body-modal__item col-4 colum q-mb-lg">
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

						<div class="row justify-between" style="max-width: 1300px; width: 100%;">

							<div class="box-promo col-auto q-mr-lg q-mb-lg" style="background-color: #212326; border-radius: 6px; overflow: hidden;">
								<div class="box-promo__header header-box-promo row items-center justify-between q-pt-md q-pl-md q-pr-md" style="background-color: #25272D; padding-bottom: 20px;">
									<div class="header-box-promo__item col-auto row items-center">
										<q-icon name="svguse:icons/allIcons.svg#games" size="26px" class="q-mr-sm" />
										<span class="text-h6" style="color: #44A248;">ИГРЫ</span>
									</div>
									<div class="header-box-promo__item col-auto">
										<q-checkbox size="lg" v-model="checkAll" val="lg" label="НА ВСЕ" class="text-h6" style="color: #fff;" />
									</div>
								</div>
								<div class="box-promo__body body-box-promo" style="background-color: #25272D; padding: 10px 32px 32px 32px; max-height: 314px; overflow: auto;">

									<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
										<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
											<template v-slot:header>
												<div class="q-checkbox-header">
													<q-checkbox size="lg" v-model="checkVRArena" />
													<span class="q-checkbox-label">VR-ARENA</span>
												</div>
											</template>
											<q-card>
												<q-card-section class="bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
													<q-checkbox size="lg" v-model="checkGames1" val="lg" label="Открытая игра" class="text-h6" style="color: #ADC4FC;" />
													<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Игра компанией" class="text-h6" style="color: #ADC4FC;" />
												</q-card-section>
											</q-card>
										</q-expansion-item>
									</div>

									<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
										<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
											<template v-slot:header>
												<div class="q-checkbox-header">
													<q-checkbox size="lg" v-model="checkVRRoom" />
													<span class="q-checkbox-label">VR-ROOM</span>
												</div>
											</template>
											<q-card>
												<q-card-section class="bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
													<q-checkbox size="lg" v-model="checkGames3" val="lg" label="Oculus Quest 2" class="text-h6" style="color: #ADC4FC;" />
													<q-checkbox size="lg" v-model="checkGames4" val="lg" label="Valve Index" class="text-h6" style="color: #ADC4FC;" />
												</q-card-section>
											</q-card>
										</q-expansion-item>
									</div>

									<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
										<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
											<template v-slot:header>
												<div class="q-checkbox-header">
													<q-checkbox size="lg" v-model="checkBirthday" />
													<span class="q-checkbox-label">ДЕНЬ РОЖДЕНИЯ</span>
												</div>
											</template>
											<q-card>
												<q-card-section class="bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
													<q-checkbox size="lg" v-model="checkGames3" val="lg" label="Oculus Quest 2" class="text-h6" style="color: #ADC4FC;" />
													<q-checkbox size="lg" v-model="checkGames4" val="lg" label="Valve Index" class="text-h6" style="color: #ADC4FC;" />
												</q-card-section>
											</q-card>
										</q-expansion-item>
									</div>

								</div>
								<div class="box-promo__footer footer-box-promo row items-center q-pt-md q-pb-md q-pl-lg q-pr-lg justify-between" style="background-color: #212326; width: 100%;">
									<div class="footer-box-promo__label text-h6" style="color: #44A248; margin-right: 30px;">Тарифы:</div>
									<div class="footer-box-promo__choice row items-center">
										<q-radio dark v-model="shape" val="line" label="НА ВСЕ" class="text-title-middle text-grey-10" style="font-size: 18px; margin-right: 10px;" />
										<q-radio dark v-model="shape" val="rectangle" label="Будни (ПН - ЧТ)" class="text-title-middle text-grey-10" style="font-size: 18px; margin-right: 10px;"/>
										<q-radio dark v-model="shape" val="ellipse" label="Выходные (ПТ - ВС)" class="text-title-middle text-grey-10" style="font-size: 18px;"/>
									</div>
								</div>
							</div>

							<div class="box-promo col-5 q-mb-lg" style="background-color: #25272D; border-radius: 6px; overflow: hidden;">
								<div class="box-promo__header header-box-promo row items-center justify-between q-pt-md q-pl-md q-pr-md" style="padding-bottom: 20px;">
									<div class="header-box-promo__item col-auto row items-center">
										<q-icon name="svguse:icons/allIcons.svg#cub" size="26px" class="q-mr-sm" />
										<span class="text-h6" style="color: #44A248;">ТОВАРЫ И УСЛУГИ</span>
									</div>
									<div class="header-box-promo__item col-auto">
										<q-checkbox size="lg" v-model="checkAll" val="lg" label="НА ВСЕ" class="text-h6" style="color: #fff;" />
									</div>
								</div>
								<div class="box-promo__body body-box-promo" style="padding: 10px 32px 32px 32px; max-height: 314px; overflow: auto;">

									<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%;">
										<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
											<template v-slot:header>
												<div class="q-checkbox-header">
													<q-checkbox size="lg" v-model="checkVRArena" />
													<span class="q-checkbox-label">VR-EXTREME</span>
												</div>
											</template>
											<q-card>
												<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #25272D; border-radius: 6px; overflow: hidden; width: 100%; padding: 0 40px;" expand-separator>
													<template v-slot:header>
														<div class="q-checkbox-header">
															<q-checkbox size="lg" v-model="checkVRArena" />
															<span class="q-checkbox-label">VR-Аттракционы</span>
														</div>
													</template>
													<q-card>
														<q-card-section class="bg-dark-panel text-body2 column" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
															<q-checkbox size="lg" v-model="checkGames1" val="lg" label="VR Super-Agent" class="text-h6" style="color: #ADC4FC;" />
															<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Stereolife Twister" class="text-h6" style="color: #ADC4FC;" />
															<q-checkbox size="lg" v-model="checkGames1" val="lg" label="VR Eggs" class="text-h6" style="color: #ADC4FC;" />
															<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Stereolife Emotion" class="text-h6" style="color: #ADC4FC;" />
															<q-checkbox size="lg" v-model="checkGames1" val="lg" label="VR Helicopter" class="text-h6" style="color: #ADC4FC;" />
															<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Futurift" class="text-h6" style="color: #ADC4FC;" />
															<q-checkbox size="lg" v-model="checkGames1" val="lg" label="Moto VR" class="text-h6" style="color: #ADC4FC;" />
															<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Infinity VR" class="text-h6" style="color: #ADC4FC;" />
														</q-card-section>
													</q-card>
												</q-expansion-item>
											</q-card>
										</q-expansion-item>
									</div>

								</div>
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

	.modal-card-body {

	}
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