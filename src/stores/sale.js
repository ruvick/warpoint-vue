import { defineStore } from 'pinia'
import { useMainStore } from 'src/stores/main.js'
import { useApi, useApi2 } from 'src/api/useApi.js'

export const useSaleStore = defineStore('sale', () => {
  const { g } = useMainStore()

  const getNomenclature = async () => {
    const url = `/management/arena/${g.selectedArenaId}/nomenclature`
    return (await useApi(url)).data || []
  }

  const getSale = async (phone) => {
    const url = `management/arena/${g.selectedArenaId}/loyalty/balance?phone_number=${phone}`
    return (await useApi(url)).data || []
  }

  return {
    getNomenclature,
    getSale
  }
})


