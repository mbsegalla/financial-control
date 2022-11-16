import * as zod from 'zod'

export const loginFormValidation = zod.object({
  email: zod.string().email('Email inválido'),
  password: zod.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})
