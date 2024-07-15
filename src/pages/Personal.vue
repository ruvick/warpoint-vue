<template>

	<q-layout>
		<q-page-container class="my-page-container">
			<q-page class="personal" style="color: #fff; padding: 0 2rem 4.0625rem 8.5rem;">
				<PersonalTopPanel/>
				<TableListPersonal/>
			</q-page>
		</q-page-container>
	</q-layout>

</template>

<script setup>

	import { ref } from 'vue';
	import PersonalTopPanel from 'src/components/personal/PersonalTopPanel.vue'
	import TableListPersonal from 'src/components/personal/TableListPersonal.vue'

</script>

<style lang="scss">

</style>