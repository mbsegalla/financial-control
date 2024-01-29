import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { GiWallet } from 'react-icons/gi'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'

import ExpensesFilter from '../../components/ExpensesFilter'
import type { ExpensesFilterTypeSchema } from '../../components/ExpensesFilter/schema'
import { expensesFilterSchema } from '../../components/ExpensesFilter/schema'
import ExpensesTable from '../../components/ExpensesTable'
import ExpenseRegisterModal from '../../components/modals/ExpenseRegisterModal'
import RemoveExpenseModal from '../../components/modals/RemoveExpenseModal'
import Pagination from '../../components/Pagination'
import { deleteExpense, getExpenses } from '../../services/expenses'
import { useUserStore } from '../../stores/userStore'

import { AddExpenseButton, ButtonBase, Container, Content, Title, Wrapper } from './styles'

export interface ExpensesResponse {
  _id: string
  userId: string | null
  name: string
  price: number
  date: Date
  category: string
  paymentMethod: string
  installments?: number
  comments?: string
}

interface FetchExpensesProps {
  page: number
  category?: string
  paymentMethod?: string
  startDate?: Date
  endDate?: Date
}

const ExpenseReport = () => {
  const [expenses, setExpenses] = useState<ExpensesResponse[]>([])
  const [totalExpenses, setTotalExpenses] = useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const [openModal, setOpenModal] = useState(false)
  const [openDeleteExpenseModal, setOpenDeleteExpenseModal] = useState(false)
  const [selectedExpenseId, setSelectedExpenseId] = useState<string>('')

  const expenseFilterForm = useForm<ExpensesFilterTypeSchema>({
    resolver: zodResolver(expensesFilterSchema),
  })

  const {
    formState: { errors },
    setError,
    reset,
  } = expenseFilterForm

  console.log(errors)

  const { userId } = useUserStore()

  const quantityOfPages = Math.ceil(totalExpenses / itemsPerPage)

  const previousButtonDisabled = page === 1
  const nextButtonDisabled = page === quantityOfPages

  const buttonNumberActive = (pageNumber: number) => pageNumber === page

  const fetchExpenses = useCallback(async ({ page, category, paymentMethod, startDate, endDate }: FetchExpensesProps) => {
    const response = await getExpenses({ userId, page, paymentMethod, category, startDate, endDate })

    if (response?.data.expenses.length === 0) {
      toast.info('Nenhuma despesa encontrada')
    }

    if (response?.status === 200 && response.data) {
      setExpenses(response.data.expenses)
      setTotalExpenses(response.data.totalExpenses)
      setItemsPerPage(response.data.itemsPerPage)
      setPage(page)
    }
  }, [])

  useEffect(() => {
    fetchExpenses({ page: 1 })
  }, [fetchExpenses])

  const handlePreviousPage = async () => {
    await fetchExpenses({ page: page - 1 })
  }

  const handleNextPage = async () => {
    await fetchExpenses({ page: page + 1 })
  }

  const handlePageChange = async (pageNumber: number) => {
    await fetchExpenses({ page: pageNumber })
  }

  const handleAddExpense = () => {
    setOpenModal(true)
  }

  const handleFilterSubmit = async (data: ExpensesFilterTypeSchema) => {
    const { category, paymentMethod, startDate, endDate } = data

    const validStartDate = startDate instanceof Date && !isNaN(startDate.valueOf())
    const validEndDate = endDate instanceof Date && !isNaN(endDate.valueOf())

    if (category === '' && paymentMethod === '' && !validStartDate && !validEndDate) {
      toast.error('Preencha pelo menos um campo do filtro')
      return
    }

    if (startDate && endDate) {
      if (startDate > endDate) {
        setError('startDate', {
          message: 'Data inicial não pode ser maior que a data final',
        })
        return
      }
    }

    const filters: { [key: string]: string } = {}

    if (category !== '') {
      filters.category = category as string
    }

    if (paymentMethod !== '') {
      filters.paymentMethod = paymentMethod as string
    }

    if (validStartDate) {
      filters.startDate = startDate?.toISOString()
    }

    if (validEndDate) {
      filters.endDate = endDate?.toISOString()
    }

    await fetchExpenses({ page: 1, ...filters })
  }

  const handleRemoveFilters = () => {
    fetchExpenses({ page: 1 })
    reset()
  }

  const handleOpenDeleteExpenseModal = (expenseId: string) => {
    setSelectedExpenseId(expenseId)
    setOpenDeleteExpenseModal(true)
  }

  const handleDeleteExpense = async () => {
    const response = await deleteExpense(selectedExpenseId)

    if (response?.status === 200) {
      toast.success('Despesa excluída com sucesso')
      setOpenDeleteExpenseModal(false)
    }
  }

  const handleEditExpense = () => {
    console.log('editar')
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Controle de finanças</Title>

          <ButtonBase>
            <AddExpenseButton type="button" onClick={handleAddExpense}>
              <GiWallet size={20} />
              Adicionar despesa
            </AddExpenseButton>
          </ButtonBase>

          <Content>
            <div>
              <FormProvider {...expenseFilterForm}>
                <ExpensesFilter handleFilterSubmit={handleFilterSubmit} errors={errors} removeFilters={handleRemoveFilters} />
              </FormProvider>
            </div>
            <ExpensesTable expenses={expenses} editExpense={handleEditExpense} deleteExpense={handleOpenDeleteExpenseModal} />

            <Pagination
              quantityOfPages={quantityOfPages}
              previousButtonDisabled={previousButtonDisabled}
              nextButtonDisabled={nextButtonDisabled}
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              handlePageChange={handlePageChange}
              buttonNumberActive={buttonNumberActive}
            />
          </Content>
        </Wrapper>
      </Container>

      <ExpenseRegisterModal open={openModal} setOpenModal={setOpenModal} />
      <RemoveExpenseModal open={openDeleteExpenseModal} setOpenDeleteExpenseModal={setOpenDeleteExpenseModal} deleteExpense={handleDeleteExpense} />
    </>
  )
}

export default ExpenseReport
