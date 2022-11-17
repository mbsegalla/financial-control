import React, { useRef } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, FormContainer, FormTitle, ButtonBase } from './styles'

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <FormContainer>
        <FormTitle>Registre sua despesa</FormTitle>
        <form>
          <Input {...inputRef} label="Despesa" type="text" placeholder="Digite o nome da despesa" />
          <Input {...inputRef} label="Valor" type="text" placeholder="Digite o valor da despesa" />
          <Input {...inputRef} label="Data" type="text" placeholder="Digite a data da despesa" />
          <Input {...inputRef} {...inputRef} label="Tipo" type="text" placeholder="Selecione o tipo da despesa" />
          <Input {...inputRef} label="Forma de pagamento" type="text" placeholder="Selecione a forma de pagamento" />
          <Input {...inputRef} label="Parcelado" type="text" placeholder="Selecione uma opção" />
          <Input {...inputRef} {...inputRef} label="Quantidade de parcelas" type="text" placeholder="Selecione a quantidade de parcelas" />
          <ButtonBase>
            <Button type="submit">Registrar</Button>
          </ButtonBase>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Home
