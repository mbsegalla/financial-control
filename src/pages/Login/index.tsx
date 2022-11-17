import { zodResolver } from '@hookform/resolvers/zod'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

import loginImage from '../../assets/login-image.webp'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { loginFormValidation } from './loginFormValidation'
import { Container, FormContainer, Image, Form, ButtonBase } from './styles'

interface LoginFormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // TODO: remove this
  console.log(errors)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleLoginSubmit = (data: LoginFormData) => {
    console.log(data)
    reset()
  }

  return (
    <Container>
      <FormContainer>
        <Image src={loginImage} />
        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <Input {...inputRef} icon={<RiLockPasswordFill />} label="Email" type="email" placeholder="Digite seu email" {...(register('email'), { required: true })} />
          <Input {...inputRef} icon={<MdEmail />} label="Senha" type="password" placeholder="Digite sua senha" {...(register('password'), { required: true })} />
          <ButtonBase>
            <Button type="submit">Entrar</Button>
          </ButtonBase>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Login
