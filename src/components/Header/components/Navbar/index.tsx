import React from 'react'
import { MdOutlineAppRegistration } from 'react-icons/md'
import { MdOutlineAnalytics } from 'react-icons/md'

import { Ul, Li } from './styles'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Ul>
        <Li>
          <MdOutlineAppRegistration />
          <a href="register">Registrar</a>
        </Li>
        <Li>
          <MdOutlineAnalytics />
          <a href="/consult">Consultar</a>
        </Li>
      </Ul>
    </nav>
  )
}

export default Navbar
