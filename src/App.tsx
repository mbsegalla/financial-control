import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/globalStyles'
import { theme } from './styles/themes'
import Router from './Router'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
          <ToastContainer autoClose={5000} theme="dark" />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
