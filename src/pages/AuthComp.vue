<template>
  <div class="q-pa-md row justify-center items-center" style="min-height: 100vh;">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md q-mt-auto q-mb-auto"
      style="width: 380px;"
    >
      <div class="column items-center"> 
        <q-input
          color="grey-9"
          standout
          v-model="formData.email" 
          type="text"
          class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-mb-lg full-width"
          placeholder="Логин *"
          :rules="[
            val => !!val || '* Обязательное поле',
            val => val.length > 3 || 'Не меньше 3 символов',
          ]"
        />
        <q-input
          color="grey-9"
          standout
          v-model="formData.password"
          type="text"
          class="my-input-standart my-input-standart-middle bg-blue-grey-8 q-mb-lg full-width"
          placeholder="Пароль *"
          :rules="[
            val => !!val || '* Обязательное поле',
            val => val.length > 3 || 'Не меньше 3 символов',
          ]"
        />
        <q-btn
          unelevated
          color="blue-1"
          class="my-btn text-weight-bold q-ml-md full-width q-mt-sm"
          label="Войти"
          padding="0 16px"
          type="submit"
        />

      </div>
    </q-form>

    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from 'src/stores/auth.js'
import { useMainStore } from 'src/stores/main.js' 
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const { g } = useMainStore()
const $q = useQuasar()
const authStore = useAuthStore()
const router = useRouter()

const formData = reactive({
  email: null,
  password: null,
})

const onSubmit = async () => {
  console.log(formData)
  try {
    const resp = await authStore.useLogin(formData)
    g.token = resp.access
    localStorage.setItem('token', resp.access)

    $q.notify({ message: 'Вы успешно авторизовались', color: 'positive' })

    setTimeout(() => {
      router.push('/')
    }, 500)
  } catch (e) {
    console.log(e)
    $q.notify({ message: 'Логин или пароль - неправильные', color: 'negative' })
  }
}
</script>
