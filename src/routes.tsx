import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import RouteWithLayout from './components/RouteWithLayout'
import DefaultLayout from './layout/DefaultLayout'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import Register from './pages/Register'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout path="/" exact component={Login} layout={DefaultLayout} />
        <RouteWithLayout path="/home" component={Register} layout={MainLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
