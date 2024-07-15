
<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header class="bg-primary text-white my-header">
      <q-toolbar></q-toolbar>
    </q-header> -->

    <q-drawer show-if-above side="left" class="my-left-drawer bg-dark" width="104px">
      <div class="logo">
        <q-icon :name="`svguse:icons/allIcons.svg#drawer-logo`" size="31.2px" color="grey-10" />
      </div>
      <q-list class="list-links">
        <q-item
          clickable
          v-ripple
          v-for="link in links"
          :key="link"
          :to="link.url"
        >
          <q-icon :name="`svguse:icons/allIcons.svg#${link.iconPuth}`" size="31.2px" />
          <q-item-section>{{ link.title }}</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="logout()"
        >
          <q-icon :name="`svguse:icons/allIcons.svg#exit`" size="31.2px" /> 
          <q-item-section>Выход</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container class="my-page-container">

      <PageNav />
      <router-view />
		
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import PageNav from 'src/components/PageNav.vue'
import { useRouter } from 'vue-router'
import { useMainStore } from 'src/stores/main.js'

const router = useRouter()
const { g } = useMainStore()

const links = ref([
  {
    title: 'Главная',
    iconPuth: 'home',
    url: '/'
  },
  {
    title: 'Клиенты',
    iconPuth: 'smile',
    url: '/sdf'
  },
  {
    title: 'Касса',
    iconPuth: 'case',
    url: '/case'
  },
  {
    title: 'Сертификаты',
    iconPuth: 'serf',
    url: '/certificates'
  },
  {
    title: 'Промокоды',
    iconPuth: 'promo',
    url: '/promocodes'
  },
  {
    title: 'Склад',
    iconPuth: 'ostatki',
    url: '/warehouse'
  },
  {
    title: 'Товары и услуги',
    iconPuth: 'products',
    url: '/products'
  },
  {
    title: 'Аналитика',
    iconPuth: 'analitics',
    url: '/sdf'
  },
  {
    title: 'Финансы',
    iconPuth: 'finance',
    url: '/sdf'
  },
  {
    title: 'Персонал',
    iconPuth: 'personal',
    url: '/personal'
  },
  {
    title: 'Локация',
    iconPuth: 'location',
    url: '/sdf'
  },
  // Убрать
  {
    title: 'Бронь Окна',
    iconPuth: 'promo',
    url: '/reservation-window'
  },
  // =================
  {
    title: 'Настройки',
    iconPuth: 'settings',
    url: '/sdf'
  }
])

const logout = () => {
  g.token = null
  localStorage.removeItem('token')
  router.push('/login')
}


</script>

<style>

.my-left-drawer .list-links .q-item {
    padding: 5px;
    text-align: center;
}

</style>