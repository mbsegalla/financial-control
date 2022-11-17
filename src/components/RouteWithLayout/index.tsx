import React from 'react'
import type { ComponentType } from 'react'
import { Route } from 'react-router-dom'

// TODO: Fix this type
interface RouteWithLayoutProps {
  component: ComponentType | any
  layout: ComponentType | any
  path: string
  exact?: boolean
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({ component: Component, layout: Layout, ...rest }: RouteWithLayoutProps) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}

export default RouteWithLayout
