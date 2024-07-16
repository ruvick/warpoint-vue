<template>

	<div class="personal-modal content-booking__body body-content-booking column q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="personal-level row" style="height: 100%; color: #fff;">

			<div class="personal-level__navigation col-3" style="padding: 48px;">
				<div class="column">
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="checkVRArena" />
									<span class="q-checkbox-label">ГЛАВНАЯ</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
									<q-checkbox size="lg" v-model="checkGames1" val="lg" label="Таймлайн" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Таблица" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
						<q-checkbox size="lg" v-model="checkGames1" val="lg" label="КЛИЕНТЫ" class="text-h6" style="color: #ADC4FC;" />
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="checkVRArena" />
									<span class="q-checkbox-label">КАССА</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
									<q-checkbox size="lg" v-model="checkGames1" val="lg" label="Касса" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Денежные операции" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Статьи платежей" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="checkVRArena" />
									<span class="q-checkbox-label">СЕРТИФИКАТЫ</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
									<q-checkbox size="lg" v-model="checkGames1" val="lg" label="Проверка баланса" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Активация сертификата" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="checkGames2" val="lg" label="История активаций" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
						<q-checkbox size="lg" v-model="checkGames1" val="lg" label="ПРОМОКОДЫ" class="text-h6" style="color: #ADC4FC;" />
					</div>
					<div class="body-box-promo__item row items-center justify-between" style="max-width: 360px; width: 100%; border-bottom: 1px solid #5B89F826;">
						<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
							<template v-slot:header>
								<div class="q-checkbox-header">
									<q-checkbox size="lg" v-model="checkVRArena" />
									<span class="q-checkbox-label">СКЛАД</span>
								</div>
							</template>
							<q-card>
								<q-card-section class="column items-start bg-dark-panel text-body2" style="background-color: #25272D; border: none; border-radius: 0; padding: 0 16px;">
									<q-checkbox size="lg" v-model="checkGames1" val="lg" label="Остатки" class="text-h6" style="color: #ADC4FC;" />
									<q-checkbox size="lg" v-model="checkGames2" val="lg" label="Движение товаров" class="text-h6" style="color: #ADC4FC;" />
								</q-card-section>
							</q-card>
						</q-expansion-item>
					</div>
				</div>
			</div>

			<div class="personal-level__content col">
				fhfh
			</div>

		</div>
		
	</div>

	<!-- Content Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-lg q-pl-md">
		<div class="footer-content-booking__inner row justify-center items-center" style="width: 100%; gap: 80px;">

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

</script>

<style lang="scss">
	.personal-modal {
		.my-input-standart-middle .q-field__inner .q-field__control .q-field__label {
			top: 18px;
		}
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