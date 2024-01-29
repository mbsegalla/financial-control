import api, { isAxiosError } from './api'

export interface CreateExpenseProps {
  userId: string | null
  name: string
  price: number
  date: Date
  category: string
  paymentMethod: string
  installments?: number
  comments?: string
}

interface getExpensesProps {
  userId: string | null
  page: number
  paymentMethod?: string
  category?: string
  startDate?: Date
  endDate?: Date
}

export const createExpense = async (expense: CreateExpenseProps) => {
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

export const getExpenses = async ({ userId, page, paymentMethod, category, startDate, endDate }: getExpensesProps) => {
  try {
    let query = `/expenses/${userId}?page=${page}`

    if (paymentMethod) query += `&paymentMethod=${paymentMethod}`

    if (category) query += `&category=${category}`

    if (startDate) query += `&startDate=${startDate}`

    if (endDate) query += `&endDate=${endDate}`

    const response = await api.get(query)

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

export const deleteExpense = async (expenseId: string) => {
  try {
    const response = await api.delete(`/delete-expense/${expenseId}`)

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
