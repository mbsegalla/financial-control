import styled from 'styled-components'

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  svg {
    margin-right: 3px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`
