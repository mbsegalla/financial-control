import React, { forwardRef } from 'react'
import type { ForwardRefRenderFunction } from 'react'

import { Label, InputUi, InputBase, Icon } from './styles'

interface InputProps {
  label: string
  type: string
  placeholder: string
  icon?: JSX.Element
  options?: {
    value: string
    label: string
  }[]
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, type, placeholder, icon, options, ...props }: InputProps, ref) => {
  if (type === 'text' || type === 'email' || type === 'password') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <Icon>{icon}</Icon>
        <InputUi type={type} placeholder={placeholder} {...props} />
      </InputBase>
    )
  }

  if (type === 'select') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <Icon>{icon}</Icon>
        <InputUi as="select" {...props}>
          <option value="">{placeholder}</option>
          {options?.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </InputUi>
      </InputBase>
    )
  }

  return null
}

export default forwardRef(Input)
