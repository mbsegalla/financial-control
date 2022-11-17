import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

import { ButtonBase } from './styles'

const Logout: React.FC = () => {
  const handleLogout = () => {
    console.log('saindo')
  }

  return (
    <ButtonBase>
      <FaPowerOff title="Sair" onClick={handleLogout} />
    </ButtonBase>
  )
}

export default Logout
