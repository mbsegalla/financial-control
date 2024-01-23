import { useCallback, useEffect, useState } from 'react'
import { GiWallet } from 'react-icons/gi'

import ExpensesFilter from '../../components/ExpensesFilter'
import ExpensesTable from '../../components/ExpensesTable'
import ExpenseRegisterModal from '../../components/modals/ExpenseRegisterModal'
import Pagination from '../../components/Pagination'
import { getExpenses } from '../../services/expenses'
import { useUserStore } from '../../stores/userStore'

import { AddExpenseButton, ButtonBase, Container, Wrapper } from './styles'

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

const ExpenseReport = () => {
  const [expenses, setExpenses] = useState<ExpensesResponse[]>([])
  const [totalExpenses, setTotalExpenses] = useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const [openModal, setOpenModal] = useState(false)

  const { userId } = useUserStore()

  const quantityOfPages = Math.ceil(totalExpenses / itemsPerPage)

  const previousButtonDisabled = page === 1
  const nextButtonDisabled = page === quantityOfPages

  const buttonNumberActive = (pageNumber: number) => pageNumber === page

  const fetchExpenses = useCallback(async (pageNumber: number) => {
    const response = await getExpenses(userId, pageNumber)
    console.log(response)

    if (response?.status === 200 && response.data) {
      setExpenses(response.data.expenses)
      setTotalExpenses(response.data.totalExpenses)
      setItemsPerPage(response.data.itemsPerPage)
      setPage(pageNumber)
    }
  }, [])

  useEffect(() => {
    fetchExpenses(1)
  }, [fetchExpenses])

  const handlePreviousPage = async () => {
    await fetchExpenses(page - 1)
  }

  const handleNextPage = async () => {
    await fetchExpenses(page + 1)
  }

  const handlePageChange = async (pageNumber: number) => {
    await fetchExpenses(pageNumber)
  }

  const handleAddExpense = () => {
    setOpenModal(true)
  }

  return (
    <>
      <Container>
        <Wrapper>
          <h1>Controle de finanças</h1>

          <ButtonBase>
            <AddExpenseButton type="button" onClick={handleAddExpense}>
              <GiWallet size={20} />
              Adicionar despesa
            </AddExpenseButton>
          </ButtonBase>

          <div>
            <div>
              <ExpensesFilter />
            </div>
            <ExpensesTable data={expenses} />

            <Pagination
              quantityOfPages={quantityOfPages}
              previousButtonDisabled={previousButtonDisabled}
              nextButtonDisabled={nextButtonDisabled}
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              handlePageChange={handlePageChange}
              buttonNumberActive={buttonNumberActive}
            />
          </div>
        </Wrapper>
      </Container>

      <ExpenseRegisterModal open={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export default ExpenseReport
