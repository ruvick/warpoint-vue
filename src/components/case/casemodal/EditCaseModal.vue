<template>

	<q-dialog v-model="dialogEditCaseModal">
		 <q-card class="edit-case-modal column justify-between q-mb-md" style="max-width: 400px; width: 100%; min-height: 224px; background: linear-gradient(270.12deg, #5B89F8 0.02%, #365192 98.43%); border-radius: 10px;">
		  <!-- Body -->
		  <q-card-section class="col row justify-center items-center">
			  <q-space />
			  <q-btn class="edit-case-modal__close text-grey-10" icon="close" flat round dense v-close-popup />
			  <div class="row items-center">
				<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="nameCase"
					label="Название кассы" style="min-width: 280px; border-radius: 0.25rem; overflow: hidden; background-color: #0000004D;" />
				<q-input class="q-mr-lg q-mb-lg" clearable clear-icon="close" filled v-model="descpCase"
					label="Описание" style="min-width: 280px; border-radius: 0.25rem; overflow: hidden; background-color: #00000026;" />
			  </div>
		  </q-card-section>
	
		  <!-- Footer -->
		  <q-card-section class="row justify-between items-center q-pt-md">
			  <div class="col-auto">
				<q-btn class="btn-no-effects no-hover q-pa-none" no-caps style="padding: 4px 8px; border-radius: 4px; background-color: #5c78b9;">
					<span class="text-body1" style="color: #25272D; margin-right: 4px;">Удалить кассу</span>
					<q-icon name="svguse:icons/allIcons.svg#cart" size="22px" />
				</q-btn>
			  </div>
			  <div class="col-auto">
				<q-btn class="btn-no-effects no-hover q-pa-none" no-caps style="padding: 4px 8px; border-radius: 4px; background-color: #5c78b9;">
					<span class="text-body1" style="color: #25272D; margin-right: 4px;">Сохранить</span>
					<q-icon name="svguse:icons/allIcons.svg#check" size="22px" />
				</q-btn>
			  </div>
		  </q-card-section>
		 </q-card>
	</q-dialog>
	
</template>
	
<script setup>
	import { ref, defineProps, watch } from 'vue';

	
</script>
	
<style lang="scss">
	.edit-case-modal .edit-case-modal__close {
	position: absolute;
	top: 16px;
	right: 16px;
	}
</style>