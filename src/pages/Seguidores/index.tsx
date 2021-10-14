import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"
import PageWrapper from "../../components/PageWrapper"
import { IAuth, useGlobalState } from "../../context/GlobalContext"
import { FixedContentTexts, FixedContentContainer, FollowContainer, FollowTitle } from "./styles"

const Seguidores = () => {

    const {
        auth: { user }
    } = useGlobalState() as { auth: IAuth }
    return (
        <PageWrapper
            fixedContent={
                <>
                    <FixedContentContainer>
                        <Link to='/perfil'>
                            <BiArrowBack size='15px' />
                        </Link>
                        <FixedContentTexts>
                            <h1>{user.name}</h1>
                        </FixedContentTexts>
                    </FixedContentContainer>
                    <FollowContainer>
                        <FollowTitle isActive={true}>Seguidores</FollowTitle>
                        <FollowTitle isActive={false}>Seguindo</FollowTitle>
                    </FollowContainer>
                </>
            }
        >
            <h1>Página de seguidores</h1>
        </PageWrapper>
    )
}

export default Seguidores