<template>
<q-layout>
	<!-- Container  -->
	<q-page-container class="my-page-container"> 
		<q-page class="my-page-body q-pt-md q-pb-sm" style="padding: 0.3937rem 2rem 0.3937rem 8.5rem; margin-top: 4.375rem;">

		<!-- Обертка  -->
			<div class="q-pa-md" style="padding: 0;">
				<div class="q-gutter-y-md">

					<q-card class="q-layout no-shadow no-border-radius">

						<!-- Tabs  -->
						<q-tabs
							v-model="tab"
							dense
							class="text-grey"
							active-color="primary"
							indicator-color="primary"
							align="justify"
							narrow-indicator
						>
							<q-tab class="no-hover" style="flex: 0;" name="mails" label="Проверка баланса" />
							<q-tab class="no-hover" style="flex: 0;" name="alarms" label="Активация сертификата" /> 
							<q-tab class="no-hover" style="flex: 0;" name="movies" label="История активаций" />
						</q-tabs>

						<q-tab-panels class="bg-dark-panel" v-model="tab" animated>

							<!-- Content Tab 1 -->
							<q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="mails">

								<!-- Основная верхняя обертка  -->
								<div class="cert-body row justify-between q-pb-xl">

									<div class="row column col-4 col-4--medium">

										<!-- Блок 1 left  -->
										<div class="q-pt-md" style="display: non;">
											<div class="text-h6 q-mb-xl">Введите данные:</div>

											<q-form @submit="onSubmit" class="column" method="post" style="max-width: 18rem; width: 100%;">
												<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="certificateNumber" mask="AAAA - #### - #### - SSS"
													label="Номер сертификата" style="border-radius: 0.375rem; overflow: hidden;"/>
												<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="pin" type="number" label="PIN" style="border-radius: 0.375rem; overflow: hidden;"/>
											</q-form>
											<q-btn class="text-h6 q-mr-sm" label="Проверить баланс" type="submit" color="primary" style="border-radius: 0.375rem;"/> 
											<q-btn class="text-h6 no-hover" outline color="primary" label="Очистить" type="submit" primary style="border-radius: 0.375rem;"/>
										</div>

									</div>

									<div class="row col bg-dark-box q-pt-md q-pb-md q-pl-lg q-pr-lg">

										<!-- Блок 1 Загрузка сертификата  -->
										<div class="column items-center justify-center" style="width: 100%; display: non;">
											<div class="row">
												<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация о сертификате
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#sert-ico"></use></svg>
													</i>
												</div>
											</div>
											<q-circular-progress indeterminate rounded size="1.875rem" color="light-blue" class="q-mt-lg"/>
										</div>

										<!-- Блок 2 Информация о сертификате  -->
										<div class="column items-start" style="width: 100%; display: non;">
											<div class="row items-center text-h6 text-grey-10 q-mb-xl">Информация о сертификате
												<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
													<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#sert-ico"></use></svg>
												</i>
											</div>

											<!-- Поля статуса -->
											<div class="row q-mb-lg" style="width: 100%;">
												<div class="col">
													<div class="row items-center" style="width: 100%;">

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 12.5rem;">
															<div class="input-info__name">Баланс</div>
															<div class="input-info__value">3 500 ₽</div>
														</div>

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 18rem;">
															<div class="input-info__name">Статус</div>
															<div class="input-info__value input-info__value--active">АКТИВИРОВАН</div>
														</div>

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 18rem;">
															<div class="input-info__name">Номер сертификата</div>
															<div class="input-info__value">RU12-3456-7890-9999</div>
														</div>

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 12.5rem;">
															<div class="input-info__name">Номинал</div>
															<div class="input-info__value">5 000 ₽</div>
														</div>

													</div>
												</div>
											</div>

											<!-- Таблица  -->
											 <div class="table-cert row" style="width: 100%;">
												<!-- Left Table  -->
												<div class="col">
													<div class="row no-wrap">
														<div class="column">
															<div class="item text-grey-10 q-mr-sm q-mb-md">PIN:</div>
															<div class="item text-grey-10 q-mr-sm q-mb-md">Тип сертификата:</div>
															<div class="item text-grey-10 q-mr-sm q-mb-md">Дата покупки:</div>
														</div>
														<div class="column">
															<div class="item q-mb-md">1234</div>
															<div class="item q-mb-md">Пластиковый</div>
															<div class="item q-mb-md">11 апреля 2024</div>
														</div>
													</div>
												</div>

												<!-- Right Table  -->
												<div class="col">
													<div class="row no-wrap">
														<div class="column">
															<div class="item text-grey-10 q-mr-sm q-mb-md text-no-wrap">Место активации:</div>
															<div class="item text-grey-10 q-mr-sm q-mb-md text-no-wrap">Номер брони:</div>
															<div class="item text-grey-10 q-mr-sm q-mb-md text-no-wrap">Срок действия:</div>
														</div>
														<div class="column">
															<div class="item q-mb-md text-no-wrap">Россия, Екатеринбург, ТРЦ “Радуга Парк”</div>
															<div class="item q-mb-md text-no-wrap">Россия, Екатеринбург, ТРЦ “Радуга Парк”</div>
															<div class="item q-mb-md text-no-wrap">до 11 апреля 2028</div>
														</div>
													</div>
												</div>
											 </div>

										</div>

										<!-- Блок 3 Нет сертификата  -->
										<div class="column" style="width: 100%; display: non;">
											<div class="column justify-center items-center text-h6 text-grey-10 q-mb-xs">Вы точно указали правильный номер сертификата?
												<div class="col" style="width: 18.0625rem; height: 12.625rem;" >
													<svg viewBox="0 0 289 202"><use xlink:href="icons/allIcons.svg#sert-no"></use></svg>
												</div>
											</div>

											<div class="row justify-center">
												<q-btn class="q-btn-no text-h6 no-hover text-grey-10" icon-right="close" outline flat label="Очистить всё" type="reset" primary style="text-transform: none"/>
												<q-btn class="q-btn-no text-h6 no-hover" color="primary" outline flat type="button" primary style="text-transform: none">
													<span class="block">Повторить поиск</span>
													<q-icon name="svguse:icons/allIcons.svg#loading" size="1.5625rem" class="q-mr-sm" />
												</q-btn>
											</div>
										</div>

									</div>

								</div>
								<!-- Основная верхняя обертка End  -->

								<!-- Основная нижняя обертка  -->
								<div class="row column q-pt-xl q-pb-md ">

									<q-expansion-item class="text-h6 text-grey-10 no-hover" expand-separator label="История операций">
										<q-card>
											<q-card-section class="bg-dark-panel text-body2">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
												commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
												eveniet doloribus ullam aliquid.
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
												commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
												eveniet doloribus ullam aliquid.
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
												commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
												eveniet doloribus ullam aliquid.
											</q-card-section>
										</q-card>
									</q-expansion-item>

									<q-separator class="bg-dark-separator" />
								</div>
								<!-- Основная нижняя обертка End  -->

							</q-tab-panel>

							<!-- Content Tab 2 -->
							<q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="alarms">

								<!-- Основная верхняя обертка  -->
								<div class="cert-body row justify-between q-pb-xl">

									<div class="row column col-4">

										<!-- Блок 1 left  -->
										<div class="q-pt-md">
											<div class="text-h6 q-mb-xl">Узнайте у клиента номер заказа сертификата:</div>

											<q-form @submit="onSubmit"  class="column" method="post" style="max-width: 23.5rem; width: 100%;">
												<q-input
													color="grey-9"
													standout
													v-model="text"
													type="text"
													class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-ml-auto"
													placeholder="Номер заказа сертификата"
													style="width: 100%;">		
													<template v-slot:prepend>
														<q-icon name="svguse:icons/allIcons.svg#loop" size="2rem" color="grey-9" />
													</template>
												</q-input>								
											</q-form>
										</div>

									</div>

									<div class="row col bg-dark-box q-pt-md q-pb-md q-pl-lg q-pr-lg">

										<!-- Блок 1 Right  -->
										<div class="column items-center justify-center" style="width: 100%; display: non;">
											<div class="row">
												<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#loop"></use></svg>
													</i>
												</div>
											</div>
											<q-circular-progress indeterminate rounded size="1.875rem" color="light-blue" class="q-mt-lg"/>
										</div>

										<!-- Блок 2 Right  -->
										<div class="column" style="width: 100%; display: non;">
											<div class="row q-mb-xl">
												<div class="row items-center text-h6 text-grey-10">Заказ сертификата №1234-5678-90 
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#loop"></use></svg>
													</i>
												</div>
											</div>

											<div class="table-cert row items-stretch" style="width: 100%;">

												<!-- Поля статуса -->
												<div class="col">
													<div class="column items-start">
														<div class="input-info q-mb-md" style="min-width: 18rem;">
															<div class="input-info__name">Номинал</div>
															<div class="input-info__value input-info__value--active">25 000 ₽</div>
														</div>
														<div class="input-info q-mb-md" style="min-width: 18rem;">
															<div class="input-info__name">Статус</div>
															<div class="input-info__value input-info__value--active">ОПЛАЧЕН</div>
														</div>
														<div class="input-info q-mb-md" style="min-width: 18rem;">
															<div class="input-info__name">Дата и время оплаты</div>
															<div class="input-info__value">12 июня 2024, 13:00:17</div>
														</div>
													</div>
												</div>

												<!-- Таблица  -->
												<div class="col column justify-between">
													<div class="row">
														<div class="column">
															<div class="item text-grey-10 q-mr-lg q-mb-md">Имя покупателя:</div>
															<div class="item text-grey-10 q-mr-lg q-mb-md">Телефон покупателя:</div>
															<div class="item text-grey-10 q-mr-lg q-mb-md">E-mail:</div>
														</div>
														<div class="column">
															<div class="item q-mb-md">Егор Дивеев</div>
															<div class="item q-mb-md">+7 (903) 000-00-02</div>
															<div class="item q-mb-md">samtynoob@example.ru</div>
														</div>
													</div>
													<div class="row">
														<div class="column">
															<div class="item text-grey-10 q-mr-lg q-mb-md">Место покупки:</div>
															<div class="item text-grey-10 q-mr-lg q-mb-md">Метод:</div>
															<div class="item text-grey-10 q-mr-lg q-mb-md">Тип сертификата:</div>
														</div>
														<div class="column">
															<div class="item q-mb-md">ekb.warpoint.ru</div>
															<div class="item q-mb-md">Безналичный</div>
															<div class="item q-mb-md">Пластиковый</div>
														</div>
													</div>
												</div>

											</div>

											<!-- Actions -->
											 <div class="row q-mt-xl">
												<div class="column items-end" style="width: 100%;">
													<q-btn class="text-h6" label="Всё верно" type="submit" color="primary" style="border-radius: 0.375rem;"/>
													<div class="item text-body2 text-green-5" color="positive">Отлично! Приступайте к активации</div>
												</div>
											 </div>

										</div>

									</div>

								</div>
								<!-- Основная верхняя обертка End  -->

								<!-- Основная нижняя обертка  -->
								<div class="row column q-pt-xl q-pb-md ">
									<div class="text-h6 q-mb-xl">Активация сертификата</div>

									<div class="row">
										<!-- Left-block  -->
										<div class="col-4">
											<div class="column items-start">

												<div class="row q-mb-lg">
													<q-input class="q-mr-lg q-mb-md" clearable clear-icon="close" filled v-model="certificateNumber" mask="AAAA - #### - #### - ####"
														label="Номер сертификата" style="border-radius: 0.375rem; overflow: hidden; width: 18rem;"/>
													<q-input class="q-mb-md" clearable clear-icon="close" filled v-model="pin" type="number" label="PIN" style="border-radius: 0.375rem; overflow: hidden;"/>
												</div>

												<q-btn class="text-h6" label="Активировать" type="submit" color="positive" style="border-radius: 0.375rem;"/>

											</div>
										</div>

										<!-- Right-block  -->
										<div class="col">

											<!-- Сертификат активирован -->
											<div class="column items-center" style="width: 100%;">
												<div class="col" style="width: 18.0625rem; height: 12.625rem;" >
													<svg viewBox="0 0 289 202"><use xlink:href="icons/allIcons.svg#sert-activ"></use></svg>
												</div>
												<div class="row justify-center">

													<q-btn class="q-btn-no text-h6 no-hover text-grey-10 text-capitalize" outline flat type="reset" primary>
														<span class="block">На главную</span>
														<q-icon name="svguse:icons/allIcons.svg#home" size="1.5625rem" class="q-mr-sm" />
													</q-btn>

												</div>
											</div>

											<!-- Активация не прошла -->
											<div class="column items-center" style="width: 100%; display: non;">
												<div class="col" style="width: 18.0625rem; height: 12.625rem;" >
													<svg viewBox="0 0 289 202"><use xlink:href="icons/allIcons.svg#activ-failed"></use></svg>
												</div>
												<div class="row justify-center">
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10" icon-right="close" outline flat label="Очистить всё" type="reset" primary no-caps/>
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat type="button" primary no-caps>
														<span class="block">Повторить поиск</span>
														<q-icon name="svguse:icons/allIcons.svg#loading-w" size="1.5625rem" class="q-mr-sm" />
													</q-btn>
													<q-btn class="q-btn-no q-btn--send text-h6 no-hover" color="primary" outline flat type="button" primary no-caps>
														<span class="block">Написать в техподдержку</span>
														<q-icon name="svguse:icons/allIcons.svg#send" size="1.5625rem" class="q-mr-sm" />
													</q-btn>
												</div>
											</div>

										</div>
									</div>

								</div>
								<!-- Основная нижняя обертка End  -->

							</q-tab-panel>

							<!-- Content Tab 3 -->
							<q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="movies">

								<div class="row justify-between">
									<div class="text-h6 q-mb-xl">История активаций подарочных сертфикатов</div>
								</div>

								<!-- Table История активаций подарочных сертфикатов -->
								<TableHistory/>

								<!-- Dialog  -->
								<q-dialog
									v-model="ActivationInfo"
								>
									<ActivationInfo />
								</q-dialog>

								<!-- Кнопка открытия модального окна  -->
								<q-btn class="cert-modal q-mt-xl" @click="ActivationInfo = true">Открыть модальное окно</q-btn>

							</q-tab-panel>

						</q-tab-panels>
					</q-card>

				</div>
  		</div>

			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script>
