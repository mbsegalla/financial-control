import styled from 'styled-components'

export const InputBase = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryMain};
`

export const InputUi = styled.input`
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primaryMain};
  font-size: 0.875rem;
  width: 250px;
  padding: 10px 25px;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px ${(props) => props.theme.colors.primaryMain};
  }
`
export const Icon = styled.i`
  color: ${(props) => props.theme.colors.primaryMain};
  position: absolute;
  margin-top: 32px;
  margin-left: 5px;
`
