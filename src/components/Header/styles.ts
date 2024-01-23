import { styled } from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 20px;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 1400px;
  display: flex;
  justify-content: flex-end;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.white};
    font-weight: 800;
  }
`
