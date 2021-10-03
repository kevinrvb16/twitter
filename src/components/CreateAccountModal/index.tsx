import { FaTwitter } from "react-icons/fa";
import Button from "../Button";
import Modal from "../Modal";
import { CenterImage, Title } from "./styles";

interface IProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <CenterImage>
                <FaTwitter color="#d9d9d9" size={28} />
            </CenterImage>
            
            <Title>Criar sua conta</Title>
            <Button height="47px" width="100%">Criar conta</Button>
        </Modal>
    )
}
export default CreateAccountModal;