import { ref } from 'vue';

import ActivationInfo from 'src/components/certificates/ActivationInfo.vue';
import TableHistory from 'src/components/certificates/TableHistory.vue';

export default {
name: 'Certificates',
components: {
	ActivationInfo,
	TableHistory,
},
data() {
	return {
		ActivationInfo: false,
	};
},
setup() {
    const tab = ref('mails');
    const value = ref(71);
    const certificateNumber = ref('');
    const pin = ref('');
    const icon = ref(false);

    return {
	  tab,
     value,
     certificateNumber,
     pin,
     icon,
    };
}
};
</script>

<style lang="scss">
	.my-page-body {
		color: #fff;
		background-color: #1C1E22; 
	}
	.q-gutter-y-md, .q-gutter-md {
		margin: -4.375rem 0 0 -0.8125rem;
	}
	.my-page-body .q-tab.q-tab--active {
		min-height: 3rem;
		background-color: #1C1E22;
		border-radius: 0.375rem 0.375rem 0 0;
		.text-primary {
			color: #5B89F8;
		}
	}
	.my-page-body .q-tab__label {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.465rem;
	}
	.my-page-body .q-tab--active .q-tab__indicator {
    opacity: 0;
	}
	.bg-dark-panel {
		background-color: #1C1E22;
	}

	.q-field--filled .q-field__control {
		background: #5B89F826;
	}
	.q-field__label {
		color: #9E9E9E;
	}
	.q-field__native, .q-field__input {
    color: #fff;
	}
	.q-field__focusable-action {
		color: #C7CCCC;
	}
	.bg-dark-box {
		background-color: #1D1F24;
	}
	.q-item__section--main ~ .q-item__section--side {
    padding-left: 0.25rem;
	}
	.q-item__section--side > .q-icon {
    font-size: 2.0625rem;
	}
	.q-expansion-item .q-item__section--main {
    flex: 0 1 auto;
	}
	.q-btn-reset:before {
		display: none;
	}
	.q-btn-no .q-icon,
	.q-btn-no .q-spinner {
		font-size: 1.4375rem;
		margin-top: 0.1875rem;
		margin-left: 0.5938rem;
	}
	.q-btn-no--send .q-icon {
		transform: rotate(-45deg);
		margin-top: -0.375rem;
	}
	
	.input-info {
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		background-color: #25272D;
		border-radius: 0.25rem;
		overflow: hidden;
		padding: 0.6875rem 1rem;
		gap: 0.5rem;
	}
	.input-info__name {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.1719rem;
		color: #9E9E9E;
	}
	.input-info__value {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.465rem;
		color: #fff;
	}
	.input-info__value--active {
		color: #44A248;
	}
	.col-4--medium {
		width: 30% !important;
	}
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
	color: #535965;
	background-color: #1F2024;
  }
	 thead tr th {
		position: sticky;
		z-index: 1;
	 }
	 thead tr:last-child th {
		top: 2.5rem;
	}
	thead tr:first-child th {
		top: 0;
	}
	tbody {
		scroll-margin-top: 3rem;
	}
	.q-table__card {
		background-color: #1C1E22;
	}
	.q-table th, .q-table td {
	 color: #fff;
    padding: 0.625rem 1rem;
    background-color: #1C1E22;
	font-size: 1.125rem !important;
	font-weight: 500;
	line-height: 1.3181rem;
	}
	.q-table thead, .q-table tr, .q-table th, .q-table td {
    border: none;
	}
	.q-table .q-virtual-scroll__content .text-left {
		width: 13.5rem;
		background: #252e42;
		border-radius: 0.375rem;
		font-size: 1.125rem;
		font-weight: 700;
		line-height: 1.3181rem;
	}
	.q-table tbody tr td:nth-child(1) {
		text-align: center;
		width: 4rem;
		font-size: 1.125rem;
		font-weight: 500;
		line-height: 1.3181rem;
	}
	.q-table tbody tr td:nth-child(2) {
		width: 13.5rem;
		background: #252e42;
		border-radius: 0.375rem;
		font-size: 1.125rem;
		font-weight: 700;
		line-height: 1.3181rem;
		border: 0.125rem solid #1C1E22;
	}
	.q-table thead tr th {
		text-align: left;
		color: #535965;
		font-size: 1.125rem;
		font-weight: 500;
		line-height: 1.3181rem;
		white-space: normal;
	}
	.q-table thead tr th:nth-child(1) {
		text-align: center;
	}
	.q-table thead tr th:nth-child(2) {
	 width: 12.5rem;
    align-items: center;
	}
	.q-table thead tr th:nth-child(3) {
		padding-left: 5rem;
	}
	.q-table thead tr th:nth-child(2) .q-table__sort-icon {
    transform: translateY(0.625rem);
}
	.q-table tbody td {
    text-align: left;
	}
	.q-table tbody td:nth-child(3) {
    padding-left: 5rem;
	}
	.q-table th.sortable .q-table__sort-icon {
    opacity: 1;
	 float: left;
	}
	.q-table__separator {
		display: none;
	}
	.q-table__bottom {
		justify-content: flex-start;
	}
	.q-table__control span {
	font-size: 1.125rem;
	font-weight: 500;
	line-height: 1.3181rem;
	color: #9E9E9E;
	}
	.q-table__control span:nth-child(2) {
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 1.7581rem;
	color: #fff;
	}
	.q-table__control-name {
		color: #fff !important;
	}
	.q-btn--send .q-icon {
		margin: 0.5rem 0.3125rem 0.3125rem 0.3125rem;
	}
	@media (max-width: 1538px){
	.page-navigation .nav-pult {
    left: 25%;
    right: auto;
	}
	}
	@media (max-width: 1200px) {
		.table-cert {
			flex-direction: column;
			gap: 1.25rem;
		}
		.cert-body {
			flex-direction: column;
			gap: 1.875rem;
		}
		.cert-body .col-4 {
			width: 100% !important;
		}
		// .cert-body .col {
		// 	width: 100% !important;
		// }
	}
</style>
