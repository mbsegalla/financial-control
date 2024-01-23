import { styled } from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
`
