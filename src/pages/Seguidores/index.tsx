/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PageWrapper from "../../components/PageWrapper";
import { IAuth, useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../services/api";
import {
    FixedContentTexts,
    FixedContentContainer,
    FollowContainer,
    FollowTitle,
    UserContainer,
    UserText,
} from "./styles";

interface IParams {
    username: string
}

interface IUser {
    id: string
    name: string
    bio: string | null
    username: string
}

interface IFollows {
    name: string
    follows: IUser[]
    followers: IUser[]
}

const Seguidores = () => {

    const [data, setData] = useState<IFollows>()
    const [showFollowers, setShowFollowers] = useState(true)
    const history = useHistory()
    const { username } = useParams<IParams>()

    const isMyFollowsPage = !username

    console.log(username)

    const {
        auth: { user },
    } = useGlobalState() as { auth: IAuth };

    const getFollows = async () => {
        try {
            const { data } = await apiWithAuth.get(isMyFollowsPage? '/profile/follows' : `/users/${username}/follows`)
            setData(data)
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message?.join('. ') || 'Erro ao carregar seguidores')
        }
    }

    useEffect(() => {
        getFollows()
    }, [username])
    return (
        <PageWrapper
            fixedContent={
                <>
                    <FixedContentContainer>
                        <BiArrowBack size="15px" onClick={() => history.goBack()}/>
                        <FixedContentTexts>
                            <h1>{isMyFollowsPage? user.name : data?.name}</h1>
                        </FixedContentTexts>
                    </FixedContentContainer>
                    <FollowContainer>
                        <FollowTitle isActive={showFollowers} onClick={() => setShowFollowers(true)} >Seguidores</FollowTitle>
                        <FollowTitle isActive={!showFollowers} onClick={() => setShowFollowers(false)} >Seguindo</FollowTitle>
                    </FollowContainer>
                </>
            }
        >
            {showFollowers? (
                data?.followers.map(follower => (
                    <Link to={`/perfil/${follower.username}`} key={follower.id}>
                        <UserContainer>
                            <img src={`https://robohash.org/${follower.username}`} alt={follower.name} />
                            <UserText>
                                <h1>{follower.name}</h1>
                                <h2>@{follower.username}</h2>
                                <p>{follower.bio}</p>
                            </UserText>
                        </UserContainer>
                    </Link>
                ))
            ): (
                data?.follows.map(follow => (
                    <Link to={`/perfil/${follow.username}`} key={follow.id}>
                        <UserContainer>
                            <img src={`https://robohash.org/${follow.username}`} alt={follow.name} />
                            <UserText>
                                <h1>{follow.name}</h1>
                                <h2>@{follow.username}</h2>
                                <p>{follow.bio}</p>
                            </UserText>
                        </UserContainer>
                    </Link>
                ))
            )}
        </PageWrapper>
    );
};

export default Seguidores;
