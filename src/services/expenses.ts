import api, { isAxiosError } from './api'

export interface ExpenseProps {
  userId: string | null
  name: string
  price: number
  date: Date
  category: string
  paymentMethod: string
  installments?: number
  comments?: string
}

export const createExpense = async (expense: ExpenseProps) => {
  try {
    const response = await api.post('/create-expense', expense)

    if (response.status !== 201) return

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

export const getExpenses = async (userId: string | null, page: number) => {
  try {
    const response = await api.get(`/expenses/${userId}?page=${page}`)

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
