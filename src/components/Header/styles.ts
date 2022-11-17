import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryMain};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Image = styled.img`
  width: 100px;
`
