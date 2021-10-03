import { BackGround, Center } from "./styles";

const Modal: React.FC = ({children}) => {
    return (
        <BackGround>
            <Center>{children}</Center>
        </BackGround>
    )
}
export default Modal;