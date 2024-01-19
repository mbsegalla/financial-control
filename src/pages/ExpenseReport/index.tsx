import { useState } from 'react'
import { GiWallet } from 'react-icons/gi'

import ExpensesTable from '../../components/ExpensesTable'
import ExpenseRegisterModal from '../../components/modals/ExpenseRegisterModal'
import { useUserStore } from '../../stores/userStore'

import { AddExpenseButton, ButtonBase, Container, Wrapper } from './styles'

const ExpenseReport = () => {
  const [openModal, setOpenModal] = useState(false)
  const { fullName, userId } = useUserStore()

  console.log('fullName', fullName, 'userId', userId)

  const handleAddExpense = () => {
    setOpenModal(true)
    console.log('asdsdasd')
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

          <ExpensesTable />
        </Wrapper>
      </Container>

      <ExpenseRegisterModal open={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export default ExpenseReport
