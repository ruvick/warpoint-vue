<template>

	<div class="content-booking__body body-content-booking row q-pt-xl" style="flex: 1 1 auto; color: #fff;">

		<div class="column col">

			<div class="row col justify-between items-center">
				<q-btn unelevated color="green" class="my-btn text-weight-bold">
					<span class="block">Добавить игрока</span>
				</q-btn>
				<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
					<span class="block">Добавить гостя</span>
				</q-btn>
			</div>

			<!-- Игроки 1 -->
			<div class="row items-center justify-center" style="width: 100%; height: 100%;">
				<div class="row items-center justify-center text-h6 text-grey-10">Ни один игрок ещё не зарегистрирован
					<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
						<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#person"></use></svg>
					</i>
				</div>

			<!-- Игроки 2 -->
				<div class="row items-center justify-center text-h6 text-grey-10" style="display: none;">Зарегистрированы 0 / 7
					<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
						<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#person"></use></svg>
					</i>
				</div>
			</div>

			</div>

	</div>

	<!-- Content Booking Footer  -->
	<div class="content-booking__footer footer-content-booking row q-pt-xs q-pr-md q-pb-xs q-pl-md">
		<div class="footer-content-booking__inner row justify-center items-center" style="width: 100%; gap: 80px;">

			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Начать регистрацию</span>
			</q-btn>

			<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Отмена" primary/>
			 
			<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
				<span class="block">Сохранить</span>
			</q-btn>

		</div>
	</div>

</template>