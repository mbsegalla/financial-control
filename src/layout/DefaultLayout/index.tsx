import React from 'react'
import type { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }: DefaultLayoutProps) => {
  return <div>{children}</div>
}

export default DefaultLayout
