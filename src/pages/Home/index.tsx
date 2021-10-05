import { useGlobalState } from "../../context/GlobalContext";

function App() {

    const { auth } = useGlobalState()
  return (
    <h1>Usuário logado: {auth?.user.name}</h1>
  )
}

export default App;
