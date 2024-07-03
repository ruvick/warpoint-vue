<template>

<q-layout>
	<q-page-container class="my-page-container">
		<q-page class="page-promo" style="color: #fff; padding: 4.0625rem 2rem 4.0625rem 8.5rem;">

				<!-- Top panel  -->
				<div class="row q-mb-xl">
					<div class="col">
						<div class="text-h6">Список промокодов</div>
					</div>
					<div class="col-auto">
						<q-btn unelevated color="blue-1" class="my-btn q-mr-md text-weight-bold" no-caps @click="dialogPromoModal = true">
							<q-icon name="svguse:icons/allIcons.svg#plus" size="12px" class="q-mr-sm" />
							<span class="block">Создать промокод</span>
          			</q-btn>
					</div>
				</div>

				<!-- Table Список промокодов -->
				 <ListPromoCodes/>

				<!-- Окно Промокода  -->
				<q-dialog
					v-model="dialogPromoModal"
					class="dialog-full dialog-new-booking"
					position="right"
				>
					<PromoModal />
				</q-dialog>
			
		</q-page>
	</q-page-container>
</q-layout>

</template>

<script setup>
import { ref } from 'vue';

// Подключение компонентов
import PromoModal from 'src/components/PromoModal.vue';
import ListPromoCodes from 'src/components/promocodes/ListPromoCodes.vue';

const dialogPromoModal = ref(false);

</script>

<style lang="scss">

	.table-promo {
		.status-completed {
			&::before{
				content:''; 
				top: 50%;
				transform: translateY(-50%);
				width: 8px;
				height: 8px; 
				background-color: #E23239;
				border-radius: 50%;
			}
		}
		.status-active {
			&::before{
				content:''; 
				top: 50%;
				transform: translateY(-50%);
				width: 8px;
				height: 8px; 
				background-color: #44A248;
				border-radius: 50%;
			}
		}
		.additional-text {
			color: #616161;
		}
		.q-table thead tr th:nth-child(2) {
    		width: auto;
    		align-items: center;
		}
		.q-table thead tr th:nth-child(3) {
			padding-left: 1rem;
		}
		.q-table tbody tr td:nth-child(1) {
    		width: auto;
		}
		.q-table tbody td:nth-child(3) {
    		padding-left: 1rem;
		}
		.q-table tbody tr td:nth-child(2) {
			width: auto;
			background: inherit;
			border-radius: none;
			font-size: 1.125rem;
			font-weight: 700;
			line-height: 1.3181rem;
			border: none;
		}
		.q-table thead tr th .q-table__sort-icon {
    		height: 40px;
		}
		.q-table thead tr th:nth-child(1),
		.q-table thead tr th:nth-child(3),
		.q-table thead tr th:nth-child(5) {
    		white-space: nowrap;
		}
		.q-table thead tr th:nth-child(4) .q-table__sort-icon,
		.q-table thead tr th:nth-child(1) .q-table__sort-icon,
		.q-table thead tr th:nth-child(3) .q-table__sort-icon,
		.q-table thead tr th:nth-child(5) .q-table__sort-icon {
    		height: auto;
		}
		.q-table thead tr th:nth-child(1) {
    		text-align: left;
		}
		.q-table tbody tr td:nth-child(1) {
    		width: 200px;
    		text-align: left;
		}
		.q-table tbody tr td:nth-child(10) {
			text-align: right;
    		display: flex;
    		justify-content: flex-end;
		}
		.q-table__control span {
    		color: #fff;
		}
		.q-table__control-name {
			color: #9E9E9E !important;
		}
	}
	.q-btn-management {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		overflow: hidden;
		background-color: #282D37;
		border-radius: 8px;
		margin-left: auto;
		.q-btn__content {
			flex-wrap: nowrap;
    		gap: 5px;
				span {
				width: 5px;
				flex: 0 0 5px;
				height: 5px;
				border-radius: 50%;
				background: #5B89F8;
			}
		}
	}
</style>