<template>

	<div class="cards-product__catalog catalog-cards-row column" style="padding-top: 20px;">

		<div class="column q-pt-md q-pb-md">
			<div class="catalog-cards-row__top row items-center q-pt-md q-pb-md">
				<q-breadcrumbs active-color="white" style="font-size: 24px;">
					<template v-slot:separator>
						<q-icon name="arrow_forward_ios" style="color: #5B89F8;" />
					</template>
					<q-breadcrumbs-el label="VR-EXTREME" style="color: #5B89F8;" />
					<q-breadcrumbs-el label="VR-Аттракционы" />
				</q-breadcrumbs>
			</div>
			<q-separator style="background-color: #5B89F84D;"></q-separator>
			<div class="catalog-cards-row__body q-pt-xl q-pb-xl">
				<div class="catalog-cards-row__tablr">
					Card Table
				</div>
			</div>
		</div>

		<div class="column q-pt-md q-pb-md">
			<div class="catalog-cards-row__top row items-center q-pt-md q-pb-md">
				<q-breadcrumbs active-color="white" style="font-size: 24px;">
					<template v-slot:separator>
						<q-icon name="arrow_forward_ios" style="color: #5B89F8;" />
					</template>
					<q-breadcrumbs-el label="VR-EXTREME" style="color: #5B89F8;" />
					<q-breadcrumbs-el label="Автосимуляторы" />
				</q-breadcrumbs>
			</div>
			<q-separator style="background-color: #5B89F84D;"></q-separator>
			<div class="catalog-cards-row__body q-pt-xl q-pb-xl">
				<div class="catalog-cards-row__tablr">
					Card Table
				</div>
			</div>
		</div>

	</div> 

</template>

<style>

.q-breadcrumbs__separator {
	margin-top: 0;
}

</style>