<template>

	<q-dialog >
			<q-card class="column justify-between bg-blue-grey-9 q-mb-md" style="max-width: 832px; width: 100%; min-height: 497px;">

					<!-- Header  -->
					<q-card-section class="qr-block__header row items-center q-pl-xl" style="flex: 1 1 auto;">
						<div class="text-grey-10" style="font-size: 24px;">Информация о денежной операции <span style="color: #fff;">от 18 мар 2024 (20:58:41)</span></div>
						<q-space />
						<q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />

						<div class="row items-center q-mt-xl" style="gap: 16px;">

							<div class="info-input-wrapper row justify-between items-center" style="width: 264px; background-color: #25272D; border-radius: 4px;">
								<div class="info-input" >
									<div class="info-input__name">Номер брони / заказа</div>
									<div class="info-input__value">436-532</div>
								</div>
								<q-btn unelevated class="" no-caps style="padding: 0; height: 72px; border-radius: 0 4px 4px 0; overflow: hidden;">
									<q-icon class="info-input-icon" >
										<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.3333 5.33398H7.99992C7.29267 5.33398 6.6144 5.61494 6.1143 6.11503C5.6142 6.61513 5.33325 7.29341 5.33325 8.00065V24.0006C5.33325 24.7079 5.6142 25.3862 6.1143 25.8863C6.6144 26.3864 7.29267 26.6673 7.99992 26.6673H23.9999C24.7072 26.6673 25.3854 26.3864 25.8855 25.8863C26.3856 25.3862 26.6666 24.7079 26.6666 24.0006V18.6673M15.9999 16.0007L26.6666 5.33398M26.6666 5.33398V12.0007M26.6666 5.33398H19.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</q-icon> 
								</q-btn>
							</div>

							<div class="info-input" style="width: 224px;">
								<div class="info-input__name">Статья</div>
								<div class="info-input__value">Расходная операция</div>
							</div>

							<div class="info-input" style="width: 216px;">
								<div class="info-input__name">Сумма</div>
								<div class="info-input__value">35 000 ₽</div>
							</div>

						</div>

					</q-card-section>

					<!-- Body  -->
					<q-card-section class="col row  items-center q-px-xl">

							<div class="col-auto">

								<div class="table-content-booking q-mb-md">
									<div class="table-content-booking__label text-grey-10">Касса:</div>
									<div class="table-content-booking__value" style="color: #C7CCCC;">Основная касса</div>
									<div class="table-content-booking__label text-grey-10">Метод:</div>
									<div class="table-content-booking__value" style="color: #C7CCCC;">Безналичный</div>
								</div>

							</div>

					</q-card-section>	

					<!-- Footer  -->
					<q-card-section class="row items-center q-pl-xl q-pt-md q-pr-xl">

							<div class="col-auto">

								<div class="table-content-booking q-mb-md">
									<div class="table-content-booking__label text-grey-10">Дата и время:</div>
									<div class="table-content-booking__value" style="color: #C7CCCC;">18 марта 2024 в 20:58:41</div>
									<div class="table-content-booking__label text-grey-10">Статус:</div>
									<div class="table-content-booking__value" style="color: #C7CCCC;">Проведено</div>
									<div class="table-content-booking__label text-grey-10">Пользователь:</div>
									<div class="table-content-booking__value" style="color: #C7CCCC;">Бычков Соломон</div>
								</div>

							</div>

					</q-card-section>
					
			</q-card>
	</q-dialog>

</template>

<script>



</script>


<style lang="scss">

.info-input {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 11px 16px;
	background-color: #25272D;
	border-radius: 4px;
}
.info-input__name {
	font-size: 16px;
	font-weight: 500;
	line-height: 18.75px;
	color: #9E9E9E;
}
.info-input__value {
	font-size: 20px;
	font-weight: 500;
	line-height: 23.44px;
	color: #fff;
}
.info-input-wrapper .q-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 64px;
	flex: 0 0 64px;
	height: 64px;
	background-color: #3970F6;
	padding: 0;
}

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


</style>