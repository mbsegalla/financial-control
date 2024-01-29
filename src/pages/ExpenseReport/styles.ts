import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 800;
  font-size: 2.5rem;
`

export const ButtonBase = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AddExpenseButton = styled.button`
  display: flex;
  font-size: 1rem;
  padding: 8px 10px;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
  gap: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
