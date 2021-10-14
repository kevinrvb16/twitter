import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { IAuth, useGlobalState } from "../../context/GlobalContext";
import {
    FixedContentTexts,
    FixedContentContainer,
    FollowContainer,
    FollowTitle,
    UserContainer,
    UserText,
} from "./styles";

const Seguidores = () => {
    const {
        auth: { user },
    } = useGlobalState() as { auth: IAuth };
    return (
        <PageWrapper
            fixedContent={
                <>
                    <FixedContentContainer>
                        <Link to="/perfil">
                            <BiArrowBack size="15px" />
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
            <Link to={`/perfil/${user.username}`}>
                <UserContainer>
                    <img src={`https://robohash.org/${user.username}`} alt={user.name} />
                    <UserText>

                        <h1>{user.name}</h1>
                        <h2>@{user.username}</h2>
                        <p>CTO | Maratonas</p>
                    </UserText>
                </UserContainer>
            </Link>
            <Link to={`/perfil/${user.username}`}>
                <UserContainer>
                    <img src={`https://robohash.org/${user.username}`} alt={user.name} />
                    <UserText>

                        <h1>{user.name}</h1>
                        <h2>@{user.username}</h2>
                        <p>CTO | Maratonas</p>
                    </UserText>
                </UserContainer>
            </Link>
        </PageWrapper>
    );
};

export default Seguidores;
