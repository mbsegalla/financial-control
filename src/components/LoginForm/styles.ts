import { styled } from 'styled-components'

export const InputPassowordBase = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const ShowPassword = styled.div`
  position: absolute;
  display: flex;
  margin-top: 12px;
  margin-right: 10px;

  svg {
    cursor: pointer;
    color: #3f4973;
  }
`

export const ButtonBase = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  border-radius: 0.5rem;
  border: none;
  padding: 10px 20px;
  width: 200px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.white};
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`
