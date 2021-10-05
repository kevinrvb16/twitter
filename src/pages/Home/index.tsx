import { useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../services/api";

function App() {
    const { auth } = useGlobalState()

    apiWithAuth.get("/feed")
    
  return <h1>Usuário logado: {auth?.user.name}</h1>
}

export default App;
