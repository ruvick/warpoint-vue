<template>
	
	<q-card class="modal-card bg-blue-grey-9" style="height: 100%;">
		<q-btn color="primary" class="btn-close btn-no-effects" v-close-popup>
		<q-icon name="svguse:icons/allIcons.svg#close-modal-out" color="white" size="32px" />
		</q-btn>

		<q-card-section class="modal-card__sec q-pt-md q-pl-lg q-pr-xl q-pb-lg" style="display: flex; flex-direction: column; min-height: 100%;">

		<q-card-section class="modal-card__wrapper" style="padding: 10px 20px 40px 20px; flex: 1 1 auto">

			<!-- Header -->
			<q-card-section class="modal-card__header" style="padding: 0 0 32px 0;">
				<div class="text-title-middle text-grey-10">Создание нового товара / услуги</div>
			</q-card-section>

			<q-card-section class="modal-card__body body-modal" style="height: 730px; overflow: auto;">

			</q-card-section>

		</q-card-section>

		<q-card-section class="modal-card__footer">
			<!-- Bottom-Buttons-Panel -->
			<div class="body-modal__row row justify-between items-center" style="padding: 10px;">
			<div class="col-auto">
				<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" type="reset" primary/>
			</div>
			<div class="col-auto">
				<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
					<span class="block">Сохранить</span>
				</q-btn>
			</div>
			</div>
		</q-card-section>

		</q-card-section>
	</q-card>

</template>

<script>

</script>
