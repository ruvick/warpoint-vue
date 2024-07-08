<template>

	<div class="content-booking__body body-content-booking row q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="body-content-booking__left col">

			<div class="row">
				<div class="col-auto">

					<div class="body-content-booking__table table-content-booking q-mb-md">
						<div class="table-content-booking__label text-grey-10">Источник:</div>
						<div class="table-content-booking__value">Сайт</div>
						<div class="table-content-booking__label text-grey-10">Тип игры:</div>
						<div class="table-content-booking__value">VR-ARENA</div>
						<div class="table-content-booking__label text-grey-10">Услуга:</div>
						<div class="table-content-booking__value">Открытая игра</div>
						<div class="table-content-booking__label text-grey-10">Кол-во игроков:</div>
						<div class="table-content-booking__value">7 чел.</div>
					</div>

					<div class="body-content-booking__table table-content-booking q-mb-md">
						<div class="table-content-booking__label text-grey-10">Дата:</div>
						<div class="table-content-booking__value">9 февраля 2024</div>
						<div class="table-content-booking__label text-grey-10">Время:</div>
						<div class="table-content-booking__value">16:00 - 18:00</div>
						<div class="table-content-booking__label text-grey-10">Продолжительность:</div>
						<div class="table-content-booking__value">2 часа</div>
					</div>

					<div class="body-content-booking__table table-content-booking">
						<div class="table-content-booking__label text-grey-10">Сумма заказа:</div>
						<div class="table-content-booking__value">60 000 ₽</div>
						<div class="table-content-booking__label text-grey-10">Промокод:</div>
						<div class="table-content-booking__value">1 000 ₽</div>
						<div class="table-content-booking__label text-grey-10">Скидка</div>
						<div class="table-content-booking__value">5 000 ₽</div>
						<div class="table-content-booking__label text-grey-10">Итого к оплате:</div>
						<div class="table-content-booking__value">54 000 ₽</div>
					</div>

				</div>
			</div>
			
		</div>

		<div class="body-content-booking__right col-auto">

			<div class="column">

				<q-input
					filled
					type="textarea"
					v-model="text"
					label="Комментарий клиента *"
					counter
					maxlength="500"
					autogrow
					class="booking-textarea"
					style="background-color: #25272D;"
				/>

				<div class="row items-center" style="padding-top: 36px;">
					<q-input class="q-mr-lg" clearable clear-icon="close" filled v-model="promocodeBooking"
						label="Промокод" style="min-width: 336px; border-radius: 0.375rem; overflow: hidden; background-color: #25272D;"/>
					<q-btn class="text-h6 no-hover" outline color="primary" label="Отменить" type="submit" primary style="border-radius: 0.375rem;"/>
				</div>

			</div>
			
		</div>
	
	</div>

	<!-- Content Booking Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-xs q-pl-md">
		<div class="footer-content-booking__inner row justify-between items-center" style="width: 30%; margin: 0 auto;">
			<q-btn class="q-btn-no text-h6 no-hover text-grey-10 q-mr-md" outline flat label="Отмена" primary/>
			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Сохранить</span>
			</q-btn>
		</div>
	</div>
	
</template>

<script>

</script>

<style>
	.table-content-booking {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: flex-end;
	font-size: 18px;
	font-weight: 500;
	line-height: 21.09px;
	}
	.table-content-booking__label {
	margin-right: 56px;
	padding: 6px;
	}
	.table-content-booking__value {
	padding: 6px;
	}
	.booking-textarea {
	min-width: 504px;
	width: 100%;
	height: 228px;
	}
	.booking-textarea .q-field__control {
	height: 100%;
	}
</style>