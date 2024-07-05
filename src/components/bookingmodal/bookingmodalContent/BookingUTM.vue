<template>

	<div class="content-booking__body body-content-booking row q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="row col-8">

			<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="id1"
				label="Источник кампании (utm source):" style="min-width: 400px; margin: 0 40px 40px 0; border-radius: 0.375rem; overflow: hidden;"
			/>
			<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="id2"
				label="Тип трафика (utm medium):" style="min-width: 400px; margin: 0 40px 40px 0; border-radius: 0.375rem; overflow: hidden;"
			/>
			<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="id3"
				label="Название кампании (utm campaign):" style="min-width: 400px; margin: 0 40px 40px 0; border-radius: 0.375rem; overflow: hidden;"
			/>
			<q-input class="q-mb-lg" clearable clear-icon="close" filled v-model="id4"
				label="Идентификатор объявления (utm content):" style="min-width: 400px; margin: 0 40px 40px 0; border-radius: 0.375rem; overflow: hidden;"
			/>
				
		</div>

		<!-- Корзина пуста  -->
		<div class="row items-center justify-center" style="width: 100%; height: 100%;">
			<div class="row items-center justify-center text-h6 text-grey-10">UTM-метка отсутствует
				<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
					<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#utm"></use></svg>
				</i> 
			</div>
		</div>

	</div> 

</template>

<script>

</script>

<style>

</style>