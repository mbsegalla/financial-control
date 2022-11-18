import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, FormContainer, FormTitle, ButtonBase } from './styles'

const paymentMethods = [
  {
    value: 'credit-card',
    label: 'Cartão de crédito',
  },
  {
    value: 'boleto',
    label: 'Boleto',
  },
  {
    value: 'pix',
    label: 'Pix',
  },
]

const installments = [
  {
    value: 'yes',
    label: 'Sim',
  },
  {
    value: 'no',
    label: 'Não',
  },
]

const numberOfInstallments = () => {
  const options = []

  for (let i = 1; i <= 12; i++) {
    options.push({
      value: i.toString(),
      label: i.toString(),
    })
  }

  return options
}

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
        <form>
          <Input {...inputRef} label="Despesa" type="text" placeholder="Digite o nome da despesa" />
          <Input {...inputRef} label="Valor" type="text" placeholder="Digite o valor da despesa" />
          <Input {...inputRef} label="Data" type="text" placeholder="Digite a data da despesa" />
          <Input {...inputRef} label="Tipo" type="select" placeholder="Tipo da despesa" />
          <Input {...inputRef} label="Forma de pagamento" type="select" options={paymentMethods} placeholder="Forma de pagamento" {...register('paymentMethod')} />
          {creditCard && <Input {...inputRef} label="Parcelado" type="select" options={installments} placeholder="Selecione uma opção" {...register('installment')} />}
          {hasInstallments && <Input {...inputRef} {...inputRef} label="Quantidade de parcelas" type="select" options={numberOfInstallments()} placeholder="Quantidade de parcelas" />}
          <ButtonBase>
            <Button type="submit">Registrar</Button>
          </ButtonBase>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Register
