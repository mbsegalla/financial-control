import { useUserStore } from '../../stores/userStore'

import { Container, Wrapper } from './styles'

const Header = () => {
  const { fullName } = useUserStore()

  return (
    <Container>
      <Wrapper>
        <span>Olá, {fullName}! </span>
      </Wrapper>
    </Container>
  )
}

export default Header
