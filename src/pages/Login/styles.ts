import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(circle, hsla(199, 100%, 29%, 1) 0%, hsla(200, 75%, 8%, 1) 100%);
`

export const Wrapper = styled.div`
  width: 350px;
  border-radius: 0.5rem;
  padding: 40px 20px;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`

export const TitleBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  svg {
    font-size: 80px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
