<template>
	<q-layout>
		<q-page-container class="my-page-container">
			<q-page class="page-promo" style="color: #fff; padding: 4.0625rem 2rem 4.0625rem 8.5rem;">


				<div class="column items-start">

					<q-btn unelevated color="blue-1" class="my-btn q-mb-md text-weight-bold" no-caps @click="dialogUprBooking = true" style="min-width: 18.75rem;">
						<span class="block">Упр бронью </span>
					</q-btn>

					<q-btn unelevated color="blue-1" class="my-btn q-mb-md text-weight-bold" no-caps @click="openDialog('launchGame')" style="min-width: 18.75rem;">
						<span class="block">Диалог Запустить игру</span>
					</q-btn>

					<q-btn unelevated color="blue-1" class="my-btn q-mb-md text-weight-bold" no-caps @click="openDialog('qrCode')" style="min-width: 18.75rem;">
						<span class="block">Мод окно QR-1</span>
					</q-btn>

				</div>  

				<!-- Модальные окна -->
				<q-dialog v-model="dialogVisible">
					<component :is="currentModal" />
				</q-dialog>

				<q-dialog
					v-model="dialogUprBooking"
					class="dialog-full"
					position="right"
				>
					<UprBooking />
				</q-dialog>

			</q-page> 
		</q-page-container>
	</q-layout>
</template>

<script setup>

import { ref } from 'vue';
import LaunchGameModal from 'src/components/bookingmodal/LaunchGameModal.vue';
import QrCodeModal from 'src/components/bookingmodal/QrCodeModal.vue'; 
import UprBooking from 'src/components/bookingmodal/UprBooking.vue';

// Определение переменных состояния для управления видимостью модальных окон
const dialogVisible = ref(false);
const currentModal = ref(null);
const dialogUprBooking = ref(false);

// Функция для открытия модального окна
const openDialog = (modalType) => {
if (modalType === 'launchGame') {
    currentModal.value = LaunchGameModal;
} else if (modalType === 'qrCode') {
    currentModal.value = QrCodeModal;
}
dialogVisible.value = true;
};
</script>


<style >

</style>