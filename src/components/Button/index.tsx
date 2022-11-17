import React from 'react'
import type { ReactNode } from 'react'

import { ButtonUi } from './styles'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ type, children, ...props }: ButtonProps) => {
  return (
    <ButtonUi type={type} {...props}>
      {children}
    </ButtonUi>
  )
}

export default Button
