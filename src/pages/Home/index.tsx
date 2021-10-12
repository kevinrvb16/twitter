import Main from "../../components/Main";
import SearchInput from "../../components/SearchInput";
import SideBar from "../../components/SideBar";
import { Container } from "./styles";

function Home() {    
  return (
    <Container>
      <SideBar/>
      <Main/>
      <SearchInput/>
    </Container>
  )
}

export default Home;
