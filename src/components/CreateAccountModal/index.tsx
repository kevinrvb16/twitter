import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import Input from "../../Input";
import Button from "../Button";
import Modal from "../Modal";
import { CenterImage, InputContainer, Title } from "./styles";

interface IProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isDisabled = name === '' || username === '' || email === '' || password === ''

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <CenterImage>
                <FaTwitter color="#d9d9d9" size={28} />
            </CenterImage>
            
            <Title>Criar sua conta</Title>
            <InputContainer>
                <Input placeholder="Nome" value={name} onChange= {(e) => setName(e.target.value)}/>
                <Input placeholder="Username" value={username} onChange= {(e) => setUsername(e.target.value)}/>
                <Input placeholder="E-mail" type="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </InputContainer>
            <Button isDisabled={isDisabled} height="47px" width="100%">Criar conta</Button>
        </Modal>
    )
}
export default CreateAccountModal;