import * as zod from 'zod'

const stringToDate = zod
  .string()
  .refine(
    (value) => {
      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
      return dateRegex.test(value)
    },
    { message: 'A data deve ser informada' },
  )
  .transform((value) => {
    const [day, month, year] = value.split('/').map(Number)
    return new Date(year, month - 1, day)
  })

const extractNumericValue = (value: string): number => {
  const numberRegex = /\d+/g
  const matches = value.match(numberRegex)
  if (!matches) {
    return 0
  }
  const number = Number(matches.join(''))
  return number
}

export const expenseRegisterFormSchema = zod.object({
  name: zod.string().min(3, 'Mínimo de 3 caracteres'),
  price: zod
    .string()
    .transform(extractNumericValue)
    .refine((value) => value > 0, { message: 'O preço deve ser informado' }),
  date: stringToDate,
  category: zod.string().min(1, 'Selecione uma categoria'),
  paymentMethod: zod.string().min(1, 'Selecione um método de pagamento'),
  installments: zod.coerce.number().min(1, 'Selecione o número de parcelas').optional(),
  comments: zod.string().optional(),
})

export type ExpenseRegisterFormTypeSchema = zod.infer<typeof expenseRegisterFormSchema>
