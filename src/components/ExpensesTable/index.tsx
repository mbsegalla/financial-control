import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'

import { formattedDate } from '../../utils/formatDate'
import { formatPrice } from '../../utils/formatPrice'
import { translateCategory, translatePaymentMethod } from '../../utils/translates'

import { DeleteExpenseButton, EditExpenseButton, TabelRow, Table, TableBody, TableCell, TableHead } from './styles'

interface ExpensestableProps {
  expenses: {
    _id: string
    userId: string | null
    name: string
    price: number
    date: Date
    category: string
    paymentMethod: string
    installments?: number
    comments?: string
  }[]
  deleteExpense: (expeseId: string) => void
  editExpense: () => void
}

const tableHeadList = ['Nome', 'Valor', 'Data', 'Categoria', 'Forma de pagamento', 'Parcelas', 'Observações', 'Ações']

const ExpensesTable = ({ expenses, editExpense, deleteExpense }: ExpensestableProps) => {
  return (
    <Table>
      <TableHead>
        <TabelRow>
          {tableHeadList.map((head) => (
            <TableCell key={head}>{head}</TableCell>
          ))}
        </TabelRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense) => (
          <TabelRow key={expense._id}>
            <td>{expense.name}</td>
            <td>{formatPrice(expense.price)}</td>
            <td>{formattedDate(expense.date)}</td>
            <td>{translateCategory(expense.category)}</td>
            <td>{translatePaymentMethod(expense.paymentMethod)}</td>
            <td>{expense.installments}</td>
            <td>{expense.comments}</td>
            <td>
              <EditExpenseButton onClick={editExpense}>
                <FaPencilAlt title="Editar despesa" size={20} />
              </EditExpenseButton>
              <DeleteExpenseButton onClick={() => deleteExpense(expense._id)}>
                <FaRegTrashAlt title="Excluir despesa" size={20} />
              </DeleteExpenseButton>
            </td>
          </TabelRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ExpensesTable
