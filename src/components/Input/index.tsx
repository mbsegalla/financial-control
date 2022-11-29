import React, { forwardRef } from 'react'
import type { ForwardRefRenderFunction } from 'react'

import { Label, InputUi, InputBase, Icon, Option } from './styles'

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
          <Option value="">{placeholder}</Option>
          {options?.map((option) => {
            return (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            )
          })}
        </InputUi>
      </InputBase>
    )
  }

  if (type === 'date') {
    return (
      <InputBase ref={ref}>
        <Label>{label}</Label>
        <Icon>{icon}</Icon>
        <InputUi type="date" {...props} />
      </InputBase>
    )
  }

  return null
}

export default forwardRef(Input)
