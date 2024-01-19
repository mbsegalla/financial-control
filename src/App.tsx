import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/globalStyles'
import Router from './Router'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
