import * as zod from 'zod'

export const loginFormSchema = zod.object({
  username: zod.string().min(3, { message: 'Nome de usuário deve ter no mínimo 3 caracteres' }),
  password: zod.string().min(8, { message: 'Senha deve ter no mínimo 6 caracteres' }),
})

export type LoginFormTypeShema = zod.infer<typeof loginFormSchema>
