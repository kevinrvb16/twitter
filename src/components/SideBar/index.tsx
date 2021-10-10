import { FaTwitter } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"
import { Button, Container, Title } from "./styles"
import { Link, useLocation, useHistory } from "react-router-dom"
import { useGlobalState } from "../../context/GlobalContext"
const SideBar: React.FC = () => {
    const { removeAuth} = useGlobalState()
    const location = useLocation()
    const history = useHistory()

    const logout = () => {
        removeAuth()
        history.push("/login")

    }

    return (
        <Container>
            <FaTwitter color="#fff" size="25px" />
            <Link to="/">
            <Button isSelected = {location.pathname === '/'}>
                <FaTwitter color="#fff" size="25px" />
                <Title>Página Inicial</Title>
            </Button>
            </Link>
            <Link to="/perfil">
                <Button isSelected = {location.pathname === '/perfil'}>
                    <BsPerson color="#fff" size="25px" />
                    <Title>Perfil</Title>
                </Button>
            </Link>
            <Button onClick={logout}>
                <FiLogOut color="#fff" size="25px" />
                <Title>Fazer Logout</Title>
            </Button>
        </Container>
    )
}

export default SideBar