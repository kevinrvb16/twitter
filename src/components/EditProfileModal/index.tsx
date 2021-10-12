import Modal from "../Modal"
import { IoClose } from 'react-icons/io5'
import { ModalBody, ModalHeader, ModalHeaderClose, ModalHeaderTtitle } from "./styles"
import Button from "../Button"
import Input from "../Input"
import { useState } from "react"
import { apiWithAuth } from "../../services/api"
import { toast } from "react-toastify"
interface IProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    getProfile: () => void
}
const EditProfileModal: React.FC<IProps> = ({ isOpen, setIsOpen, getProfile }) => {
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const isDisabled = (name === '' && bio === '' && password === '') ||
    (password.length > 0 && password.length < 8) ||
    loading
    
    const editUser = async () => {
        let requestBody = {}

        if(name !== ''){
            requestBody= {name}
        }
        if(bio !== ''){
            requestBody = {...requestBody, bio}
        }
        if(password.length >= 8){
            requestBody = {...requestBody, password}
        }

        setLoading(true)
        try{
            await apiWithAuth.put('/profile', requestBody)
            handleCloseModal(true)
        }catch(error){
            console.log({error})
            toast.error(
                error?.response?.data?.message.join('. ') || 'Não foi possivel atualizar o seu perfil'
            )
        }
        setLoading(false)
    }

    const handleCloseModal = (reloadPage = false) => {
        setName('')
        setBio('')
        setPassword('')
        setIsOpen(false)
        reloadPage && getProfile()
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleCloseModal}>
            <ModalHeader>
                <ModalHeaderClose>
                    <IoClose size="20px" color="#d9d9d9" onClick={() => handleCloseModal()} />
                    <ModalHeaderTtitle>Editar perfil</ModalHeaderTtitle>
                </ModalHeaderClose>
                <Button style={{ backgroundColor: "white", color: "black" }} height="33px" onClick={editUser} isDisabled={isDisabled}>Salvar</Button>
            </ModalHeader>
            <ModalBody>
                <Input placeholder="Nome" value = {name} onChange= { (e) => setName(e.target.value)} />
                <Input placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
                <Input placeholder="Senha (mín de 8 caracteres)" type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
            </ModalBody>

        </Modal>
    )
}

export default EditProfileModal