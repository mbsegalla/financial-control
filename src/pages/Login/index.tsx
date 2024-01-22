import { TbUserSquareRounded } from 'react-icons/tb'

import LoginForm from '../../components/LoginForm'

import { Container, TitleBase, Wrapper } from './styles'

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <TitleBase>
          <TbUserSquareRounded />
        </TitleBase>

        <LoginForm />
      </Wrapper>
    </Container>
  )
}

export default Login
