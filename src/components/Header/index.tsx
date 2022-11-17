import React from 'react'

import headerImage from '../../assets/header-image.svg'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import { Container, Image } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={headerImage} />
      <Navbar />
      <Logout />
    </Container>
  )
}

export default Header
