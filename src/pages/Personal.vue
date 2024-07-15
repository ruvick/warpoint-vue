<template>

	<q-layout>
		<q-page-container class="my-page-container">
			<q-page class="personal" style="color: #fff; padding: 0 2rem 4.0625rem 8.5rem;">

				<!-- Top panel  -->
				<div class="row q-mb-xl" style="width: 100%;">
					<div class="col row">
						<div class="text-h6">Список сотрудников</div>
					</div>
					<div class="col-auto row items-center">
						<!-- <q-select
							filled
							v-model="searchPersonal"
							:options="remainsOptions"
							label="Телефон или имя сотрудника"
							style="width: 360px; border-radius: 0.375rem; overflow: hidden;"
						/> -->
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
						<q-btn unelevated color="green" class="my-btn text-weight-bold" no-caps @click="dialogPromoModal = true">
							<q-icon name="svguse:icons/allIcons.svg#plus" size="0.75rem" class="q-mr-sm" />
							<span class="block">Создать сотрудника</span>
          			</q-btn>
					</div>
				</div>

			</q-page>
		</q-page-container>
	</q-layout>

</template>

<script setup>

	import { ref } from 'vue';

	const searchPersonal = ref('');

</script>

<style lang="scss">

</style>