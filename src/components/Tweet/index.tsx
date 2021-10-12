import { Container, TweetNames, TweetText } from "./styles"

interface IProps {
    name: string;
    username: string
}

const Tweet: React.FC<IProps> = ({ children, name, username }) => {

    return (
        <Container>
            <img
                src={`https://robohash.org/${username}`} alt={name}
            />
            <TweetText>
                <TweetNames>
                    <h1>{name} </h1>
                    <h2> @{username}</h2>
                </TweetNames>
                <TweetText>
                    {children}
                </TweetText>
            </TweetText>
        </Container>
    )
}

export default Tweet