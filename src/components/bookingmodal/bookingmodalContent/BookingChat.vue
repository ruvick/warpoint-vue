<template>

	<div class="content-booking__body body-content-booking row q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="row items-center justify-center" style="width: 100%; height: 100%;">
			<div class="row items-center justify-center text-h6 text-grey-10">Комментариев пока нет
				<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
					<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#chat"></use></svg>
				</i> 
			</div>
		</div>

	</div> 

	<!-- Content Booking Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-xs q-pl-md">
		<q-input
			filled
			type="textarea"
			v-model="text"
			label="Напишите комментарий"
			counter
			maxlength="500"
			autogrow
			class="booking-textarea"
		/>
	</div>

</template>

<script>

</script>

<style>

</style>