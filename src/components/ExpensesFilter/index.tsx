import type { FieldErrors } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import { MdClose, MdOutlineCategory, MdOutlineDateRange, MdOutlinePayment, MdSearch } from 'react-icons/md'

import { expenseCategories, paymentMethodsOptions } from '../../utils/expenses'
import Input from '../Input'

import type { ExpensesFilterTypeSchema } from './schema'
import { Form, RemoveFilterButton, SearchButton } from './styles'

interface ExpensesFilterProps {
  errors: FieldErrors<{
    startDate?: {
      message: string
    }
    endDate?: {
      message: string
    }
    root?: {
      message: string
    }
  }>
  handleFilterSubmit: (data: ExpensesFilterTypeSchema) => void
  removeFilters: () => void
}

const ExpensesFilter = ({ errors, handleFilterSubmit, removeFilters }: ExpensesFilterProps) => {
  const { register, handleSubmit } = useFormContext()

  console.log('errors', errors)

  return (
    <>
      <Form onSubmit={handleSubmit(handleFilterSubmit)}>
        <Input type="select" label="Categoria" options={expenseCategories} icon={<MdOutlineCategory />} {...register('category')} />
        <Input type="select" label="Forma de pagamento" options={paymentMethodsOptions} icon={<MdOutlinePayment />} {...register('paymentMethod')} />
        <Input
          type="date"
          label="Data inicial"
          placeholder="dd/mm/aaaa"
          error={errors.startDate?.message}
          icon={<MdOutlineDateRange />}
          {...register('startDate')}
        />
        <Input
          type="date"
          label="Data Final"
          placeholder="dd/mm/aaaa"
          error={errors.endDate?.message}
          icon={<MdOutlineDateRange />}
          {...register('endDate')}
        />

        <SearchButton type="submit">
          <MdSearch size={25} /> Filtrar
        </SearchButton>
      </Form>
      <RemoveFilterButton onClick={removeFilters}>
        <MdClose size={25} /> Limpar filtros
      </RemoveFilterButton>
    </>
  )
}

export default ExpensesFilter
