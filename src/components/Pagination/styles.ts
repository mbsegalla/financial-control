import { styled } from 'styled-components'

interface PaginationButtonProps {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.875rem;
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
  border-radius: 0.5rem;

  &:disabled {
    background-color: #ccc;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    &:disabled {
      background-color: #ccc;
    }
  }
`

export const PaginationButtonNumber = styled.button<PaginationButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  padding: 5px 18px;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 30px;
  background-color: ${({ theme, active }) => active && theme.palette.primary.main};
  color: ${({ theme, active }) => active && theme.palette.white};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.white};
  }
`
