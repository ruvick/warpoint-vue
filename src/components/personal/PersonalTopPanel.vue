<template>
  
	<div class="row q-mb-lg" style="width: 100%;">
		<div class="col row">
			<div class="text-h6">Список сотрудников</div>
		</div>
		<div class="col-auto row items-center">
			<q-input
				color="grey-9"
				standout
				v-model="searchPersonal"
				type="text"
				class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-mr-xl"
				placeholder="Телефон или имя сотрудника"
				style="width: 360px;"
			>
				<template v-slot:prepend>
					<q-icon name="svguse:icons/allIcons.svg#loop" size="2rem" color="grey-9" />
				</template>
			</q-input>
			<q-btn unelevated color="green" class="my-btn text-weight-bold" no-caps @click="dialogCardEmployeeModal = true">
				<q-icon name="svguse:icons/allIcons.svg#plus" size="0.75rem" class="q-mr-sm" />
					<span class="block">Создать сотрудника</span> 
         </q-btn>
		</div>
	</div>

	<q-dialog
		v-model="dialogCardEmployeeModal"
		class="dialog-full dialog-new-booking"
		position="right"
	>
		<!-- <CreateEmployeeModal /> -->
		<CardEmployeeModal/>
	</q-dialog>

</template>

<script setup>

	import { ref } from 'vue';
	// import CreateEmployeeModal from './personalmodal/CreateEmployeeModal.vue'; 
	import CardEmployeeModal from './personalmodal/CardEmployeeModal.vue';

	const searchPersonal = ref('');
	// const dialogCreateEmployeeModal = ref(false);
	const dialogCardEmployeeModal = ref(false);

</script>

<style lang="scss">

</style>