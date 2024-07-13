<template>
	
	<div class="info-body-registration__list-products list-products-registration column items-start q-pb-lg" style="height: 100%;">
			<!-- Body -->
			<div class="list-products-registration__main" style="flex: 1 1 auto; width: 100%;">
			 <div class="row items-center justify-center text-h6 text-grey-10 q-pt-xl q-pb-xl">
					Список товаров к оприходованию
					<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 1.5rem;">
					 <svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#cube"></use></svg>
					</i>
			 </div>
	
			 <div class="col">
					<q-table
					 class="my-sticky-dynamic list-products-table"
					 style="height: 700px"
					 flat
					 :rows="products"
					 :columns="columns"
					 row-key="title"
					>
					 <template v-slot:body-cell-index="props">
							<q-td :props="props">
							 {{ props.pageIndex + 1 }}
							</q-td>
					 </template>
					 <template v-slot:body-cell-name="props">
							<q-td :props="props">
							 {{ props.row.title }}
							</q-td>
					 </template>
					 <template v-slot:body-cell-management="props">
							<q-td :props="props">
							 <q-btn class="no-hover" no-caps no-hover flat round dense @click="removeProduct(props.row.title)" style="color: #5B89F8;">
									<q-icon name="svguse:icons/allIcons.svg#cart" size="20px" />
							 </q-btn>
							</q-td>
					 </template>
					 <template v-slot:body-cell-quantity="props">
							<q-td :props="props" :class="props.row['quantity-class']">
							 <div class="quantity row items-center">
									<q-btn icon="remove" @click="decreaseQuantity(props.row)" />
									<q-input v-model="props.row.quantity" type="number" class="" />
									<q-btn icon="add" @click="increaseQuantity(props.row)" />
							 </div>
							</q-td>
					 </template>
					 <template v-slot:bottom>
							<div class="q-table__control">
							 <span class="q-mr-xl" style="font-size: 18px; color: #fff;">
									<span class="q-mr-md" style="font-size: 18px; color: #9E9E9E !important;">Итого (кол-во):</span>
									<span class="remais">{{ formattedTotalRemains }}</span>
							 </span>
							 <span style="font-size: 18px; color: #fff;">
									<span class="q-mr-md" style="font-size: 18px; color: #9E9E9E !important;">Итого (себестоимость):</span>
									<span class="costPriceTotal">{{ formattedTotalCostPrice }} ₽</span>
							 </span>
							</div>
					 </template>
					</q-table>
			 </div>
			</div>
	
			<!-- Footer -->
			<div class="list-products-registration__footer row justify-between" style="width: 100%;">
			 <div class="col-auto">
					<q-btn class="q-btn-no text-h6 no-hover text-grey-10" outline flat label="Очистить список" type="reset" primary @click="clearList" />
			 </div>
			 <div class="col-auto">
					<q-btn unelevated color="blue-1" class="my-btn text-weight-bold">
					 <span class="block">Далее</span>
					</q-btn>
			 </div>
			</div>
	</div>

</template>
	
<script setup>

	import { defineProps, defineEmits, computed } from 'vue';
	
	const props = defineProps({
		products: Array,
	});
	
	const emit = defineEmits(['remove-product', 'clear-list']);
	
	const columns = [
		{ name: 'index', label: '№', field: 'index' },
		{ name: 'name', align: 'right', label: 'Наименование', field: 'name' },
		{ name: 'quantity', align: 'right', label: 'Кол-во', field: 'quantity' },
		{ name: 'costPrice', align: 'right', label: 'Себестоимость (шт.)', field: 'costPrice' },
		{ name: 'management', align: 'right', label: '', field: 'management' },
	];
	
	const totalRemains = computed(() => {
		return props.products.reduce((total, row) => total + row.quantity, 0);
	});
	
	const formattedTotalRemains = computed(() => {
		return totalRemains.value.toLocaleString();
	});
	
	const totalCostPrice = computed(() => {
		return props.products.reduce((total, row) => {
				const amount = parseInt(row.costPrice.replace(/\s/g, '').replace('₽', ''), 10);
				return !isNaN(amount) ? total + amount : total;
		}, 0);
	});
	
	const formattedTotalCostPrice = computed(() => {
		return totalCostPrice.value.toLocaleString();
	});
	
	function removeProduct(title) {
		emit('remove-product', title);
	}
	
	function clearList() {
		emit('clear-list');
	}
	
	function increaseQuantity(row) {
		row.quantity++;
		row.costPrice = (row.quantity * row.unitPrice).toLocaleString() + ' ₽';
	}
	
	function decreaseQuantity(row) {
		if (row.quantity > 0) {
				row.quantity--;
				row.costPrice = (row.quantity * row.unitPrice).toLocaleString() + ' ₽';
		}
	}

</script>
	
<style lang="scss">

	.list-products-table {
		.q-table__middle {
				overflow-x: hidden;
		}
		.q-table tbody tr td:nth-child(2) {
				width: 13.5rem;
				background: inherit;
				border-radius: 0.375rem;
				font-size: 1.125rem;
				font-weight: 700;
				line-height: 1.3181rem;
				border: 0.125rem solid #1C1E22;
		}
		.q-table tbody tr td:nth-child(4) {
				width: 104px;
				background: #252e42;
				border-radius: 0.375rem;
				font-size: 1.125rem;
				font-weight: 700;
				line-height: 1.3181rem;
				border: 0.125rem solid #1C1E22;
				display: flex;
				align-items: center;
				margin-top: 8px;
		}
		.q-table thead tr th:nth-child(3) {
				padding-left: 1rem;
		}
		.q-table thead tr th:nth-child(4) {
				text-align: center;
		}
		.q-table tbody td:nth-child(3) {
				padding-left: 1rem;
		}
	}
	
	.quantity {
		width: 112px !important;
		height: 46px;
		flex-wrap: nowrap;
		overflow: hidden;
		background: #5B89F826;
		padding: 0 10px;
		.q-btn {
				width: 24px;
				height: 24px;
				flex: 0 0 24px;
				padding: 0;
				border-radius: 50%;
				min-height: auto;
				background-color: #25272D;
				.q-icon, .q-spinner {
				font-size: 16px;
				color: #5B89F8;
				}
		}
		.q-btn:before {
				content: "";
				display: block;
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				border-radius: inherit;
				box-shadow: none;
		}
		.q-field__native {
				text-align: center;
		}
	}

</style>