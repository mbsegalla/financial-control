import React, { forwardRef } from 'react'
import type { ForwardRefRenderFunction } from 'react'

import { Label, InputUi, InputBase } from './styles'

interface InputProps {
  label: string
  type: string
  placeholder: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, type, placeholder, ...props }: InputProps, ref) => {
  return (
    <InputBase ref={ref}>
      <Label>{label}</Label>
      <InputUi type={type} placeholder={placeholder} {...props} />
    </InputBase>
  )
}

export default forwardRef(Input)
