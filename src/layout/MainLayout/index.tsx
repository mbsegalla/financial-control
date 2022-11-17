import React from 'react'
import type { ReactNode } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { HeaderBase, CenterBase, FooterBase } from './styles'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderBase>
        <Header />
      </HeaderBase>

      <CenterBase>
        <div>{children}</div>
      </CenterBase>

      <FooterBase>
        <Footer />
      </FooterBase>
    </>
  )
}

export default MainLayout
