import { IMaskInput } from 'react-imask'
import { css, styled } from 'styled-components'

export const InputBase = styled.div`
  display: flex;
  flex-direction: column;
`

const inputBaseStyle = css`
  padding: 12px;
  border-radius: 0.5rem;
  border: 1px solid #bdc3c7;
  background-color: #ecf0f1;
  color: #2c3e50;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 5px;
`

export const InputUi = styled.input`
  ${inputBaseStyle}
`

export const Select = styled.select`
  ${inputBaseStyle}
`

export const TextArea = styled.textarea`
  ${inputBaseStyle}
`

export const InputMask = styled(IMaskInput)`
  ${inputBaseStyle}
`
