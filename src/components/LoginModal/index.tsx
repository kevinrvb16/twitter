import { useState } from "react"
import { useHistory } from "react-router-dom"
import { FaTwitter } from "react-icons/fa"
import { toast } from "react-toastify"
import Input from "../../Input"
import { api } from "../../services/api"
import validateLoginFields from "../../utils/validateLoginFields"
import Button from "../Button"
import Modal from "../Modal"
import { CenterImage, InputContainer, Title } from "./styles"
import { useGlobalState } from "../../context/GlobalContext"

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoginModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const {setAuth} = useGlobalState()
  const history = useHistory()
  const isDisabled =
    email === "" || password === "" || loading;

   const createAccount = async () => {
    const validation = validateLoginFields( email,
      password)
    if(typeof validation === "string"){
      toast.error(validation)
    }

    setLoading(true)
    try {
      await api.post('/login', {
        email,
        password
      })
      history.push('/')
      //onClose()
    } catch (error) {
      toast.error(error?.response?.data?.message || "Não foi possível efetuar login!")
    }
    setLoading(false)
  };

  const onClose = () => {
    setEmail('')
    setPassword('')
    setIsOpen(false)
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}>
      <CenterImage>
        <FaTwitter color="#d9d9d9" size={28} />
      </CenterImage>

      <Title>Entre no Twitter</Title>
      <InputContainer>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <Button
        isDisabled={isDisabled}
        height="47px"
        width="100%"
        onClick={createAccount}
      >
        Fazer login
      </Button>
    </Modal>
  );
};
export default LoginModal
