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
  font-size: 0.875rem;
  width: 250px;
  padding: 10px 25px;
  border: none;
  background-color: #f5f5f5;
  font-family: ${(props) => props.theme.fonts.primary};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.primaryMain};
  }

  &::placeholder {
    color: #a9a9a9;
    font-size: 0.75rem;
    padding-left: 1rem;
  }
`
export const Icon = styled.i`
  position: absolute;
  margin-top: 32px;
  margin-left: 5px;
  color: gray;
`

export const Option = styled.option`
  color: #fff;
  background-color: ${(props) => props.theme.colors.primaryMain};

  &:first-child {
    font-weight: 700;
  }
`
