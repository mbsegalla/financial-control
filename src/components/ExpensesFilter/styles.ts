import { styled } from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;

  & input {
    width: 200px;
  }

  & select {
    width: 292px;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  padding: 10px 15px;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`
