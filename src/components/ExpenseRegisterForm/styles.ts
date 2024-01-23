import { styled } from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;

  input {
    width: 200px;
  }

  select {
    width: 292px;
  }
`

export const ButtonBase = styled.div`
  display: flex;
  justify-content: center;
`
export const ExpenseRegisterButton = styled.button`
  background-color: #f2c94c;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`
