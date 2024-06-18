import { defineStore } from 'pinia'
import { useApi } from 'src/api/useApi.js'

export const useAuthStore = defineStore('auth', () => {

  const useLogin = async (formData) => {
    const url = `/auth/token/`;
    const body = JSON.stringify({ username: formData.email, password: formData.password });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    }

    return (await useApi(url, options)).data || []
  }

  return {
    useLogin
  }
})


