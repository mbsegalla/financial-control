import type { ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'

import { InputBase, InputMask, InputUi, Select, TextArea } from './styles'

interface InputProps {
  type: string
  label: string
  autoComplete?: string
  options?: {
    value: string | number
    label: string
  }[]
  error?: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ type, label, autoComplete, options, error, ...props }: InputProps, ref) => {
  if (type === 'text' || type === 'password' || type === 'number') {
    return (
      <InputBase ref={ref}>
        <label>{label}</label>
        <InputUi type={type} autoComplete={autoComplete} {...props} />
        {error && <span>{error}</span>}
      </InputBase>
    )
  }

  if (type === 'select') {
    return (
      <InputBase ref={ref}>
        <label>{label}</label>
        <Select {...props}>
          <option value="">selecione uma opção</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {error && <span>{error}</span>}
      </InputBase>
    )
  }

  if (type === 'price') {
    return (
      <InputBase ref={ref}>
        <label>{label}</label>
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
          {...props}
        />
        {error && <span>{error}</span>}
      </InputBase>
    )
  }

  if (type === 'date') {
    return (
      <InputBase ref={ref}>
        <label>{label}</label>
        <InputMask mask={'00/00/0000'} autoComplete={autoComplete} {...props} />
      </InputBase>
    )
  }

  if (type === 'textarea') {
    return (
      <InputBase ref={ref}>
        <label>{label}</label>
        <TextArea {...props} />
        {error && <span>{error}</span>}
      </InputBase>
    )
  }
}

export default forwardRef(Input)
