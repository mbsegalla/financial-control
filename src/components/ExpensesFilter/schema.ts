import * as zod from 'zod'

const stringToDate = zod
  .string()
  .transform((value) => {
    const [day, month, year] = value.split('/').map(Number)
    return new Date(year, month - 1, day)
  })
  .optional()

export const expensesFilterSchema = zod.object({
  category: zod.string().optional(),
  paymentMethod: zod.string().optional(),
  startDate: stringToDate,
  endDate: stringToDate,
})

export type ExpensesFilterTypeSchema = zod.infer<typeof expensesFilterSchema>
