import { Route, Routes } from 'react-router-dom'

import ExpenseReport from './pages/ExpenseReport'
import Home from './pages/Home'
import Login from './pages/Login'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/controle-financeiro" element={<ExpenseReport />} />
    </Routes>
  )
}

export default Router
