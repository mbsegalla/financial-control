import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
  }

  html, body, p, div {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: unset;
    border: none;
    outline: none;
    user-select: none;
  }

  input {
    outline: none;
  }
`
