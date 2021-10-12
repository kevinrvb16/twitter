import Modal from "../Modal"
import { IoClose } from 'react-icons/io5'
import { ModalBody, ModalHeader, ModalHeaderClose, ModalHeaderTtitle } from "./styles"
import Button from "../Button"
import Input from "../Input"
interface IProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
const EditProfileModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ModalHeader>
                <ModalHeaderClose>
                    <IoClose size="20px" color="#d9d9d9" onClick={() => setIsOpen(false)} />
                    <ModalHeaderTtitle>Editar perfil</ModalHeaderTtitle>
                </ModalHeaderClose>
                <Button style={{ backgroundColor: "white", color: "black" }} height="33px">Salvar</Button>
            </ModalHeader>
            <ModalBody>
                <Input placeholder="Nome" />
                <Input placeholder="Bio" />
                <Input placeholder="Senha" type="password" />
            </ModalBody>

        </Modal>
    )
}

export default EditProfileModal