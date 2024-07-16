<template>

	<div class="cards-product__catalog catalog-cards-row column" style="padding-top: 0; padding-left: 3.125rem; padding-right: 3.125rem; padding-bottom: 1.25rem; max-height: 62.5rem; overflow: auto; flex-wrap: nowrap;">

		<div class="column q-pt-md q-pb-md">
			<div class="catalog-cards-row__top row items-center q-pt-md q-pb-md">
				<q-breadcrumbs active-color="white" style="font-size: 1.5rem;">
					<template v-slot:separator>
						<q-icon name="arrow_forward_ios" style="color: #5B89F8;" />
					</template>
					<q-breadcrumbs-el label="VR-EXTREME" style="color: #5B89F8;" />
					<q-breadcrumbs-el label="VR-Аттракционы" />
				</q-breadcrumbs>
			</div>
			<q-separator style="background-color: #5B89F84D;"></q-separator>
			<div class="catalog-cards-row__body q-pt-xl q-pb-xl">
				<div class="catalog-cards-row__tabl tabl-catalog-card">

					<!-- Table  -->
					<q-table
						class="my-sticky-dynamic table-promo table-products"
						style="max-height: 38.5rem"
						flat
						:rows="rows"
						:columns="columns"
						:loading="loading"
						row-key="index"
						virtual-scroll
						:virtual-scroll-item-size="48"
						:virtual-scroll-sticky-size-start="48"
						:pagination="pagination"
						:rows-per-page-options="[0]"
						@virtual-scroll="onScroll"
						hide-bottom
					>
						<template v-slot:body-cell-proimg="props">
							<q-td :props="props">
								<img width="100%" height="100%" :src="props.row.proimg" alt="Product Image" />
							</q-td>
						</template>

						<template v-slot:body-cell-proname="props"> 
							<q-td :props="props">
								{{ props.row.proname }}
								<q-btn flat round @click="editRow(props.row)">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.8667 7.46484H9.60001C9.03421 7.46484 8.49159 7.6896 8.09151 8.08968C7.69144 8.48976 7.46667 9.03238 7.46667 9.59818V22.3982C7.46667 22.964 7.69144 23.5066 8.09151 23.9067C8.49159 24.3067 9.03421 24.5315 9.60001 24.5315H22.4C22.9658 24.5315 23.5084 24.3067 23.9085 23.9067C24.3086 23.5066 24.5333 22.964 24.5333 22.3982V18.1315M16 15.9982L24.5333 7.46484M24.5333 7.46484V12.7982M24.5333 7.46484H19.2" stroke="#5B89F8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</q-btn>
							</q-td>
						</template>

						<template v-slot:body-cell-protype="props">
							<q-td :props="props">
								<svg class="q-mr-sm" width="24" height="24" viewBox="0 0 24 24" style="margin-bottom: -0.3438rem;" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0505 16.4444C17.5743 18.7813 14.9684 20.3333 12 20.3333C9.0316 20.3333 6.4257 18.7813 4.94951 16.4444H5.96825H18.0285H19.0505ZM19.3738 15.8858L18.8624 15L12.8323 4.55556L12.3226 3.6728C16.7755 3.84231 20.3333 7.50567 20.3333 12C20.3333 13.4033 19.9865 14.7256 19.3738 15.8858ZM11.674 3.67293C7.22272 3.84416 3.66667 7.5068 3.66667 12C3.66667 13.4021 4.01293 14.7233 4.62461 15.8828L5.1343 15L11.1644 4.55556L11.674 3.67293ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.8022 15L11.9984 6L17.1945 15H6.8022Z" fill="white"/>
								</svg>
								{{ props.row.protype }}
							</q-td>
						</template>

						<template v-slot:body-cell-proremove="props">
							<q-td :props="props">
								<q-btn class="row items-center" flat round @click="removeRow(props.row)">
									<span class="block" style="font-size: 1.125rem; color: #C7CCCC; text-transform: none;">Удалить</span>
									<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 0.25rem;">
										<path d="M10.625 4.87517V5.25017H14.375V4.87517C14.375 4.37789 14.1775 3.90098 13.8258 3.54934C13.625 3.37517 12.9973 3.37517 12.5 3.37517C12.0027 3.37517 11.3483 3.37517 11.1742 3.54934C10.8225 3.90098 10.625 4.37789 10.625 4.87517ZM9.125 5.25017V4.87517C9.125 3.98006 9.48058 3.12162 10.1135 2.48868C10.7803 2.25 11.6049 2.25 12.5 2.25C13.7018 2.25 14.6729 2.27528 14.8865 2.48868C15.5194 3.12162 15.875 3.98006 15.875 4.87517V5.25017H21.5C21.6989 5.25017 21.8897 5.32919 22.0303 5.46984C22.171 5.61049 22.25 5.80126 22.25 6.00017C22.25 6.19908 22.171 6.38985 22.0303 6.5305C21.8897 6.67115 21.6989 6.75017 21.5 6.75017H20.369L18.95 19.1762C18.8454 20.0913 18.4076 20.9359 17.7201 21.549C17.0326 22.162 16.1436 22.5006 15.2225 22.5002H9.7775C8.8564 22.5006 7.96735 22.162 7.27989 21.549C6.59243 20.9359 6.15464 20.0913 6.05 19.1762L4.631 6.75017H3.5C3.30109 6.75017 3.11032 6.67115 2.96967 6.5305C2.82902 6.38985 2.75 6.19908 2.75 6.00017C2.75 5.80126 2.82902 5.61049 2.96967 5.46984C3.11032 5.32919 3.30109 5.25017 3.5 5.25017H9.125ZM7.541 19.0052C7.60362 19.5541 7.86602 20.0608 8.27819 20.4287C8.69037 20.7966 9.2235 21 9.776 21.0002H15.2233C15.7757 21 16.3089 20.7966 16.7211 20.4287C17.1332 20.0608 17.3956 19.5541 17.4583 19.0052L18.86 6.75017H6.14075L7.541 19.0052ZM10.25 9.37517C10.4489 9.37517 10.6397 9.45419 10.7803 9.59484C10.921 9.73549 11 9.92626 11 10.1252V17.6252C11 17.8241 10.921 18.0148 10.7803 18.1555C10.6397 18.2962 10.4489 18.3752 10.25 18.3752C10.0511 18.3752 9.86032 18.2962 9.71967 18.1555C9.57902 18.0148 9.5 17.8241 9.5 17.6252V10.1252C9.5 9.92626 9.57902 9.73549 9.71967 9.59484C9.86032 9.45419 10.0511 9.37517 10.25 9.37517ZM15.5 10.1252C15.5 9.92626 15.421 9.73549 15.2803 9.59484C15.1397 9.45419 14.9489 9.37517 14.75 9.37517C14.5511 9.37517 14.3603 9.45419 14.2197 9.59484C14.079 9.73549 14 9.92626 14 10.1252V17.6252C14 17.8241 14.079 18.0148 14.2197 18.1555C14.3603 18.2962 14.5511 18.3752 14.75 18.3752C14.9489 18.3752 15.1397 18.2962 15.2803 18.1555C15.421 18.0148 15.5 17.8241 15.5 17.6252V10.1252Z" fill="#E23239"/>
									</svg>
								</q-btn>
							</q-td>
						</template>
						
					</q-table>
					
				</div>
			</div>
		</div>

		<div class="column q-pt-md q-pb-md">
			<div class="catalog-cards-row__top row items-center q-pt-md q-pb-md">
				<q-breadcrumbs active-color="white" style="font-size: 1.5rem;">
					<template v-slot:separator>
						<q-icon name="arrow_forward_ios" style="color: #5B89F8;" />
					</template>
					<q-breadcrumbs-el label="VR-EXTREME" style="color: #5B89F8;" />
					<q-breadcrumbs-el label="Автосимуляторы" />
				</q-breadcrumbs>
			</div>
			<q-separator style="background-color: #5B89F84D;"></q-separator>
			<div class="catalog-cards-row__body q-pt-xl q-pb-xl">
				<div class="catalog-cards-row__tabl tabl-catalog-card">

					<!-- Table  -->
					<q-table
						class="my-sticky-dynamic table-promo table-products"
						style="max-height: 38.5rem"
						flat
						:rows="rows"
						:columns="columns"
						:loading="loading"
						row-key="index"
						virtual-scroll
						:virtual-scroll-item-size="48"
						:virtual-scroll-sticky-size-start="48"
						:pagination="pagination"
						:rows-per-page-options="[0]"
						@virtual-scroll="onScroll"
						hide-bottom
					>
						<template v-slot:body-cell-proimg="props">
							<q-td :props="props">
								<img width="100%" height="100%" :src="props.row.proimg" alt="Product Image" />
							</q-td>
						</template>

						<template v-slot:body-cell-proname="props">
							<q-td :props="props">
								{{ props.row.proname }}
								<q-btn flat round @click="editRow(props.row)" >
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.8667 7.46484H9.60001C9.03421 7.46484 8.49159 7.6896 8.09151 8.08968C7.69144 8.48976 7.46667 9.03238 7.46667 9.59818V22.3982C7.46667 22.964 7.69144 23.5066 8.09151 23.9067C8.49159 24.3067 9.03421 24.5315 9.60001 24.5315H22.4C22.9658 24.5315 23.5084 24.3067 23.9085 23.9067C24.3086 23.5066 24.5333 22.964 24.5333 22.3982V18.1315M16 15.9982L24.5333 7.46484M24.5333 7.46484V12.7982M24.5333 7.46484H19.2" stroke="#5B89F8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</q-btn>
							</q-td>
						</template>

						<template v-slot:body-cell-protype="props">
							<q-td :props="props">
								<svg class="q-mr-sm" width="24" height="24" viewBox="0 0 24 24" style="margin-bottom: -0.3438rem;" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0505 16.4444C17.5743 18.7813 14.9684 20.3333 12 20.3333C9.0316 20.3333 6.4257 18.7813 4.94951 16.4444H5.96825H18.0285H19.0505ZM19.3738 15.8858L18.8624 15L12.8323 4.55556L12.3226 3.6728C16.7755 3.84231 20.3333 7.50567 20.3333 12C20.3333 13.4033 19.9865 14.7256 19.3738 15.8858ZM11.674 3.67293C7.22272 3.84416 3.66667 7.5068 3.66667 12C3.66667 13.4021 4.01293 14.7233 4.62461 15.8828L5.1343 15L11.1644 4.55556L11.674 3.67293ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.8022 15L11.9984 6L17.1945 15H6.8022Z" fill="white"/>
								</svg>
								{{ props.row.protype }}
							</q-td>
						</template>

						<template v-slot:body-cell-proremove="props">
							<q-td :props="props">
								<q-btn class="row items-center" flat round @click="removeRow(props.row)">
									<span class="block" style="font-size: 1.125rem; color: #C7CCCC; text-transform: none;">Удалить</span>
									<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 0.25rem;">
										<path d="M10.625 4.87517V5.25017H14.375V4.87517C14.375 4.37789 14.1775 3.90098 13.8258 3.54934C13.625 3.37517 12.9973 3.37517 12.5 3.37517C12.0027 3.37517 11.3483 3.37517 11.1742 3.54934C10.8225 3.90098 10.625 4.37789 10.625 4.87517ZM9.125 5.25017V4.87517C9.125 3.98006 9.48058 3.12162 10.1135 2.48868C10.7803 2.25 11.6049 2.25 12.5 2.25C13.7018 2.25 14.6729 2.27528 14.8865 2.48868C15.5194 3.12162 15.875 3.98006 15.875 4.87517V5.25017H21.5C21.6989 5.25017 21.8897 5.32919 22.0303 5.46984C22.171 5.61049 22.25 5.80126 22.25 6.00017C22.25 6.19908 22.171 6.38985 22.0303 6.5305C21.8897 6.67115 21.6989 6.75017 21.5 6.75017H20.369L18.95 19.1762C18.8454 20.0913 18.4076 20.9359 17.7201 21.549C17.0326 22.162 16.1436 22.5006 15.2225 22.5002H9.7775C8.8564 22.5006 7.96735 22.162 7.27989 21.549C6.59243 20.9359 6.15464 20.0913 6.05 19.1762L4.631 6.75017H3.5C3.30109 6.75017 3.11032 6.67115 2.96967 6.5305C2.82902 6.38985 2.75 6.19908 2.75 6.00017C2.75 5.80126 2.82902 5.61049 2.96967 5.46984C3.11032 5.32919 3.30109 5.25017 3.5 5.25017H9.125ZM7.541 19.0052C7.60362 19.5541 7.86602 20.0608 8.27819 20.4287C8.69037 20.7966 9.2235 21 9.776 21.0002H15.2233C15.7757 21 16.3089 20.7966 16.7211 20.4287C17.1332 20.0608 17.3956 19.5541 17.4583 19.0052L18.86 6.75017H6.14075L7.541 19.0052ZM10.25 9.37517C10.4489 9.37517 10.6397 9.45419 10.7803 9.59484C10.921 9.73549 11 9.92626 11 10.1252V17.6252C11 17.8241 10.921 18.0148 10.7803 18.1555C10.6397 18.2962 10.4489 18.3752 10.25 18.3752C10.0511 18.3752 9.86032 18.2962 9.71967 18.1555C9.57902 18.0148 9.5 17.8241 9.5 17.6252V10.1252C9.5 9.92626 9.57902 9.73549 9.71967 9.59484C9.86032 9.45419 10.0511 9.37517 10.25 9.37517ZM15.5 10.1252C15.5 9.92626 15.421 9.73549 15.2803 9.59484C15.1397 9.45419 14.9489 9.37517 14.75 9.37517C14.5511 9.37517 14.3603 9.45419 14.2197 9.59484C14.079 9.73549 14 9.92626 14 10.1252V17.6252C14 17.8241 14.079 18.0148 14.2197 18.1555C14.3603 18.2962 14.5511 18.3752 14.75 18.3752C14.9489 18.3752 15.1397 18.2962 15.2803 18.1555C15.421 18.0148 15.5 17.8241 15.5 17.6252V10.1252Z" fill="#E23239"/>
									</svg>
								</q-btn>
							</q-td>
						</template>
						
					</q-table>

				</div>
			</div>
		</div>

	</div> 

