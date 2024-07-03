<template>

	<q-card class="column justify-between bg-blue-grey-9 q-mb-md" style="max-width: 832px; width: 100%; min-height: 400px;">
		<!-- Header  -->
		<q-card-section class="row items-center ">
			<q-space />
			<q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
		</q-card-section>
		<!-- Body  -->
		<q-card-section class="launch-game row items-center column" style="margin: auto 0">
			<div class="launch-game__body body-launch-game">
				<div class="body-launch-game__title q-mb-sm" style="font-size: 24px; color: #fff;">Готовы?</div>
				<div class="body-launch-game__text" style="font-size: 18px; color: #C7CCCC;">+ Вы приняли оплату </div>
				<div class="body-launch-game__text" style="font-size: 18px; color: #C7CCCC;">+ Все игроки зарегистрированы</div>
			</div>	
		</q-card-section>
		<!-- Footer  -->
		<q-card-section class="row justify-between items-center q-pl-xl q-pt-md q-pr-xl">
			<div class="col-auto">
				<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
					<span class="block">Нет, вернутся</span>
				</q-btn>
			</div>
			<div class="col-auto">
				<q-btn unelevated color="green" class="my-btn text-weight-bold">
					<span class="block">Да, запустить игру</span>
				</q-btn>
			</div>
		</q-card-section>
	</q-card>

</template>

<script setup>

</script>
