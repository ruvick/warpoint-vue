<template>
	
	<div class="products__nav nav-product col-auto column" style="width: 430px; padding: 48px 0 26px 110px; background-color: #1A1B1D; margin-right: 3px;">
		<div class="nav-product__body" style="flex: 1 1 auto;">
			<div class="nav-product__item column q-pb-lg" style="width: 100%;">

					<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" 
						expand-separator
						@show="handleShow"
						@hide="handleHide"
						:class="{ 'active': isActive }"
					>
						<template v-slot:header>
							<div class="q-checkbox-header row justify-between" style="width: 100%;">
								<span class="q-checkbox-label row justify-between" style="width: 100%;">VR-EXTREME</span>
							</div>
						</template>
							<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
								<div class="products-radio q-gutter-sm">
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">VR-Аттракционы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Автосимуляторы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Интерактивные зоны</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Комбо-билеты</span>
									</q-btn>
									<q-btn no-caps unelevated class="custom-subcat-btn row items-center justify-between q-ml-sm">
										<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
											<path d="M10.625 4.87517V5.25017H14.375V4.87517C14.375 4.37789 14.1775 3.90098 13.8258 3.54934C13.625 3.37517 12.9973 3.37517 12.5 3.37517C12.0027 3.37517 11.3483 3.37517 11.1742 3.54934C10.8225 3.90098 10.625 4.37789 10.625 4.87517ZM9.125 5.25017V4.87517C9.125 3.98006 9.48058 3.12162 10.1135 2.48868C10.7803 2.25 11.6049 2.25 12.5 2.25C13.7018 2.25 14.6729 2.27528 14.8865 2.48868C15.5194 3.12162 15.875 3.98006 15.875 4.87517V5.25017H21.5C21.6989 5.25017 21.8897 5.32919 22.0303 5.46984C22.171 5.61049 22.25 5.80126 22.25 6.00017C22.25 6.19908 22.171 6.38985 22.0303 6.5305C21.8897 6.67115 21.6989 6.75017 21.5 6.75017H20.369L18.95 19.1762C18.8454 20.0913 18.4076 20.9359 17.7201 21.549C17.0326 22.162 16.1436 22.5006 15.2225 22.5002H9.7775C8.8564 22.5006 7.96735 22.162 7.27989 21.549C6.59243 20.9359 6.15464 20.0913 6.05 19.1762L4.631 6.75017H3.5C3.30109 6.75017 3.11032 6.67115 2.96967 6.5305C2.82902 6.38985 2.75 6.19908 2.75 6.00017C2.75 5.80126 2.82902 5.61049 2.96967 5.46984C3.11032 5.32919 3.30109 5.25017 3.5 5.25017H9.125ZM7.541 19.0052C7.60362 19.5541 7.86602 20.0608 8.27819 20.4287C8.69037 20.7966 9.2235 21 9.776 21.0002H15.2233C15.7757 21 16.3089 20.7966 16.7211 20.4287C17.1332 20.0608 17.3956 19.5541 17.4583 19.0052L18.86 6.75017H6.14075L7.541 19.0052ZM10.25 9.37517C10.4489 9.37517 10.6397 9.45419 10.7803 9.59484C10.921 9.73549 11 9.92626 11 10.1252V17.6252C11 17.8241 10.921 18.0148 10.7803 18.1555C10.6397 18.2962 10.4489 18.3752 10.25 18.3752C10.0511 18.3752 9.86032 18.2962 9.71967 18.1555C9.57902 18.0148 9.5 17.8241 9.5 17.6252V10.1252C9.5 9.92626 9.57902 9.73549 9.71967 9.59484C9.86032 9.45419 10.0511 9.37517 10.25 9.37517ZM15.5 10.1252C15.5 9.92626 15.421 9.73549 15.2803 9.59484C15.1397 9.45419 14.9489 9.37517 14.75 9.37517C14.5511 9.37517 14.3603 9.45419 14.2197 9.59484C14.079 9.73549 14 9.92626 14 10.1252V17.6252C14 17.8241 14.079 18.0148 14.2197 18.1555C14.3603 18.2962 14.5511 18.3752 14.75 18.3752C14.9489 18.3752 15.1397 18.2962 15.2803 18.1555C15.421 18.0148 15.5 17.8241 15.5 17.6252V10.1252Z" fill="#E23239"></path>
										</svg>
										<span class="block">Custom subcategory</span>
										<svg style="margin-left: 5px;" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0_3735_3885)">
											<path d="M10 17.5C10.663 17.5 11.2989 17.7634 11.7678 18.2322C12.2366 18.7011 12.5 19.337 12.5 20C12.5 20.663 12.2366 21.2989 11.7678 21.7678C11.2989 22.2366 10.663 22.5 10 22.5C9.33696 22.5 8.70107 22.2366 8.23223 21.7678C7.76339 21.2989 7.5 20.663 7.5 20C7.5 19.337 7.76339 18.7011 8.23223 18.2322C8.70107 17.7634 9.33696 17.5 10 17.5ZM20 17.5C20.663 17.5 21.2989 17.7634 21.7678 18.2322C22.2366 18.7011 22.5 19.337 22.5 20C22.5 20.663 22.2366 21.2989 21.7678 21.7678C21.2989 22.2366 20.663 22.5 20 22.5C19.337 22.5 18.7011 22.2366 18.2322 21.7678C17.7634 21.2989 17.5 20.663 17.5 20C17.5 19.337 17.7634 18.7011 18.2322 18.2322C18.7011 17.7634 19.337 17.5 20 17.5ZM30 17.5C30.663 17.5 31.2989 17.7634 31.7678 18.2322C32.2366 18.7011 32.5 19.337 32.5 20C32.5 20.663 32.2366 21.2989 31.7678 21.7678C31.2989 22.2366 30.663 22.5 30 22.5C29.337 22.5 28.7011 22.2366 28.2322 21.7678C27.7634 21.2989 27.5 20.663 27.5 20C27.5 19.337 27.7634 18.7011 28.2322 18.2322C28.7011 17.7634 29.337 17.5 30 17.5Z" fill="#5B89F8"/>
											</g>
											<defs>
											<clipPath id="clip0_3735_3885">
											<rect width="40" height="40" fill="white"/>
											</clipPath>
											</defs>
										</svg>
									</q-btn>
									<q-btn unelevated color="blue-1" class="my-btn text-weight-bold" no-caps @click="dialogNewSubcategoryModal = true" style="width: auto; margin: 5px auto 0; display: flex; border-radius: 8px;">
										<q-icon color="white" name="svguse:icons/allIcons.svg#plus" size="12px" class="q-mr-sm" />
										<span class="block">Новая подкатегория</span>
									</q-btn>
								</div>
						</q-card>
					</q-expansion-item>

					<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" 
						expand-separator
						@show="handleShow"
						@hide="handleHide"
						:class="{ 'active': isActive }"
					>
						<template v-slot:header>
							<div class="q-checkbox-header row justify-between" style="width: 100%;">
								<span class="q-checkbox-label row justify-between" style="width: 100%;">VR-ROOM </span>
							</div>
						</template>
							<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
								<div class="products-radio q-gutter-sm">
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">VR-Аттракционы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Автосимуляторы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Интерактивные зоны</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Комбо-билеты</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Custom subcategory</span>
									</q-btn>
								</div>
						</q-card>
					</q-expansion-item>

					<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" 
						expand-separator
						@show="handleShow"
						@hide="handleHide"
						:class="{ 'active': isActive }"
					>
						<template v-slot:header>
							<div class="q-checkbox-header row justify-between" style="width: 100%;">
								<span class="q-checkbox-label row justify-between" style="width: 100%;">СЕРТИФИКАТЫ</span>
							</div>
						</template>
							<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
								<div class="products-radio q-gutter-sm">
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">VR-Аттракционы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Автосимуляторы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Интерактивные зоны</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Комбо-билеты</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Custom subcategory</span>
									</q-btn>
								</div>
						</q-card>
					</q-expansion-item>

					<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" 
						expand-separator
						@show="handleShow"
						@hide="handleHide"
						:class="{ 'active': isActive }"
					>
						<template v-slot:header>
							<div class="q-checkbox-header row justify-between" style="width: 100%;">
								<span class="q-checkbox-label row justify-between" style="width: 100%;">МЕРЧ</span>
							</div>
						</template>
							<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
								<div class="products-radio q-gutter-sm">
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">VR-Аттракционы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Автосимуляторы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Интерактивные зоны</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Комбо-билеты</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Custom subcategory</span>
									</q-btn>
								</div>
						</q-card>
					</q-expansion-item>

					<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" 
						expand-separator
						@show="handleShow"
						@hide="handleHide"
						:class="{ 'active': isActive }"
					>
						<template v-slot:header>
							<div class="q-checkbox-header row justify-between" style="width: 100%;">
								<span class="q-checkbox-label row justify-between" style="width: 100%;">ТОВАРЫ</span>
							</div>
						</template>
							<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
								<div class="products-radio q-gutter-sm">
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">VR-Аттракционы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Автосимуляторы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Интерактивные зоны</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Комбо-билеты</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Custom subcategory</span>
									</q-btn>
								</div>
						</q-card>
					</q-expansion-item>

					<q-expansion-item class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="width: 100%;" 
						expand-separator
						@show="handleShow"
						@hide="handleHide"
						:class="{ 'active': isActive }"
					>
						<template v-slot:header>
							<div class="q-checkbox-header row justify-between" style="width: 100%;">
								<span class="q-checkbox-label row justify-between" style="width: 100%;">ДОП. УСЛУГИ</span>
							</div>
						</template>
							<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
								<div class="products-radio q-gutter-sm">
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">VR-Аттракционы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Автосимуляторы</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Интерактивные зоны</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Комбо-билеты</span>
									</q-btn>
									<q-btn no-caps unelevated class="q-ml-sm">
										<span class="block">Custom subcategory</span>
									</q-btn>
								</div>
						</q-card>
					</q-expansion-item>

			</div>

			<!-- Убрать/Перенести  -->
			<div class="column q-pt-lg q-pb-lg">
					<q-btn unelevated color="blue-1" class="my-btn text-weight-bold q-mb-sm" no-caps @click="dialogNewSubcategoryModal = true"> 
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

	<!-- Окно  -->
	<q-dialog
		v-model="dialogProductsModal"
		class="dialog-full dialog-new-booking"
		position="right">
		<ProductsModal />
	</q-dialog>

</template>

<script>

import { ref } from 'vue';

export default {
	setup() {
    const show = ref(false);
    const dialogProductsModal = ref(false);
    const dialogNewCategoryModal = ref(false);
    const dialogNewSubcategoryModal = ref(false);
	 const isActive = ref(false);

	const handleShow = () => {
	isActive.value = true;
	};

	const handleHide = () => {
	isActive.value = false;
	};

    return {
      show,
      dialogProductsModal,
      dialogNewCategoryModal,
      dialogNewSubcategoryModal,
		isActive,
      handleShow,
      handleHide
    };
  }
}


</script>
