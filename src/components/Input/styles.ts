import { IMaskInput } from 'react-imask'
import type { WebTarget } from 'styled-components'
import { css, styled } from 'styled-components'

interface InputProps {
  error?: string
}

export const InputBase = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;
`

const inputBaseStyle = css<InputProps>`
  padding: 12px 45px;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme, error }) => (error ? theme.palette.error : theme.palette.primary.main)};
  background-color: #ecf0f1;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`

export const InputUi = styled.input<InputProps>`
  ${inputBaseStyle}
`

export const Select = styled.select<InputProps>`
  ${inputBaseStyle}
`

export const TextArea = styled.textarea<InputProps>`
  ${inputBaseStyle}
`

export const InputMask = styled<WebTarget>(IMaskInput as WebTarget)`
  ${inputBaseStyle}
`

export const IconBase = styled.div`
  position: absolute;
  margin-top: 45px;
  margin-left: 15px;

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const ErrorMessage = styled.span<InputProps>`
  font-size: 0.75rem;
  min-height: 18px;
  color: ${({ theme }) => theme.palette.error};

  opacity: ${({ error }) => (error ? 1 : 0)};
`