</template>

<script setup>
import { ref, computed } from 'vue';

// Путь к изображению из публичной папки
const productImage = '/icons/img-table.svg';

const rows = ref([
  // Используем URL изображения в данных
  { proimg: productImage, proname: 'VR Super-Agent', protype: 'УСЛУГА', proprice: '9 000 ₽', proremove: 'Удалить' },
  { proimg: productImage, proname: 'Stereolife Twister', protype: 'УСЛУГА', proprice: '9 000 ₽', proremove: 'Удалить' },
	{ proimg: productImage, proname: 'VR Eggs', protype: 'УСЛУГА', proprice: '9 000 ₽', proremove: 'Удалить' },
	{ proimg: productImage, proname: 'Stereolife Emotion', protype: 'УСЛУГА', proprice: '9 000 ₽', proremove: 'Удалить' },
	{ proimg: productImage, proname: 'VR Helicopter', protype: 'УСЛУГА', proprice: '9 000 ₽', proremove: 'Удалить' },
	{ proimg: productImage, proname: 'Futurift', protype: 'ТОВАР', proprice: '9 000 ₽', proremove: 'Удалить' },
	{ proimg: productImage, proname: 'Moto VR', protype: 'ТОВАР', proprice: '9 000 ₽', proremove: 'Удалить' },
	{ proimg: productImage, proname: 'Infinity VR', protype: 'ТОВАР', proprice: '9 000 ₽', proremove: 'Удалить' },
	{ proimg: productImage, proname: 'Galaxy Rift', protype: 'ТОВАР', proprice: '9 000 ₽', proremove: 'Удалить' },
]);

