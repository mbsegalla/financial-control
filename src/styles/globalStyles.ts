import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #F5F5F5;
  }

  button, input, textarea, select {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
