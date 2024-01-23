import { formattedDate } from '../../utils/formatDate'
import { formatPrice } from '../../utils/formatPrice'
import { translateCategory, translatePaymentMethod } from '../../utils/translates'

import { TabelRow, Table, TableBody, TableCell, TableHead } from './styles'

interface ExpensestableProps {
  data: {
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
}

const ExpensesTable = ({ data }: ExpensestableProps) => {
  return (
    <Table>
      <TableHead>
        <TabelRow>
          <TableCell>Nome</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Categoria</TableCell>
          <TableCell>Forma de pagamento</TableCell>
          <TableCell>Parcelas</TableCell>
          <TableCell>Observações</TableCell>
        </TabelRow>
      </TableHead>
      <TableBody>
        {data.map((expense) => (
          <TabelRow key={expense._id}>
            <td>{expense.name}</td>
            <td>{formatPrice(expense.price)}</td>
            <td>{formattedDate(expense.date)}</td>
            <td>{translateCategory(expense.category)}</td>
            <td>{translatePaymentMethod(expense.paymentMethod)}</td>
            <td>{expense.installments}</td>
            <td>{expense.comments}</td>
          </TabelRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ExpensesTable
