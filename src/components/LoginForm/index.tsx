import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { login } from '../../services/login'
import { useUserStore } from '../../stores/userStore'
import Input from '../Input'

import type { LoginFormTypeShema } from './schema'
import { loginFormSchema } from './schema'

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
      <Input type="text" label="Usuário" autoComplete="username" error={errors.username?.message} {...register('username')} />
      <Input type="password" label="Senha" autoComplete="current-password" error={errors.password?.message} {...register('password')} />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
