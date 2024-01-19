import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { expenseCategories, numberOfInstallments, paymentMethodsOptions } from '../../utils/expenses'
import Input from '../Input'

import { expenseRegisterFormSchema, type ExpenseRegisterFormTypeSchema } from './schema'
import { ButtonBase, ExpenseRegisterButton, Form, PaymentMethodWrapper } from './styles'

const ExpenseRegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ExpenseRegisterFormTypeSchema>({
    resolver: zodResolver(expenseRegisterFormSchema),
  })

  const isCredit = watch('paymentMethod') === 'credit'

  const handleExpenseRegister = (data: ExpenseRegisterFormTypeSchema) => {
    console.log(data)
    reset()
  }

  console.log(errors)

  return (
    <Form onSubmit={handleSubmit(handleExpenseRegister)}>
      <Input type="text" label="Nome da despesa" {...register('name')} />
      <Input type="price" label="Valor da despesa" {...register('price')} />

      <Input type="date" label="Data da despesa" {...register('date')} />
      <Input type="select" label="Categoria" options={expenseCategories} {...register('category')} />

      <PaymentMethodWrapper>
        <Input type="select" label="Forma de pagamento" options={paymentMethodsOptions} {...register('paymentMethod')} />
        {isCredit && <Input type="select" label="Número de parcelas" options={numberOfInstallments} {...register('installments')} />}
      </PaymentMethodWrapper>

      <Input type="textarea" label="Observação" {...register('comments')} />

      <ButtonBase>
        <ExpenseRegisterButton type="submit">Registrar</ExpenseRegisterButton>
      </ButtonBase>
    </Form>
  )
}

export default ExpenseRegisterForm
