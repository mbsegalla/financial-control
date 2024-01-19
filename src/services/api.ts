import type { AxiosError } from 'axios'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

const api = axios.create({
  baseURL: baseUrl,
})

export const isAxiosError = (error: unknown): error is AxiosError => {
  return !!(error as AxiosError).response
}

export default api
