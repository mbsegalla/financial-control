import { Navigate, Route, Routes } from 'react-router-dom'

import ExpenseReport from './pages/ExpenseReport'
import Login from './pages/Login'
import LayoutDefault from './template/LayoutDefault'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route element={<LayoutDefault />}>
        <Route path="/controle-financeiro" element={<ExpenseReport />} />
      </Route>
    </Routes>
  )
}

export default Router
