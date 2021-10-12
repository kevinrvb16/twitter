import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import Input from "../Input";
import { api } from "../../services/api";
import validateCreateAccountFields from "../../utils/validateCreateAccountFields";
import Button from "../Button";
import Modal from "../Modal";
import { CenterImage, InputContainer, Title } from "./styles";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isDisabled =
    name === "" || username === "" || email === "" || password === "" || loading;

  const createAccount = async () => {
    const validation = validateCreateAccountFields(name, username, email, password)
    if(typeof validation === "string"){
      toast.error(validation)
      return
    }

    setLoading(true)
    try {
      await api.post('/users', {
        name,
        username,
        email,
        password
      })
      toast.success("Conta criada com sucesso!")
      onClose()
    } catch (error) {
      toast.error(error?.response?.data?.message.join('. ') || "Não foi possível criar a conta!")
    }
    setLoading(false)
  };

  const onClose = () => {
    setName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setIsOpen(false)
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}>
      <CenterImage>
        <FaTwitter color="#d9d9d9" size={28} />
      </CenterImage>

      <Title>Criar sua conta</Title>
      <InputContainer>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        Criar conta
      </Button>
    </Modal>
  );
};
export default CreateAccountModal;
