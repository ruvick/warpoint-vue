<template>

	<q-layout>
		<q-page-container class="my-page-container">
			<q-page class="page-promo" style="color: #fff; padding: 4.0625rem 2rem 4.0625rem 2rem;">

				<div class="products row">

					<div class="products__nav nav-product col-auto column" style="width: 430px; padding: 48px 0 26px 110px; background-color: #1A1B1D; margin-right: 3px;">

						<div class="nav-product__body" style="flex: 1 1 auto;">
							<div class="nav-product__item column q-pb-lg" style="width: 100%;">

									<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
										<template v-slot:header>
											<div class="q-checkbox-header row justify-between" style="width: 100%;">
												<span class="q-checkbox-label row justify-between" style="width: 100%;">VR-EXTREME</span>
											</div>
										</template>
											<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="padding: 0 30px; background-color: #1A1B1D; width: 100%;" expand-separator>
												<div class="products-radio q-gutter-sm">
													<q-radio v-model="shape" val="VR-Аттракционы" label="VR-Аттракционы" />
													<q-radio v-model="shape" val="Автосимуляторы" label="Автосимуляторы" />
													<q-radio v-model="shape" val="Интерактивные зоны" label="Интерактивные зоны" />
													<q-radio v-model="shape" val="Комбо-билеты" label="Комбо-билеты" />
													<q-radio v-model="shape" val="Custom subcategory" label="Custom subcategory" />
												</div>
										</q-card>
									</q-expansion-item>

									<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
										<template v-slot:header>
											<div class="q-checkbox-header row justify-between" style="width: 100%;">
												<span class="q-checkbox-label row justify-between" style="width: 100%;">VR-ROOM </span>
											</div>
										</template>
											<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="padding: 0 30px; background-color: #1A1B1D; width: 100%;" expand-separator>
												<div class="products-radio q-gutter-sm">
													<q-radio v-model="shape" val="VR-Аттракционы" label="VR-Аттракционы" />
													<q-radio v-model="shape" val="Автосимуляторы" label="Автосимуляторы" />
													<q-radio v-model="shape" val="Интерактивные зоны" label="Интерактивные зоны" />
													<q-radio v-model="shape" val="Комбо-билеты" label="Комбо-билеты" />
													<q-radio v-model="shape" val="Custom subcategory" label="Custom subcategory" />
												</div>
										</q-card>
									</q-expansion-item>

									<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
										<template v-slot:header>
											<div class="q-checkbox-header row justify-between" style="width: 100%;">
												<span class="q-checkbox-label row justify-between" style="width: 100%;">СЕРТИФИКАТЫ</span>
											</div>
										</template>
											<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="padding: 0 30px; background-color: #1A1B1D; width: 100%;" expand-separator>
												<div class="products-radio q-gutter-sm">
													<q-radio v-model="shape" val="VR-Аттракционы" label="VR-Аттракционы" />
													<q-radio v-model="shape" val="Автосимуляторы" label="Автосимуляторы" />
													<q-radio v-model="shape" val="Интерактивные зоны" label="Интерактивные зоны" />
													<q-radio v-model="shape" val="Комбо-билеты" label="Комбо-билеты" />
													<q-radio v-model="shape" val="Custom subcategory" label="Custom subcategory" />
												</div>
										</q-card>
									</q-expansion-item>

									<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
										<template v-slot:header>
											<div class="q-checkbox-header row justify-between" style="width: 100%;">
												<span class="q-checkbox-label row justify-between" style="width: 100%;">МЕРЧ</span>
											</div>
										</template>
											<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="padding: 0 30px; background-color: #1A1B1D; width: 100%;" expand-separator>
												<div class="products-radio q-gutter-sm">
													<q-radio v-model="shape" val="VR-Аттракционы" label="VR-Аттракционы" />
													<q-radio v-model="shape" val="Автосимуляторы" label="Автосимуляторы" />
													<q-radio v-model="shape" val="Интерактивные зоны" label="Интерактивные зоны" />
													<q-radio v-model="shape" val="Комбо-билеты" label="Комбо-билеты" />
													<q-radio v-model="shape" val="Custom subcategory" label="Custom subcategory" />
												</div>
										</q-card>
									</q-expansion-item>

									<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
										<template v-slot:header>
											<div class="q-checkbox-header row justify-between" style="width: 100%;">
												<span class="q-checkbox-label row justify-between" style="width: 100%;">ТОВАРЫ</span>
											</div>
										</template>
											<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="padding: 0 30px; background-color: #1A1B1D; width: 100%;" expand-separator>
												<div class="products-radio q-gutter-sm">
													<q-radio v-model="shape" val="VR-Аттракционы" label="VR-Аттракционы" />
													<q-radio v-model="shape" val="Автосимуляторы" label="Автосимуляторы" />
													<q-radio v-model="shape" val="Интерактивные зоны" label="Интерактивные зоны" />
													<q-radio v-model="shape" val="Комбо-билеты" label="Комбо-билеты" />
													<q-radio v-model="shape" val="Custom subcategory" label="Custom subcategory" />
												</div>
										</q-card>
									</q-expansion-item>

									<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" expand-separator>
										<template v-slot:header>
											<div class="q-checkbox-header row justify-between" style="width: 100%;">
												<span class="q-checkbox-label row justify-between" style="width: 100%;">ДОП. УСЛУГИ</span>
											</div>
										</template>
											<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="padding: 0 30px; background-color: #1A1B1D; width: 100%;" expand-separator>
												<div class="products-radio q-gutter-sm">
													<q-radio v-model="shape" val="VR-Аттракционы" label="VR-Аттракционы" />
													<q-radio v-model="shape" val="Автосимуляторы" label="Автосимуляторы" />
													<q-radio v-model="shape" val="Интерактивные зоны" label="Интерактивные зоны" />
													<q-radio v-model="shape" val="Комбо-билеты" label="Комбо-билеты" />
													<q-radio v-model="shape" val="Custom subcategory" label="Custom subcategory" />
												</div>
										</q-card>
									</q-expansion-item>

							</div>

							<!-- Убрать/Перенести  -->
							 <div class="column q-pt-lg q-pb-lg">
									<q-btn unelevated color="blue-1" class="my-btn text-weight-bold" no-caps @click="dialogNewSubcategoryModal = true"> 
										<q-icon name="svguse:icons/allIcons.svg#plus" size="12px" class="q-mr-sm" />
										<span class="block">Новая подкатегория</span>
									</q-btn>
									<q-btn unelevated color="blue-1" class="my-btn q-mb-md text-weight-bold" no-caps @click="dialogNewCategoryModal = true">
											<span class="block">Новая Категория</span>
									</q-btn>
							 </div>

							 <!-- Окно Категории  -->
							 <q-dialog v-model="dialogNewCategoryModal"> 
									<q-card class="column justify-between q-card-activ bg-blue-grey-9 q-pt-xs q-pb-md" style="max-width: 832px; width: 100%; min-height: 440px;">
										
										<!-- Header  -->
										<q-card-section class="row items-center q-pl-xl">
											<div class="text-h6 text-grey-10">Создание категории товаров / услуг</div>
											<q-space />
											<q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
										</q-card-section>

											<!-- Body  -->
											<q-card-section class="row items-center q-pt-xl q-pr-xl q-pl-xl">
													<!-- <div class="row items-center justify-center q-mb-xl" style="width: 100%;"> -->
														<q-input class="q-mr-lg q-mb-lg" filled label="Название категории" v-model="input" style="border-radius: 0.375rem; overflow: hidden; max-width: 296px; width: 100%;"/>
														<q-select
															class="q-mb-lg"
															filled
															v-model="selectedOption"
															:options="typeDiscount"
															label="Отображать после категории"
															style="max-width: 416px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
														/>
											</q-card-section>

											<!-- Footer  -->
											<q-card-section class="row justify-between items-center">
												<div class="col-auto">
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" type="reset" primary/>
												</div>
												<div class="col-auto">
													<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
													<span class="block">Создать</span>
													</q-btn>
												</div>
											</q-card-section>

									</q-card>
								</q-dialog>

								<!-- Окно Под Категории -->
								<q-dialog v-model="dialogNewSubcategoryModal"> 
									<q-card class="column justify-between q-card-activ bg-blue-grey-9 q-pt-xs q-pb-md" style="max-width: 832px; width: 100%; min-height: 440px;">
										
										<!-- Header  -->
										<q-card-section class="row items-center q-pl-xl">
											<div class="text-h6 text-grey-10">Создание подкатегории товаров / услуг</div>
											<q-space />
											<q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
										</q-card-section>

											<!-- Body  -->
											<q-card-section class="row items-center q-pt-xl q-pr-xl q-pl-xl">
													<!-- <div class="row items-center justify-center q-mb-xl" style="width: 100%;"> -->
														<q-input class="q-mr-lg q-mb-lg" filled label="Название категории" v-model="input" style="border-radius: 0.375rem; overflow: hidden; max-width: 296px; width: 100%;"/>
														<q-select
															class="q-mb-lg"
															filled
															v-model="selectedOption"
															:options="typeDiscount"
															label="К какой категории отнести"
															style="max-width: 416px; width: 100%; border-radius: 0.375rem; overflow: hidden;"
														/>
											</q-card-section>

											<!-- Footer  -->
											<q-card-section class="row justify-between items-center">
												<div class="col-auto">
													<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" type="reset" primary/>
												</div>
												<div class="col-auto">
													<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
													<span class="block">Создать</span>
													</q-btn>
												</div>
											</q-card-section>

									</q-card>
								</q-dialog>


						</div>

						<div class="nav-product__footer column">
							<div class="nav-product__item column" style="margin-bottom: 40px">
								<q-checkbox size="lg" v-model="show" val="lg" label="Показать все" class="text-h6" style="color: #ADC4FC;" />
							</div>
							<div class="nav-product__item row justify-center items-center" style="padding: 26px 0">
								<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
									<span class="block">Редактировать</span>
								</q-btn>
							</div>
							<div class="nav-product__item row items-center justify-between" style="padding: 26px 0; width: 100%;">
								<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" type="reset" primary/>
								<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
									<span class="block">СОХРАНИТЬ</span>
								</q-btn>
							</div>
						</div>

					</div>
					
					<div class="products__cards cards-product col" style="padding: 26px 32px 32px 32px; background-color: #1A1B1D;">

						<div class="cards-product__nav nav-cards-product row items-center justify-between">
							<div class="nav-cards-product__actions row items-center col-auto">
								<div class="" style="font-size: 24px; margin-right: 32px;">VR-Аттракционы</div>
								<q-tabs class="text-primary my-tabs no-ripple no-hover tabs-display q-ml-lg bg-dark" v-model="tab">
									<q-tab name="bar">
										<q-icon name="svguse:icons/allIcons.svg#nav-tab-bar" size="22.5px" />
									</q-tab>
									<q-tab name="list">
										<q-icon name="svguse:icons/allIcons.svg#nav-tab-list" size="30px" />
									</q-tab>
								</q-tabs>
							</div>
							<div class="nav-cards-product__buttons col-auto row items-center">
								<q-btn unelevated color="blue-1" class="my-btn text-weight-bold" no-caps @click="dialogProductsModal = true" style="margin-right: 40px;">
									<q-icon name="svguse:icons/allIcons.svg#plus" size="12px" class="q-mr-sm" />
									<span class="block">Новый товар / услуга</span>
          			</q-btn>
								<q-input
									color="grey-9"
									standout
									type="text"
									class="my-input-standart my-input-standart-middle bg-blue-grey-8"
									placeholder="Название или артикул"
									style="min-width: 352px;"
								>
									<template v-slot:prepend>
										<q-icon name="svguse:icons/allIcons.svg#loop" size="32px" color="grey-9" />
									</template>
								</q-input>
							</div>
						</div>

						<ProductsCardsTable v-if="tab === 'bar'"></ProductsCardsTable>
						<ProductsCardRow v-if="tab === 'list'"></ProductsCardRow>

					</div>
				</div>

				<!-- Окно  -->
				<q-dialog
					v-model="dialogProductsModal"
					class="dialog-full dialog-new-booking"
					position="right">
					<ProductsModal />
				</q-dialog>
				<!-- Открытие модалки End -->

			</q-page>
		</q-page-container> 
	</q-layout>

</template>

<script>
import { ref, } from 'vue';

// Подключение компонентов
import ProductsCardsTable from 'src/components/ProductsCardsTable.vue';
import ProductsCardRow from 'src/components/ProductsCardRow.vue';
import ProductsModal from 'src/components/ProductsModal.vue';

export default {
  components: {
    ProductsCardsTable,
    ProductsCardRow,
		ProductsModal,
  },
  data() {
    return {
      tab: 'bar', 
			shape: ref('line'),
			show: false,
			dialogProductsModal: false,
			dialogNewCategoryModal: false,
			dialogNewSubcategoryModal: false,
    };
  },
  
}

</script>

<style lang="scss">

.products__nav .q-expansion-item__container {
	width: 100%;
}
.products__nav .q-expansion-item  .q-icon {
	color: #5B89F8;
}
.products-radio {
	.q-radio__inner {
		display: none;
	}
}
.products__nav .q-checkbox__bg {
  border: none;
	 background: #5B89F84D;
	}
</style>