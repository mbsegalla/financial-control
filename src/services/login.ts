import api, { isAxiosError } from './api'

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/login', { username, password })

    if (response.status !== 200) return

    return {
      data: response.data,
      status: response.status,
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        data: error.response?.data,
        status: error.response?.status,
      }
    }
  }
}
