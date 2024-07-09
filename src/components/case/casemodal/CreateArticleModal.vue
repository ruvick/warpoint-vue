<template>

	<q-dialog >
		<q-card class="column justify-between bg-blue-grey-9 q-mb-md" style="max-width: 832px; width: 100%; min-height: 400px;">
				<!-- Header  -->
				<q-card-section class="qr-block__header row items-center q-pl-xl" style="flex: 1 1 auto;">
					<div class="text-h6 text-grey-10">Создание новой статьи платежей</div>
					<q-space />
					<q-btn class="text-grey-10" icon="close" flat round dense v-close-popup />
				</q-card-section>
				<!-- Body  -->
				<q-card-section class="col row justify-center items-center">
					<div class="row items-center">

						<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="nameArticle" 
						label="Название статьи" style="min-width: 296px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

						<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="type" 
						label="Тип" style="min-width: 216px; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"/>

					</div>
				</q-card-section>	
				<!-- Footer  -->
				<q-card-section class="row justify-between items-center q-pl-xl q-pt-md q-pr-xl">
					<div class="col-auto">
						<q-btn class="q-btn-no text-h6 no-hover text-grey-10 q-mr-md" outline flat label="Отмена" primary/>
					</div>
					<div class="col-auto">
						<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold">
							<span class="block">Создать</span>
						</q-btn>
					</div>
				</q-card-section>
			</q-card>
	</q-dialog>

</template>

<script setup>

	import {ref} from 'vue';

	const nameArticle = ref('');
	const type = ref('');

</script>

<style>



</style>