import { data } from '../../utils/mocks'

import { TabelRow, Table, TableBody, TableCell, TableHead } from './styles'

const ExpensesTable = () => {
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
        {data.map((item) => (
          <TabelRow key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.date}</td>
            <td>{item.category}</td>
            <td>{item.paymentMethod}</td>
            <td>{item.installments}</td>
            <td>{item.comments}</td>
          </TabelRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ExpensesTable
