<template>
	
	<q-card class="qr-block column justify-between bg-blue-grey-9 q-mb-md" style="max-width: 832px; width: 100%; min-height: 720px;">
		<!-- Header  -->
		<q-card-section class="qr-block__header row items-center q-pl-xl">
			<div class="text-h6 text-grey-10">Регистрация игрока по QR-коду</div>
			<q-space />
			<q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
		</q-card-section>
		<!-- Body  -->
		<q-card-section class="qr-block__body body-qr-block row items-center column">
			<div class="body-qr-block__icon">
				<q-img width="370px" height="370px" src="icons/qr-code.svg"/>
			</div>
		</q-card-section>
		<!-- Footer  -->
		<q-card-section class="qr-block__footer row justify-between items-center q-pl-xl q-pt-md q-pr-xl">
			<div class="col-auto">
				<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" type="reset" primary/>
			</div>
			<div class="col-auto">
				<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
					<span class="block">Готово</span>
				</q-btn>
			</div>
		</q-card-section>
	</q-card>

</template>

<script setup>

</script>
