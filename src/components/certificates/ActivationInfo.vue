<template>
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
</template>