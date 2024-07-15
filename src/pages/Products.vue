<template>

	<q-layout>
		<q-page-container class="my-page-container">
			<q-page class="page-promo" style="color: #fff; padding: 4.0625rem 0 4.0625rem 2rem;">

				<div class="products row">

					<!-- SideBar Naigation  -->
					<ProductsSideBar/>
					
					<!-- Body -->
					<div class="products__cards cards-product col" style="padding: 1.625rem 2rem 2rem 2rem; background-color: #1A1B1D;">

						<!-- Top Panel  -->
						<div class="cards-product__nav nav-cards-product row items-center justify-between" style="margin-bottom: 1.5rem;">
							<div class="nav-cards-product__actions row items-center col-auto q-mr-md q-mb-md">
								<div class="" style="font-size: 1.5rem; margin-right: 2rem;">VR-Аттракционы</div>
								<q-tabs class="text-primary my-tabs no-ripple no-hover tabs-display q-ml-lg bg-dark" v-model="tab">
									<q-tab name="bar">
										<q-icon name="svguse:icons/allIcons.svg#nav-tab-bar" size="1.4063rem" />
									</q-tab>
									<q-tab name="list">
										<q-icon name="svguse:icons/allIcons.svg#nav-tab-list" size="1.875rem" />
									</q-tab>
								</q-tabs>
							</div>
							<div class="nav-cards-product__buttons col-auto row items-center">
								<q-btn unelevated color="blue-1" class="my-btn text-weight-bold q-mb-sm" no-caps @click="dialogProductsModal = true" style="margin-right: 2.5rem;">
									<q-icon name="svguse:icons/allIcons.svg#plus" size="0.75rem" class="q-mr-sm" />
									<span class="block">Новый товар / услуга</span>
          					</q-btn>
								<q-input
									color="grey-9"
									standout
									type="text"
									class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-mb-sm"
									placeholder="Название или артикул"
									style="min-width: 22rem;"
								>
									<template v-slot:prepend>
										<q-icon name="svguse:icons/allIcons.svg#loop" size="2rem" color="grey-9" />
									</template>
								</q-input>
							</div>
						</div>

						<!-- Варианты вывода карточек  -->
						<ProductsCardsTable v-if="tab === 'bar'"></ProductsCardsTable>
						<ProductsCardRow v-if="tab === 'list'"></ProductsCardRow>

					</div>
				</div>

				<!-- Окно  -->
				<q-dialog
					v-model="dialogProductsModal"
					class="dialog-full dialog-new-booking"
					position="right">
					<ProductsModal />
				</q-dialog>

			</q-page>
		</q-page-container> 
	</q-layout>

</template>

<script>
import { ref } from 'vue';
import ProductsCardsTable from 'src/components/ProductsCardsTable.vue';
import ProductsCardRow from 'src/components/ProductsCardRow.vue';
import ProductsModal from 'src/components/ProductsModal.vue'; 
import ProductsSideBar from 'src/components/products/ProductsSideBar.vue';

export default {
  components: {
    ProductsCardsTable,
    ProductsCardRow,
    ProductsModal,
	 ProductsSideBar,
  },
  setup() {
    const tab = ref('bar');
    const shape = ref('line');
    const show = ref(false);
    const dialogProductsModal = ref(false);
    const dialogNewCategoryModal = ref(false);
    const dialogNewSubcategoryModal = ref(false);
    const isActive = ref(false);

    const handleShow = () => {
      isActive.value = true;
    };

    const handleHide = () => {
      isActive.value = false;
    };

    return {
      tab,
      shape,
      show,
      dialogProductsModal,
      dialogNewCategoryModal,
      dialogNewSubcategoryModal,
      isActive,
      handleShow,
      handleHide
    };
  }
}
</script>

<style lang="scss">

.products__nav .q-expansion-item__container {
	width: 100%;
}
.products__nav .q-expansion-item  .q-icon {
	color: #5B89F8;
}
.products-radio {
	.q-radio__inner {
		display: none;
	}
}
.products__nav .q-checkbox__bg {
   border: none;
	 background: #5B89F84D;
	}
	.q-expansion-item {
		border-radius: 0.375rem;
		overflow: hidden;
	}
	.q-card.body-box-promo__checkbox {
		padding-bottom: 0.9375rem !important;
	}
	.q-expansion-item.active {
		background-color: #25272d;
		.q-card.body-box-promo__checkbox {
			background-color: #25272d !important;
		}
	}
	.products-radio {
		.q-btn {
			font-size: 1.125rem;
			font-weight: 500;
			line-height: 1.3181rem;
			color: #ADC4FC;
			margin: 0;
			width: 100%;
			padding: 0 1.875rem;
		}
		.q-btn__content {
		text-align: left;
    justify-content: start;
	}
	}
	.products-radio .q-btn:hover {
		color: #5B89F8;
		background-color: #282D37;
	}
	.products-radio .custom-subcat-btn .q-btn__content  {
		justify-content: space-between;
    width: 100%;
	}
</style>