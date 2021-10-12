import PageWrapper from "../../components/PageWrapper";
import { FixedContentContainer, FixedContentTexts } from "./styles";
import { BiArrowBack } from 'react-icons/bi'
import { Link } from "react-router-dom";

function Perfil() {    
  return <PageWrapper
      fixedContent={
      <FixedContentContainer>
        <Link to='/'>
          <BiArrowBack size='15px' />
        </Link>
        <FixedContentTexts>
          <h1>Daniel Berg</h1>
          <h2> 11 Tweets</h2>
        </FixedContentTexts>
      </FixedContentContainer>
    }
    >
    Página de perfil
  </PageWrapper>
}

export default Perfil;
