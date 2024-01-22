import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { login } from '../../services/login'
import { useUserStore } from '../../stores/userStore'
import Input from '../Input'

import type { LoginFormTypeShema } from './schema'
import { loginFormSchema } from './schema'
import { ButtonBase, InputPassowordBase, LoginButton, ShowPassword } from './styles'

interface LoginResponse {
  data: {
    userInfo: {
      userId: string
      fullName: string
    }
    code: string
    message: string
  }
  status: number
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { setUserInfo } = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<LoginFormTypeShema>({
    resolver: zodResolver(loginFormSchema),
  })

  const navigate = useNavigate()

  console.log('errors', errors)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const passwordType = showPassword ? 'text' : 'password'

  const handleFormSubmit = async (data: LoginFormTypeShema) => {
    const { username, password } = data

    const response = (await login(username, password)) as LoginResponse

    if (response.status === 400) {
      const passwordError = response.data.code === 'incorrectPassword'
      const usernameError = response.data.code === 'userNotFound'

      const errorMessage = response.data.message

      if (passwordError) {
        setError('password', {
          message: errorMessage,
        })
      }

      if (usernameError) {
        setError('username', {
          message: errorMessage,
        })
      }
    }

    if (response?.data && response.status === 200) {
      const { userInfo } = response.data

      setUserInfo({
        userId: userInfo.userId,
        fullName: userInfo.fullName,
        isLogged: true,
      })

      navigate('/controle-financeiro')
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        type="text"
        label="Usuário"
        autoComplete="username"
        error={errors.username?.message}
        icon={<AiOutlineUser />}
        {...register('username')}
      />
      <InputPassowordBase>
        <Input
          type={passwordType}
          label="Senha"
          autoComplete="current-password"
          error={errors.password?.message}
          icon={<RiLockPasswordLine />}
          {...register('password')}
        />
        <ShowPassword onClick={handleShowPassword}>{showPassword ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}</ShowPassword>
      </InputPassowordBase>
      <ButtonBase>
        <LoginButton type="submit">Entrar</LoginButton>
      </ButtonBase>
    </form>
  )
}

export default LoginForm
