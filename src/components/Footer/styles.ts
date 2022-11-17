import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primaryMain};
  padding: 8px;
  display: flex;
  justify-content: center;

  svg {
    margin: 0 5px;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`