const columns = ref([
  { name: 'proimg', align: 'right', label: '', field: 'proimg' },
  { name: 'proname', align: 'right', label: 'Наименование', field: 'proname', sortable: true },
  { name: 'protype', align: 'right', label: 'Тип', field: 'protype', sortable: true },
  { name: 'proprice', align: 'right', label: 'Цена', field: 'proprice', sortable: true },
  { name: 'proremove', align: 'right', label: '', field: 'proremove' },
]);

const loading = ref(false);
const pagination = ref({ page: 1, rowsPerPage: 13 });

const totalRows = computed(() => rows.value.length);

const onScroll = () => {
console.log('Virtual scroll event');
};

// Функция для удаления строки
const removeRow = (row) => {
  const index = rows.value.indexOf(row);
  if (index > -1) {
    rows.value.splice(index, 1);
  }
}
</script>

<style>

.q-breadcrumbs__separator {
	margin-top: 0;
}

.table-products .q-table tbody tr td:nth-child(1) {
    text-align: center;
    width: 6rem;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.3181rem;
}
.table-products .q-table__top, .q-table__bottom, thead tr:first-child th {
    background-color: inherit;
}
.table-products .q-table thead tr th:nth-child(2) .q-table__sort-icon {
    transform: translateY(0rem);
}
.table-products .q-table tbody tr td:nth-child(2) {
    width: 21rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #252e42;
    border-radius: 0.375rem;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3181rem;
    border: 0.125rem solid #1C1E22;
}
.table-products .q-btn:hover > .q-focus-helper {
    opacity: 0 !important;
}
</style>