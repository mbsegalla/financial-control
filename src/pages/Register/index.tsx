import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { expenseTypes, installments, numberOfInstallments, paymentMethods } from '../../utils/selectOptions'
import { Container, FormContainer, Form, FormTitle, ButtonBase } from './styles'

const Register: React.FC = () => {
  const { register, watch } = useForm()
  const inputRef = useRef<HTMLInputElement>(null)

  const watchPaymentMethod = watch('paymentMethod')
  const creditCard = watchPaymentMethod === 'credit-card'

  const watchInstallments = watch('installment')
  const hasInstallments = watchInstallments === 'yes'

  return (
    <Container>
      <FormContainer>
        <FormTitle>Registre sua despesa</FormTitle>
        <Form>
          <Input {...inputRef} label="Despesa" type="text" placeholder="Digite o nome da despesa" />
          <Input {...inputRef} label="Valor" type="text" placeholder="Digite o valor da despesa" />
          <Input {...inputRef} label="Data" type="date" placeholder="Digite a data da despesa" />
          <Input {...inputRef} label="Tipo" type="select" options={expenseTypes} placeholder="Tipo da despesa" />
          <Input {...inputRef} label="Forma de pagamento" type="select" options={paymentMethods} placeholder="Forma de pagamento" {...register('paymentMethod')} />
          {creditCard && <Input {...inputRef} label="Parcelado" type="select" options={installments} placeholder="Selecione uma opção" {...register('installment')} />}
          {hasInstallments && <Input {...inputRef} {...inputRef} label="Quantidade de parcelas" type="select" options={numberOfInstallments()} placeholder="Quantidade de parcelas" />}
          <ButtonBase>
            <Button type="submit">Registrar</Button>
          </ButtonBase>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Register
