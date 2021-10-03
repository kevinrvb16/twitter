import { Button, Container, BackgroundContainer, RightContainer } from './styles'
import Background from '../../assets/images/login-bg.png'
import {FaTwitter} from 'react-icons/fa'
import { useState } from 'react'
import CreateAccountModal from '../../components/CreateAccountModal'

const Login: React.FC = () => {
    const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    
    return (
        <Container>
            <CreateAccountModal isOpen={isCreateAccountModalOpen} setIsOpen={setIsCreateAccountModalOpen}/>
            <BackgroundContainer>
                <img src={Background} alt="Fundo do Twitter" />
            </BackgroundContainer>
            <RightContainer>
                <FaTwitter color="D9D9D9" size={40}/>
                <h1>Acontecendo agora</h1>
                <h2>Inscreva-se no Twitter hoje mesmo.</h2>
                <Button onClick={ () => setIsCreateAccountModalOpen(true)}>Escreva-se com email</Button>
                <p> Já tem uma conta? {' '}
                    <span>
                         Entre
                    </span>
                </p>
            </RightContainer>
        </Container>
    )
}

export default Login