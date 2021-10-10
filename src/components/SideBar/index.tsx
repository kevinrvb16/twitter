import { FaTwitter } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"
import { Button, Title } from "./styles"
import { useLocation } from "react-router-dom"
const SideBar: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <FaTwitter color="#fff" size="25px" />
            <Button isSelected = {location.pathname === '/'}>
                <FaTwitter color="#fff" size="25px" />
                <Title>Página Inicial</Title>
            </Button>
            <Button isSelected = {location.pathname === '/perfil'}>
                <BsPerson color="#fff" size="25px" />
                <Title>Perfil</Title>
            </Button>
            <Button>
                <FiLogOut color="#fff" size="25px" />
                <Title>Fazer Logout</Title>
            </Button>
        </>
    )
}

export default SideBar