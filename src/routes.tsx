import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import RouteWithLayout from './components/RouteWithLayout'
import DefaultLayout from './layout/DefaultLayout'
import MainLayout from './layout/MainLayout'
import Consult from './pages/Consult'
import Login from './pages/Login'
import Register from './pages/Register'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout path="/" exact component={Login} layout={DefaultLayout} />
        <RouteWithLayout path="/register" component={Register} layout={MainLayout} />
        <RouteWithLayout path="/consult" component={Consult} layout={MainLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
