<template>
	<div class="registration__navbar navbar-registration" style="flex: 0 0 336px; background-color: #1D1F24;">
		 <div class="nav-product__item column q-pb-lg" style="width: 100%; padding: 24px 48px 40px 40px;">

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
					<div class="products-radio column items-start q-gutter-sm">
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('VR-Аттракционы')">
						<span class="block">VR-Аттракционы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Автосимуляторы')">
						<span class="block">Автосимуляторы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Интерактивные зоны')">
						<span class="block">Интерактивные зоны</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Комбо-билеты')">
						<span class="block">Комбо-билеты</span>
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
						<span class="q-checkbox-label row justify-between" style="width: 100%;">VR-ROOM</span>
					</div>
				</template>
				<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
					<div class="products-radio column items-start q-gutter-sm">
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('VR-Аттракционы')">
						<span class="block">VR-Аттракционы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Автосимуляторы')">
						<span class="block">Автосимуляторы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Интерактивные зоны')">
						<span class="block">Интерактивные зоны</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Комбо-билеты')">
						<span class="block">Комбо-билеты</span>
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
					<div class="products-radio column items-start q-gutter-sm">
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('VR-Аттракционы')">
						<span class="block">VR-Аттракционы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Автосимуляторы')">
						<span class="block">Автосимуляторы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Интерактивные зоны')">
						<span class="block">Интерактивные зоны</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Комбо-билеты')">
						<span class="block">Комбо-билеты</span>
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
					<div class="products-radio column items-start q-gutter-sm">
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('VR-Аттракционы')">
						<span class="block">VR-Аттракционы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Автосимуляторы')">
						<span class="block">Автосимуляторы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Интерактивные зоны')">
						<span class="block">Интерактивные зоны</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Комбо-билеты')">
						<span class="block">Комбо-билеты</span>
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
					<div class="products-radio column items-start q-gutter-sm">
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('VR-Аттракционы')">
						<span class="block">VR-Аттракционы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Автосимуляторы')">
						<span class="block">Автосимуляторы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Интерактивные зоны')">
						<span class="block">Интерактивные зоны</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Комбо-билеты')">
						<span class="block">Комбо-билеты</span>
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
						<span class="q-checkbox-label row justify-between" style="width: 100%;">ДОП.УСЛУГИ</span>
					</div>
				</template>
				<q-card class="body-box-promo__checkbox text-h6 text-white no-hover row items-center justify-between" style="background-color: #1A1B1D; width: 100%;" expand-separator>
					<div class="products-radio column items-start q-gutter-sm">
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('VR-Аттракционы')">
						<span class="block">VR-Аттракционы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Автосимуляторы')">
						<span class="block">Автосимуляторы</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Интерактивные зоны')">
						<span class="block">Интерактивные зоны</span>
						</q-btn>
						<q-btn no-caps unelevated class="q-ml-sm" @click="selectCategory('Комбо-билеты')">
						<span class="block">Комбо-билеты</span>
						</q-btn>
					</div>
				</q-card>
			</q-expansion-item>

			<q-checkbox size="lg" v-model="show" val="lg" label="Показать все" class="checkbox-show text-h6" style="color: #ADC4FC;" />
		  
		 </div>
	</div>
</template>
	
<script setup>

	import { ref, defineEmits } from 'vue';

	const show = ref(false);
	
	const isActive = ref(false);
	const emit = defineEmits(['category-selected']);
	
	function handleShow() {
	isActive.value = true;
	}
	
	function handleHide() {
	isActive.value = false;
	}
	
	function selectCategory(category) {
	// Emit the selected category to the parent component
	emit('category-selected', category);
	}

</script>

<style lang="scss">

.checkbox-show {
	.q-checkbox__bg {
		background: #5B89F84D;
	}
}

</style>