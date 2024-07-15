<template>

	<!-- <div class="col" style="flex: 0 1 20%; padding: 1rem 0.5rem;"> -->
		 <q-card class="catalog-cards__item my-card column item-cards q-pa-md" style="height: 100%; background-color: #212326; border-radius: 0.5rem; overflow: hidden;">
		  <div class="item-cards__header row items-center justify-between">
			  <div class="text-h6 text-white" v-if="title"> {{ title }} </div>
			  <q-btn unelevated class="q-ml-sm" style="padding: 0;">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.8667 7.46484H9.60001C9.03421 7.46484 8.49159 7.6896 8.09151 8.08968C7.69144 8.48976 7.46667 9.03238 7.46667 9.59818V22.3982C7.46667 22.964 7.69144 23.5066 8.09151 23.9067C8.49159 24.3067 9.03421 24.5315 9.60001 24.5315H22.4C22.9658 24.5315 23.5084 24.3067 23.9085 23.9067C24.3086 23.5066 24.5333 22.964 24.5333 22.3982V18.1315M16 15.9982L24.5333 7.46484M24.5333 7.46484V12.7982M24.5333 7.46484H19.2" stroke="#5B89F8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			  </q-btn>
		  </div>
		  <div class="item-cards__body body-item-cards" style="padding: 0.5rem 0 1.5rem 0; flex: 1 1 auto;">
			  <div class="body-item-cards__price text-h6 text-white q-mb-sm" v-if="price"> {{ price }} ₽</div>
			  <q-img
				v-if="imageSrc"
				:src="imageSrc"
				:alt="imageAlt"
				ratio="16/9"
				style="width: 100%; height: 12.5rem; background-color: #2c2e31; border-radius: 0.5rem;"
			  />
		  </div>
		  <div class="item-cards__footer row items-center" v-if="category">
			  <svg class="q-mr-sm" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0505 16.4444C17.5743 18.7813 14.9684 20.3333 12 20.3333C9.0316 20.3333 6.4257 18.7813 4.94951 16.4444H5.96825H18.0285H19.0505ZM19.3738 15.8858L18.8624 15L12.8323 4.55556L12.3226 3.6728C16.7755 3.84231 20.3333 7.50567 20.3333 12C20.3333 13.4033 19.9865 14.7256 19.3738 15.8858ZM11.674 3.67293C7.22272 3.84416 3.66667 7.5068 3.66667 12C3.66667 13.4021 4.01293 14.7233 4.62461 15.8828L5.1343 15L11.1644 4.55556L11.674 3.67293ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.8022 15L11.9984 6L17.1945 15H6.8022Z" fill="white"/>
			  </svg>
			  <div class="text-h6 text-white" caps> {{ category }} </div>
		  </div>
		 </q-card>
	<!-- </div> -->

</template> 
	
<script setup>

	defineProps({
		title: String,
		price: Number,
		category: String,
		imageSrc: String,
		imageAlt: String,
		link: String,
	});

</script>
	

<style>



</style>