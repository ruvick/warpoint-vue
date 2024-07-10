<template>
	<!-- Wrapper -->
	<div class="row column" style="padding: 15px 56px 40px 40px;">
		 <!-- Header -->
		 <div class="col">
		  <div class="text-h6 text-white"> {{ title }} </div>
		 </div>
	
		 <!-- Body -->
		 <div class="col" style="padding: 40px 0;">
		  <div class="row justify-between" style="margin-bottom: 64px;">
			  <div class="col-4">
				<q-select
					class=""
					filled
					v-model="selectedReceiptBox"
					:options="receiptBox"
					label="Касса получения"
					style="width: 100%; border-radius: 0.375rem; overflow: hidden;"
				/>
				<q-input
					class="q-mt-lg"
					type="number"
					clearable
					clear-icon="close"
					filled
					v-model="summa"
					label="Сумма"
					style="width: 100%; border-radius: 0.25rem; overflow: hidden; background-color: #25272D;"
				/>
			  </div>
			  <div class="col-6">
				<q-input
					filled
					type="textarea"
					v-model="text"
					label="Комментарий"
					counter
					maxlength="500"
					autogrow
					class="operation-textarea"
					style="height: 100%; max-height: 168px; padding: 0; background-color: #25272D;"
				/>
			  </div>
		  </div>
		  <div class="row">
			  <q-btn unelevated color="green" class="my-btn text-weight-bold">
				<span class="block">Провести</span>
			  </q-btn>
		  </div>
		 </div>
	</div>

</template>
	
<script setup>

	import { ref } from 'vue';

	import { defineProps } from 'vue';

	const props = defineProps({
	title: {
		type: String,
		required: true
	}
	});
	
	const summa = ref('');
	const text = ref('');
	const selectedReceiptBox = ref(null);

	const receiptBox = ref([
	{ label: 'Основная касса', value: 'option1' },
	{ label: 'Расчетный счет', value: 'option2' },
	{ label: 'Касса для предоплат', value: 'option3' }
	]);

	</script>
	
	<style lang="scss">

	.operation-textarea {
		.q-field__bottom {
			display: none;
		}
		.q-field__control {
			height: 100%;
			max-height: 168px;
		}
	}

</style>