<template>

	<div class="body-booking-modal__navbar navbar-booking-modal col-2 column items-start">
		 <!-- Navbar Header -->
		 <div class="navbar-booking-modal__header header-navbar-booking" style="flex: 1 1 auto; width: 100%;">
		  <q-btn-toggle
			  v-model="localModel"
			  toggle-color="primary"
			  flat
			  class="header-navbar-booking__buttons column items-start"
			  :options="options" 
		  />
		 </div>
	
		 <!-- Navbar Footer -->
		<!-- <div class="column"></div> -->

	</div>

</template>

<script setup>

	import { ref, watch, toRefs } from 'vue';
		
	const props = defineProps({
		modelValue: {
			type: String,
			required: true
		},
		options: {
			type: Array,
			required: true
		}
	});
		
	const emit = defineEmits(['update:modelValue']);
		
	const { modelValue, options } = toRefs(props);
	const localModel = ref(modelValue.value);
		
	watch(localModel, (newValue) => {
		emit('update:modelValue', newValue);
	});

</script>

<style lang="scss">
		.header-navbar-booking__buttons {
			width: 100%;
		}
		.header-navbar-booking__buttons .q-btn-item {
			width: 100%;
			align-self: start;
			color: #C7CCCC;
			position: relative;
		}
		.header-navbar-booking__buttons .q-btn-item.red {
			&::before {
				content:''; 
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 10px;
				width: 0.5rem;
				height: 0.5rem; 
				background-color: #E23239;
				border-radius: 50%;
			}
		}
		.header-navbar-booking__buttons .q-btn-item.green {
			&::before {
				content:''; 
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0.625rem;
				width: 0.5rem;
				height: 0.5rem; 
				background-color: #44A248;
				border-radius: 50%;
			}
		}
		.header-navbar-booking__buttons .my-custom-toggle {
			border: 0.0625rem solid #027be3;
		}
		.header-navbar-booking__buttons .text-center {
			text-align: left;
			justify-content: start;
		}
		.header-navbar-booking__buttons .text-center span {
			font-size: 1.25rem;
			font-weight: 500;
			line-height: 1.465rem;
			padding: 0.5rem 0.8125rem;
			width: 100%;
		}
		.header-navbar-booking__buttons .q-btn-item:hover .q-focus-helper {
			opacity: 0;
		}
</style>