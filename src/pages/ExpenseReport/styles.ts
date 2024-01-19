import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ButtonBase = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AddExpenseButton = styled.button`
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 10px;
  border-radius: 0.5rem;
  border: none;
  background-color: #2ecc71;
  color: white;
  font-weight: 700;
  gap: 5px;
`