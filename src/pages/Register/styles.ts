import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  min-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 50px 0px;
`
export const FormContainer = styled.div``

export const FormTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: center;
  margin-bottom: 20px;
`

export const ButtonBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
