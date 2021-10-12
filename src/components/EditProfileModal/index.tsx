import Modal from "../Modal"

interface IProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
const EditProfileModal: React.FC<IProps> = ({isOpen, setIsOpen}) => {
    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h1>Oiii</h1>
        </Modal>
    )
}

export default EditProfileModal