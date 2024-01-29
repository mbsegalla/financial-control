import { styled } from 'styled-components'

export const ModalContainer = styled.article`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px 40px;
  background: ${({ theme }) => theme.palette.white};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export const CloseButtonBase = styled.button``

export const Title = styled.h2``
