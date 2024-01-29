import { useForm } from 'react-hook-form'
import {
  MdAttachMoney,
  MdOutlineCategory,
  MdOutlineDateRange,
  MdOutlineDriveFileRenameOutline,
  MdOutlineNumbers,
  MdOutlinePayment,
  MdOutlineSpeakerNotes,
} from 'react-icons/md'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'

import { createExpense } from '../../services/expenses'
import { useUserStore } from '../../stores/userStore'
import { expenseCategories, numberOfInstallments, paymentMethodsOptions } from '../../utils/expenses'
import Input from '../Input'

import { expenseRegisterFormSchema, type ExpenseRegisterFormTypeSchema } from './schema'
import { ButtonBase, ExpenseRegisterButton, Form, InputWrapper } from './styles'

interface ExpenseRegisterFormProps {
  setOpenModal: (open: boolean) => void
}

const ExpenseRegisterForm = ({ setOpenModal }: ExpenseRegisterFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ExpenseRegisterFormTypeSchema>({
    resolver: zodResolver(expenseRegisterFormSchema),
  })

  const { userId } = useUserStore()

  const isCredit = watch('paymentMethod') === 'credit'

  const handleExpenseRegister = async (data: ExpenseRegisterFormTypeSchema) => {
    console.log(data)

    const response = await createExpense({
      ...data,
      userId,
    })

    toast.success('Despesa registrada com sucesso!')
    if (response?.status === 201) {
      setOpenModal(false)
    }
  }

  console.log(errors)

  return (
    <Form onSubmit={handleSubmit(handleExpenseRegister)}>
      <InputWrapper>
        <Input type="text" label="Nome da despesa" error={errors.name?.message} icon={<MdOutlineDriveFileRenameOutline />} {...register('name')} />
        <Input type="price" label="Valor da despesa" error={errors.price?.message} icon={<MdAttachMoney />} {...register('price')} />
      </InputWrapper>

      <InputWrapper>
        <Input
          type="date"
          label="Data da despesa"
          placeholder="dd/mm/aaaa"
          error={errors.date?.message}
          icon={<MdOutlineDateRange />}
          {...register('date')}
        />
        <Input
          type="select"
          label="Categoria"
          options={expenseCategories}
          error={errors.category?.message}
          icon={<MdOutlineCategory />}
          {...register('category')}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          type="select"
          label="Forma de pagamento"
          options={paymentMethodsOptions}
          error={errors.paymentMethod?.message}
          icon={<MdOutlinePayment />}
          {...register('paymentMethod')}
        />
        {isCredit && (
          <Input
            type="select"
            label="Número de parcelas"
            options={numberOfInstallments}
            error={errors.installments?.message}
            icon={<MdOutlineNumbers />}
            {...register('installments')}
          />
        )}
      </InputWrapper>

      <Input type="textarea" label="Observação" error={errors.comments?.message} icon={<MdOutlineSpeakerNotes />} {...register('comments')} />

      <ButtonBase>
        <ExpenseRegisterButton type="submit">Registrar</ExpenseRegisterButton>
      </ButtonBase>
    </Form>
  )
}

export default ExpenseRegisterForm
