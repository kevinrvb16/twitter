import { useGlobalState } from "../../context/GlobalContext";

function App() {

    const { auth } = useGlobalState()
    console.log({auth})
  return (
    <div>
      <h1>Usuário logado: {auth?.user.name}</h1>
    </div>
  )
}

export default App;
