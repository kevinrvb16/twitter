import PageWrapper from "../../components/PageWrapper";
import { Bio, CreatedAt, CreatedAtContainer, FixedContentContainer, FixedContentTexts, Follow, FollowContainer, ImageContainer, Name, TextsContainer, UserName } from "./styles";
import { BiArrowBack } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Button from "../../components/Button";

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
    <ImageContainer>
      <img src={`https://robohash.org/${2}`} alt={'2'} />
      <Button>Editar perfil</Button>
    </ImageContainer>
    <TextsContainer>
      <Name>Daniel Berg</Name>
      <UserName>@Daniel_berg</UserName>
      <Bio>
        CTO | Maratonas Academy Desenvolvedor FullStack
        VEGANO
        Eng Redes
      </Bio>
      <CreatedAtContainer>
        <FaRegCalendarAlt color="#778691" size="20px"/>
        <CreatedAt>Ingressou em Setembro 2013</CreatedAt>
      </CreatedAtContainer>
      <FollowContainer>
        <Follow>500 <span>Seguindo</span></Follow>
        <Follow>3 <span>Seguidores</span></Follow>
      </FollowContainer>
    </TextsContainer>
  </PageWrapper>
}

export default Perfil;
