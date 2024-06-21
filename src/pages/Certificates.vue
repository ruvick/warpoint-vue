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

									<div class="row column col-4 col-4--medium">

										<!-- Блок 1 left  -->
										<div class="q-pt-md" style="display: non;">
											<div class="text-h6 q-mb-xl">Введите данные:</div>

											<q-form @submit="onSubmit" class="column" method="post" style="width: 18rem;">
												<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="certificateNumber" mask="AAAA - #### - #### - SSS"
													label="Номер сертификата" style="border-radius: 0.375rem; overflow: hidden;"/>
												<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="pin" type="number" label="PIN" style="border-radius: 0.375rem; overflow: hidden;"/>
											</q-form>
											<q-btn class="text-h6" label="Проверить баланс" type="submit" color="primary" style="border-radius: 0.375rem;"/>
											<!-- <q-btn class="text-h6 no-hover" outline color="primary" label="Очистить" type="submit" primary style="border-radius: 0.375rem;"/> -->
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
										<div class="column items-center justify-center" style="width: 100%; display: non;">
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
										<div class="column items-start" style="width: 100%; display: non;">
											<div class="row items-center text-h6 text-grey-10 q-mb-xl">Информация о сертификате
												<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
													<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#sert-ico"></use></svg>
												</i>
											</div>

											<!-- Поля статуса -->
											<div class="row q-mb-lg" style="width: 100%;">
												<div class="col">
													<div class="row items-center" style="width: 100%;">

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 200px;">
															<div class="input-info__name">Баланс</div>
															<div class="input-info__value">3 500 ₽</div>
														</div>

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 288px;">
															<div class="input-info__name">Статус</div>
															<div class="input-info__value input-info__value--active">АКТИВИРОВАН</div>
														</div>

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 288px;">
															<div class="input-info__name">Номер сертификата</div>
															<div class="input-info__value">RU12-3456-7890-9999</div>
														</div>

														<div class="input-info q-mr-lg q-mb-md" style="min-width: 200px;">
															<div class="input-info__name">Номинал</div>
															<div class="input-info__value">5 000 ₽</div>
														</div>

													</div>
												</div>
											</div>

											<!-- Таблица  -->
											 <div class="row" style="width: 100%;">
												<!-- Left Table  -->
												<div class="col">
													<div class="row">
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
													<div class="row">
														<div class="column">
															<div class="item text-grey-10 q-mr-sm q-mb-md">Место активации:</div>
															<div class="item text-grey-10 q-mr-sm q-mb-md">Номер брони:</div>
															<div class="item text-grey-10 q-mr-sm q-mb-md">Срок действия:</div>
														</div>
														<div class="column">
															<div class="item q-mb-md">Россия, Екатеринбург, ТРЦ “Радуга Парк”</div>
															<div class="item q-mb-md">Россия, Екатеринбург, ТРЦ “Радуга Парк”</div>
															<div class="item q-mb-md">до 11 апреля 2028</div>
														</div>
													</div>
												</div>
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
										<div class="column items-center justify-center" style="width: 100%; display: none;">
											<div class="row">
												<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#loop"></use></svg>
													</i>
												</div>
											</div>
											<q-circular-progress indeterminate rounded size="30px" color="light-blue" class="q-mt-lg"/>
										</div>

										<!-- Блок 2 Right  -->
										<div class="column" style="width: 100%; display: non;">
											<div class="row q-mb-xl">
												<div class="row items-center text-h6 text-grey-10">Заказ сертификата №1234-5678-90 
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#loop"></use></svg>
													</i>
												</div>
											</div>

											<div class="row items-stretch" style="width: 100%;">

												<!-- Поля статуса -->
												<div class="col">
													<div class="column items-start">
														<div class="input-info q-mb-md" style="min-width: 288px;">
															<div class="input-info__name">Номинал</div>
															<div class="input-info__value input-info__value--active">25 000 ₽</div>
														</div>
														<div class="input-info q-mb-md" style="min-width: 288px;">
															<div class="input-info__name">Статус</div>
															<div class="input-info__value input-info__value--active">ОПЛАЧЕН</div>
														</div>
														<div class="input-info q-mb-md" style="min-width: 288px;">
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
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10 text-capitalize" icon-right="mail" outline flat label="На главную" type="reset" primary/>
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

								<div class="row justify-between">
									<div class="text-h6 q-mb-xl">История активаций подарочных сертфикатов</div>
								</div>

								<q-table
									class="my-sticky-dynamic"
									style="height: 643px"
									flat
									:rows="rows"
									:columns="columns"
									:loading="loading"
									row-key="index"
									virtual-scroll
									:virtual-scroll-item-size="48"
									:virtual-scroll-sticky-size-start="48"
									:pagination="pagination"
									:rows-per-page-options="[0]"
									@virtual-scroll="onScroll"
								>
									<template v-slot:bottom>
										<div class="q-table__control">
											<span> <span class="q-table__control-name">Записей:</span> {{ rows.length }} из {{ totalRows }}</span>
											<span style="margin-left: 50px;"> {{ formattedTotalCarbs }} ₽</span>
										</div>
									</template>
								</q-table>

								<div class="cert-modal q-pt-lg" @click="icon = true">Открыть модальное окно</div>

								<!-- Popup  -->
								<q-dialog v-model="icon"> 
									<q-card class="q-card-activ bg-blue-grey-9 q-pt-xs q-pb-xl" style="max-width: 832px; width: 100%;">
									<q-card-section class="row items-center q-pl-xl">
										<div class="text-h6 text-grey-10">Информация об активации сертификата</div>
										<q-space />
										<q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
									</q-card-section>

									<q-card-section class="q-pt-xl q-pr-xl q-pl-xl">

											<!-- Статус  -->
											<div class="row items-center justify-center q-mb-xl" style="width: 100%;">

												<div class="input-info q-mr-lg q-mb-md" style="min-width: 232px;">
													<div class="input-info__name">Номер заказа сертфиката</div>
													<div class="input-info__value">1234-5678-90</div>
												</div>

												<div class="input-info q-mr-lg q-mb-md" style="min-width: 200px;">
													<div class="input-info__name">Номинал</div>
													<div class="input-info__value">5 000 ₽</div>
												</div>

												<div class="input-info q-mr-lg q-mb-md" style="min-width: 216px;">
													<div class="input-info__name">Статус оплаты</div>
													<div class="input-info__value input-info__value--active">ОПЛАЧЕН</div>
												</div>

											</div>

											<!-- Таблица  -->
											<div class="row q-pr-md q-pl-md">
												<div class="column">
													<div class="item text-grey-10 q-mr-lg q-mb-xl">Дата и время:</div>
													<div class="item text-grey-9 text-grey-10 q-mr-lg q-mb-md">Имя покупателя:</div>
													<div class="item text-grey-9 text-grey-10 q-mr-lg q-mb-md">Телефон покупателя:</div>
													<div class="item text-grey-9 text-grey-10 q-mr-lg q-mb-md">E-mail:</div>
												</div>
												<div class="column">
													<div class="item text-grey-9 q-mb-xl">14 июня 2024 в 13:46:12</div>
													<div class="item text-grey-9 q-mb-md">Егор Дивеев</div>
													<div class="item text-grey-9 q-mb-md">+7 (903) 000-00-02</div>
													<div class="item text-grey-9 q-mb-md">samtynoob@example.ru</div>
												</div>
											</div>


									</q-card-section>
									</q-card>
								</q-dialog>

							</q-tab-panel>

						</q-tab-panels>
					</q-card>

				</div>
  		</div>

	</div>
