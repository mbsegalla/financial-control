import styled from 'styled-components'

export const ButtonBase = styled.div`
  width: 100px;
  display: flex;
  justify-content: flex-end;

  svg {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.175rem;
    margin-right: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primaryLight};
    }

    @media (max-width: 768px) {
      margin: 0;
    }
  }
`
