import type { ForwardRefRenderFunction, ReactNode } from 'react'
import { forwardRef } from 'react'

import { ErrorMessage, IconBase, InputBase, InputMask, InputUi, Label, Select, TextArea } from './styles'

interface InputProps {
  type: string
  label: string
  autoComplete?: string
  options?: {
    value: string | number
    label: string
  }[]
  error?: string
  icon?: string | ReactNode | JSX.Element
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, label, autoComplete, options, error, icon, ...props }: InputProps,
  ref,
) => {
  if (type === 'text' || type === 'password' || type === 'number') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <InputUi type={type} autoComplete={autoComplete} error={error} {...props} />
        {icon && <IconBase>{icon}</IconBase>}
        <ErrorMessage error={error}>{error}</ErrorMessage>
      </InputBase>
    )
  }

  if (type === 'select') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <Select error={error} {...props}>
          <option value="">selecione uma opção</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {icon && <IconBase>{icon}</IconBase>}
        <ErrorMessage error={error}>{error}</ErrorMessage>
      </InputBase>
    )
  }

  if (type === 'price') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <InputMask
          mask={'R$ num'}
          blocks={{
            num: {
              mask: Number,
              thousandsSeparator: '.',
              padFractionalZeros: true,
              radix: ',',
              mapToRadix: ['.'],
            },
          }}
          autoComplete={autoComplete}
          error={error}
          {...props}
        />
        {icon && <IconBase>{icon}</IconBase>}
        <ErrorMessage error={error}>{error}</ErrorMessage>
      </InputBase>
    )
  }

  if (type === 'date') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <InputMask mask={'00/00/0000'} autoComplete={autoComplete} error={error} {...props} />
        {icon && <IconBase>{icon}</IconBase>}
        <ErrorMessage error={error}>{error}</ErrorMessage>
      </InputBase>
    )
  }

  if (type === 'textarea') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <TextArea error={error} {...props} />
        {icon && <IconBase>{icon}</IconBase>}
        <ErrorMessage error={error}>{error}</ErrorMessage>
      </InputBase>
    )
  }
}

export default forwardRef(Input)
