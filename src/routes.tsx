import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import RouteWithLayout from './components/RouteWithLayout'
import DefaultLayout from './layout/DefaultLayout'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout path="/" exact component={Login} layout={DefaultLayout} />
        <RouteWithLayout path="/home" component={Home} layout={MainLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
