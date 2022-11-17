import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(90deg, rgba(36, 0, 70, 1) 0%, rgba(90, 24, 154, 1) 70%, rgba(157, 78, 221, 1) 100%);
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 32px 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 405px) {
    width: 320px;
    padding: 32px 16px;
  }
`

export const Image = styled.img`
  width: 390px;

  @media (max-width: 405px) {
    width: 350px;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ButtonBase = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
