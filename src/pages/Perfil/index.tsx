import PageWrapper from "../../components/PageWrapper";
import { Bio, CreatedAt, CreatedAtContainer, FixedContentContainer, FixedContentTexts, Follow, FollowContainer, ImageContainer, Name, TextsContainer, UserName } from "./styles";
import { BiArrowBack } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { apiWithAuth } from "../../services/api";
import { toast } from "react-toastify";
import Tweet from "../../components/Tweet";
import EditProfileModal from "../../components/EditProfileModal";

interface ITweet {
  id: string
  content: string
}
interface IProfile {
  id: string
  name: string
  bio: string | null
  username: string
  email: string
  created_at: string
  updated_at: string
  number_of_followers: number
  number_of_follows: number
  tweets: ITweet[]
}
function Perfil() {

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState( false )
  const [profile, setProfile] = useState<IProfile>()

  const getProfile = async () => {
    try {
      const { data } = await apiWithAuth.get('/profile')

      setProfile(data)
    } catch (error) { 
      console.log({error})
      toast.error(
        error?.response?.data?.message.join('. ') || 'Erro ao carregar o perfil'
      )
     }
  }
  useEffect(() => {
    getProfile()
  }, [])

  return (
    <PageWrapper
      fixedContent={
        <FixedContentContainer>
          <Link to='/'>
            <BiArrowBack size='15px' />
          </Link>
          <FixedContentTexts>
            <h1>{profile?.name}</h1>
            <h2> {profile?.tweets.length} Tweets</h2>
          </FixedContentTexts>
        </FixedContentContainer>
      }
    >
      <EditProfileModal isOpen={isEditProfileModalOpen} setIsOpen={setIsEditProfileModalOpen} />
      {profile && (
        <>
          <ImageContainer>
            <img src={`https://robohash.org/${profile?.username}`} alt={profile?.name} />
            <Button height="33px" onClick={() => setIsEditProfileModalOpen(true)}>Editar perfil</Button>
          </ImageContainer>
          <TextsContainer>
            <Name>{profile?.name}</Name>
            <UserName>@{profile?.username}</UserName>
            <Bio>
              {profile?.bio}
            </Bio>
            <CreatedAtContainer>
              <FaRegCalendarAlt color="#778691" size="20px" />
              <CreatedAt>Ingressou em {new Date(profile?.created_at).toLocaleDateString('pt-BR', { month: "long" })} de {new Date(profile.created_at).getFullYear()}</CreatedAt>
            </CreatedAtContainer>
            <FollowContainer>
              <Follow>{profile?.number_of_follows} <span>Seguindo</span></Follow>
              <Follow>{profile?.number_of_followers} <span>Seguidores</span></Follow>
            </FollowContainer>
          </TextsContainer>

          {profile.tweets.map(tweet => (
            <Tweet key={tweet.id} name={profile.name} username={profile.username}>
              {tweet.content}
            </Tweet>
          ))}
        </>
      )}
    </PageWrapper>
  )
}

export default Perfil;