</q-page-container>

</template>

<script>
import { ref, computed } from 'vue';

const rows = ref([
{ index: 1, name: '1234-5678-90', calories: '20.08.2024', fat: '20.08.2024', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 2, name: '2464-5832-45', calories: '20.08.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 3, name: '4365-4754-78', calories: '21.08.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 4, name: '5475-1358-30', calories: '24.08.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 5, name: '5735-6403-73', calories: '29.08.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 6, name: '5674-3089-24', calories: '01.09.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 7, name: '5678-9247-89', calories: '01.09.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 8, name: '6804-8956-48', calories: '02.09.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 9, name: '5367-6478-90', calories: '04.09.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 10, name: '5674-7889-51', calories: '08.09.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 11, name: '5678-9247-89', calories: '01.09.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 12, name: '5674-3089-24', calories: '01.09.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
{ index: 13, name: '4365-4754-78', calories: '21.08.2024', fat: '11:10:56', carbs: '5000', protein: 'RU00-0000-0000-0000', sodium: 'Активирован' },
]);

const columns = ref([
{ name: 'index', label: '№', field: 'index' },
{ name: 'name', required: true, label: 'Номер заказа сертификата', align: 'right', field: row => row.name, format: val => `${val}`, sortable: true },
{ name: 'calories', align: 'right', label: 'Дата', field: 'calories', sortable: true },
{ name: 'fat', align: 'right', label: 'Время', field: 'fat', sortable: true },
{ name: 'carbs', align: 'right', label: 'Номинал', field: 'carbs', sortable: true },
{ name: 'protein', align: 'right', label: 'Номер сертификата', field: 'protein', sortable: true },
{ name: 'sodium', label: 'Статус сертификата', field: 'sodium', sortable: true }
]);

const loading = ref(false);
const pagination = ref({ page: 1, rowsPerPage: 13 });

const totalRows = computed(() => rows.value.length);

const totalCarbs = computed(() => {
return rows.value.reduce((total, row) => total + parseInt(row.carbs.replace(/\s/g, ''), 10), 0);
});

const formattedTotalCarbs = computed(() => {
return totalCarbs.value.toLocaleString();
});

const onScroll = () => {
console.log('Virtual scroll event');
};

export default {
name: 'Certificates',
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
     columns,
     rows,
     loading,
     pagination,
     totalRows,
     totalCarbs,
     formattedTotalCarbs,
     onScroll
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
	// .q-placeholder {
	// 	color: #fff;
	// }
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
		border-radius: 4px;
		overflow: hidden;
		padding: 11px 16px;
		gap: 8px;
	}
	.input-info__name {
		font-size: 16px;
		font-weight: 500;
		line-height: 18.75px;
		color: #9E9E9E;
	}
	.input-info__value {
		font-size: 20px;
		font-weight: 500;
		line-height: 23.44px;
		color: #fff;
	}
	.input-info__value--active {
		color: #44A248;
	}
	.col-4--medium {
		width: 30% !important;
	}
	.q-dialog__inner--minimized .q-card-activ {
      //   max-width: 832px;
		//   width: 100%;
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
		top: 40px;
	}
	thead tr:first-child th {
		top: 0;
	}
	tbody {
		scroll-margin-top: 48px;
	}
	.q-table__card {
		background-color: #1C1E22;
	}
	.q-table th, .q-table td {
	 color: #fff;
    padding: 10px 16px;
    background-color: #1C1E22;
	font-size: 18px !important;
	font-weight: 500;
	line-height: 21.09px;
	}
	.q-table thead, .q-table tr, .q-table th, .q-table td {
    border: none;
	}
	.q-table .q-virtual-scroll__content .text-left {
		width: 216px;
		background: #252e42;
		border-radius: 6px;
		font-size: 18px;
		font-weight: 700;
		line-height: 21.09px;
	}
	.q-table tbody tr td:nth-child(1) {
		text-align: center;
		width: 64px;
		font-size: 18px;
		font-weight: 500;
		line-height: 21.09px;
	}
	.q-table tbody tr td:nth-child(2) {
		width: 216px;
		background: #252e42;
		border-radius: 6px;
		font-size: 18px;
		font-weight: 700;
		line-height: 21.09px;
		border: 2px solid #1C1E22;
	}
	.q-table thead tr th {
		text-align: left;
		color: #535965;
		font-size: 18px;
		font-weight: 500;
		line-height: 21.09px;
		white-space: normal;
	}
	.q-table thead tr th:nth-child(1) {
		text-align: center;
	}
	.q-table thead tr th:nth-child(2) {
	 width: 200px;
   //  display: flex;
    align-items: center;
	}
	.q-table thead tr th:nth-child(3) {
		padding-left: 80px;
	}
	.q-table thead tr th:nth-child(2) .q-table__sort-icon {
    transform: translateY(10px);
}
	.q-table tbody td {
    text-align: left;
	}
	.q-table tbody td:nth-child(3) {
    padding-left: 80px;
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
	font-size: 18px;
	font-weight: 500;
	line-height: 21.09px;
	color: #9E9E9E;
	}
	.q-table__control span:nth-child(2) {
	font-size: 24px;
	font-weight: 400;
	line-height: 28.13px;
	color: #fff;
	}
	.q-table__control-name {
		color: #fff !important;
	}
</style>
