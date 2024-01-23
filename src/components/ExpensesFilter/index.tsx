import { useForm } from 'react-hook-form'
import { MdOutlineCategory, MdOutlineDateRange, MdOutlinePayment, MdSearch } from 'react-icons/md'

import { expenseCategories, paymentMethodsOptions } from '../../utils/expenses'
import Input from '../Input'

import { Form, SearchButton } from './styles'

const ExpensesFilter = () => {
  const { register, handleSubmit } = useForm()

  const handleFilterSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleFilterSubmit)}>
      <Input type="select" label="Categoria" options={expenseCategories} icon={<MdOutlineCategory />} {...register('category')} />
      <Input type="select" label="Forma de pagamento" options={paymentMethodsOptions} icon={<MdOutlinePayment />} {...register('paymentMethod')} />
      <Input type="date" label="Data inicial" icon={<MdOutlineDateRange />} {...register('startDate')} />
      <Input type="date" label="Data Final" icon={<MdOutlineDateRange />} {...register('endDate')} />

      <SearchButton type="submit">
        <MdSearch size={25} /> Filtrar
      </SearchButton>
    </Form>
  )
}

export default ExpensesFilter
