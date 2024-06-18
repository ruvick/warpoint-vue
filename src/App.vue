<template>
  <router-view />
  <Certificates/>
</template>

<!-- <template>
	<q-layout>
	  <q-page-container class="my-page-container">

		 <router-view />

		 <div class="q-pa-md row justify-center items-center" style="min-height: 100vh;">

			<div class="text" style="color:#fff; font-size: 26px;">test</div>

			<MainLayout/>
			
		 </div>

	  </q-page-container>
	</q-layout>
 </template> -->

<script setup>
// import Certificates from 'pages/Certificates.vue'
// import MainLayout from 'src/layouts/MainLayout.vue'
defineOptions({
  name: 'App'
});
</script> 
