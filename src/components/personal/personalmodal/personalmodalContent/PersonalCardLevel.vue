<template>

	<div class="personal-modal content-booking__body body-content-booking column q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="personal-level row" style="height: 100%; color: #fff;">

			<div class="personal-level__navigation col-3 column" style="overflow: auto; padding: 3rem; flex: 0 0 22.3125rem;">
				<div class="column">
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 22.5rem; width: 100%; border-bottom: 0.0625rem solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="check1" />
									<span class="q-checkbox-label">ГЛАВНАЯ</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 1rem;">
									<q-checkbox size="lg" v-model="check2" val="lg" label="Таймлайн" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="check3" val="lg" label="Таблица" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 22.5rem; width: 100%; border-bottom: 0.0625rem solid #5B89F826;">
						<q-checkbox size="lg" v-model="check4" val="lg" label="КЛИЕНТЫ" class="text-h6 tex-white" />
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 22.5rem; width: 100%; border-bottom: 0.0625rem solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="check5" />
									<span class="q-checkbox-label">КАССА</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 1rem;">
									<q-checkbox size="lg" v-model="check6" val="lg" label="Касса" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="check7" val="lg" label="Денежные операции" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="check8" val="lg" label="Статьи платежей" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 22.5rem; width: 100%; border-bottom: 0.0625rem solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="check9" />
									<span class="q-checkbox-label">СЕРТИФИКАТЫ</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 1rem;">
									<q-checkbox size="lg" v-model="check10" val="lg" label="Проверка баланса" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="check11" val="lg" label="Активация сертификата" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="check12" val="lg" label="История активаций" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 22.5rem; width: 100%; border-bottom: 0.0625rem solid #5B89F826;">
						<q-checkbox size="lg" v-model="check13" val="lg" label="ПРОМОКОДЫ" class="text-h6" />
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 22.5rem; width: 100%; border-bottom: 0.0625rem solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="check14" />
									<span class="q-checkbox-label">СКЛАД</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 1rem;">
									<q-checkbox size="lg" v-model="check15" val="lg" label="Остатки" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="check16" val="lg" label="Движение товаров" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
				</div>
			</div>

			<div class="personal-level__content col q-pt-lg q-pr-lg q-pb-lg q-pl-lg">
				<!-- Content  -->
			</div>

		</div>
		
	</div>

	<!-- Content Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-lg q-pl-md">
		<div class="footer-content-booking__inner row justify-center items-center" style="width: 100%; gap: 5rem;">

			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Редактировать</span>
			</q-btn>

			<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" primary/>
			 
			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Сохранить</span>
			</q-btn>

		</div>
	</div>
	
</template>

<script setup>

	import {ref} from 'vue';

	const check1 = ref(false);
	const check2 = ref(['line']);
	const check3 = ref(['line']);
	const check4 = ref(false);
	const check5 = ref(false);
	const check6 = ref(['line']);
	const check7 = ref(['line']);
	const check8 = ref(['line']);
	const check9 = ref(false);
	const check10 = ref(['line']);
	const check11 = ref(['line']);
	const check12 = ref(['line']);
	const check13 = ref(['line']);
	const check14 = ref(false);
	const check15 = ref(['line']);
	const check16 = ref(['line']);

</script>

<style lang="scss">
	.personal-modal {
		.my-input-standart-middle .q-field__inner .q-field__control .q-field__label {
			top: 1.125rem;
		}
	}
	.body-box-promo__checkbox .q-expansion-item__container {
		width: 100%;
	}
	.body-box-promo__checkbox .q-item {
		justify-content: space-between;
		padding: 0.5rem 0 0 0;
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
	.footer-content-booking__inner {
		gap: 0.9375rem !important;
	}
	.q-checkbox__bg.absolute {
		background-color: #3C4046;
		border-radius: 0.375rem;
		border: none;
	}
	.q-checkbox__label {
		font-size: 1.125rem;
		font-weight: 500;
		line-height: 1.3181rem;
	}
</style>