import styled from 'styled-components'

export const ButtonUi = styled.button`
  background-color: ${(props) => props.theme.colors.primaryMain};
  padding: 15px 20px;
  border-radius: 5px;
  width: 300px;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.875rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`
