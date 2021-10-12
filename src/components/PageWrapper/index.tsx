import Main from "../../components/Main";
import SearchInput from "../../components/SearchInput";
import SideBar from "../../components/SideBar";
import { Container } from "./styles";

interface IProps{
    fixedContent?: JSX.Element
}
const PageWrapper: React.FC<IProps> = ( {children, fixedContent} ) => {    
  return (
    <Container>
      <SideBar/>
      <Main fixedContent = {fixedContent}>
          {children}
      </Main>
      <SearchInput/>
    </Container>
  )
}

export default PageWrapper;
