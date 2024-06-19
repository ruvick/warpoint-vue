<template>

	<!-- Container  -->
	<q-page-container class="my-page-container">

		<!-- Обертка  -->
		<div class="my-page-body q-pt-md q-pb-sm" style="padding: 0.3937rem 2rem 0.3937rem 8.5rem; margin-top: 4.375rem; min-height: 93vh;">
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

						<!-- <q-separator /> -->

						<q-tab-panels v-model="tab" animated>

							<!-- Content Tab 1 -->
							<q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="mails">

								<!-- Основная верхняя обертка  -->
								<div class="row justify-between q-pb-xl">

									<div class="row column col-4">

										<!-- Блок 1 left  -->
										<div class="q-pt-md" style="display: non;">
											<div class="text-h6 q-mb-xl">Введите данные:</div>

											<q-form @submit="onSubmit" class="column" method="post" style="width: 18rem;">
												<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="certificateNumber" mask="AAAA - #### - #### - SSS"
													label="Номер сертификата" style="border-radius: 0.375rem; overflow: hidden;"/>
												<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="pin" type="number" label="PIN" style="border-radius: 0.375rem; overflow: hidden;"/>
											</q-form>
											<!-- <q-btn class="text-h6" label="Проверить баланс" type="submit" color="primary" style="border-radius: 0.375rem;"/> -->
											<q-btn class="text-h6 no-hover" outline color="primary" label="Очистить" type="submit" primary style="border-radius: 0.375rem;"/>
										</div>

										<!-- Блок 2 left  -->
										<!-- <div class="q-pt-md">
											<div class="text-h6 q-mb-xl">Узнайте у клиента номер заказа сертификата:</div>

											<q-form @submit="onSubmit"  class="column" method="post" style="width: 23.5rem;">
												<q-input
													color="grey-9"
													standout
													v-model="text"
													type="text"
													class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-ml-auto"
													placeholder="Номер заказа сертификата"
													style="width: 100%;">		
													<template v-slot:prepend>
														<q-icon name="svguse:icons/allIcons.svg#loop" size="32px" color="grey-9" />
													</template>
												</q-input>								
											</q-form>
										</div> -->

									</div>

									<div class="row col bg-dark-box q-pt-md q-pb-md q-pl-lg q-pr-lg">

										<!-- Блок 1 Загрузка сертификата  -->
										<div class="column items-center justify-center" style="width: 100%; display: none;">
											<div class="row">
												<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация о сертификате
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#sert-ico"></use></svg>
													</i>
												</div>
											</div>
											<q-circular-progress indeterminate rounded size="30px" color="light-blue" class="q-mt-lg"/>
										</div>

										<!-- Блок 2 Информация о сертификате  -->
										<div class="column" style="width: 100%; display: non;">
											<div class="row items-center text-h6 text-grey-10 q-mb-xl">Информация о сертификате
												<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
													<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#sert-ico"></use></svg>
												</i>
											</div>

											<div class="row">
												.col	
											</div>

										</div>

										<!-- Блок 3 Нет сертификата  -->
										<div class="column" style="width: 100%; display: none;">
											<div class="column justify-center items-center text-h6 text-grey-10 q-mb-xs">Вы точно указали правильный номер сертификата?
												<div class="col" style="width: 289px; height: 202px;" >
													<svg viewBox="0 0 289 202"><use xlink:href="icons/allIcons.svg#sert-no"></use></svg>
												</div>
											</div>

											<div class="row justify-center">
												<q-btn class="q-btn-no text-h6 no-hover text-grey-10" icon-right="close" outline flat label="Очистить всё" type="reset" primary style="text-transform: none"/>
												<q-btn class="q-btn-no text-h6 no-hover" color="primary" icon-right="close" outline flat label="Повторить поиск" type="button" primary style="text-transform: none"/>
											</div>
										</div>

										<!-- Блок 4 Загрузка сертификата  -->
										<!-- <div class="column items-center justify-center" style="width: 100%;">
											<div class="row">
												<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#loop"></use></svg>
													</i>
												</div>
											</div>
										</div> -->

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
								<div class="row justify-between q-pb-xl">

									<div class="row column col-4">

										<!-- Блок 1 left  -->
										<div class="q-pt-md">
											<div class="text-h6 q-mb-xl">Узнайте у клиента номер заказа сертификата:</div>

											<q-form @submit="onSubmit"  class="column" method="post" style="width: 23.5rem;">
												<q-input
													color="grey-9"
													standout
													v-model="text"
													type="text"
													class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-ml-auto"
													placeholder="Номер заказа сертификата"
													style="width: 100%;">		
													<template v-slot:prepend>
														<q-icon name="svguse:icons/allIcons.svg#loop" size="32px" color="grey-9" />
													</template>
												</q-input>								
											</q-form>
										</div>

									</div>

									<div class="row col bg-dark-box q-pt-md q-pb-md q-pl-lg q-pr-lg">

										<!-- Блок 1 Right  -->
										<div class="column items-center justify-center" style="width: 100%;">
											<div class="row">
												<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#loop"></use></svg>
													</i>
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
													<q-input class="q-mr-lg" clearable clear-icon="close" filled v-model="certificateNumber" mask="AAAA - #### - #### - ####"
														label="Номер сертификата" style="border-radius: 0.375rem; overflow: hidden; width: 288px;"/>
													<q-input clearable clear-icon="close" filled v-model="pin" type="number" label="PIN" style="border-radius: 0.375rem; overflow: hidden;"/>
												</div>

												<q-btn class="text-h6" label="Активировать" type="submit" color="positive" style="border-radius: 0.375rem;"/>

											</div>
										</div>

										<!-- Right-block  -->
										<div class="col">

											<!-- Сертификат активирован -->
											<div class="column items-center" style="width: 100%;">
												<div class="col" style="width: 289px; height: 202px;" >
													<svg viewBox="0 0 289 202"><use xlink:href="icons/allIcons.svg#sert-activ"></use></svg>
												</div>
												<div class="row justify-center">
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10 text-capitalize" icon-right="close" outline flat label="На главную" type="reset" primary/>
												</div>
											</div>

											<!-- Активация не прошла -->
											<div class="column items-center" style="width: 100%; display: none;">
												<div class="col" style="width: 289px; height: 202px;" >
													<svg viewBox="0 0 289 202"><use xlink:href="icons/allIcons.svg#activ-failed"></use></svg>
												</div>
												<div class="row justify-center">
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10" icon-right="close" outline flat label="Очистить всё" type="reset" primary no-caps/>
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10" icon-right="close" outline flat label="Повторить попытку" type="button" primary no-caps/>
													<q-btn class="q-btn-no q-btn-no--send text-h6 no-hover" color="primary" icon-right="send" outline flat label="Написать в техподдержку" type="button" primary no-caps/>
												</div>
											</div>

										</div>
									</div>

								</div>
								<!-- Основная нижняя обертка End  -->

							</q-tab-panel>

							<!-- Content Tab 3 -->
							<q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="movies">

								<div class="row justify-between q-pb-xl">
									<div class="text-h6 q-mb-xl">История активаций подарочных сертфикатов</div>
								</div>

							</q-tab-panel>

						</q-tab-panels>
					</q-card>

				</div>
  		</div>

	</div>
</q-page-container>

</template>

<script>
import { ref } from 'vue';

export default {
     name: 'Certificates',
  setup () {
    return {
      tab: ref('mails'),
		value: 71,
		certificateNumber: ref(''),
		pin: ref('')
    }
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
		border-radius: 0.375rem 0.375rem 0px 0px;
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
</style>
