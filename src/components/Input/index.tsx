import React, { forwardRef } from 'react'
import type { ForwardRefRenderFunction } from 'react'

import { Label, InputUi, InputBase, Icon } from './styles'

interface InputProps {
  label: string
  type: string
  placeholder: string
  icon?: JSX.Element
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, type, placeholder, icon, ...props }: InputProps, ref) => {
  return (
    <InputBase ref={ref}>
      <Label>{label}</Label>
      <Icon>{icon}</Icon>
      <InputUi type={type} placeholder={placeholder} {...props} />
    </InputBase>
  )
}

export default forwardRef(Input)
