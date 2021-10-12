import { useEffect, useState } from "react";
import Button from "../../components/Button";
import PageWrapper from "../../components/PageWrapper";
import Tweet from "../../components/Tweet";
import { IAuth, useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../services/api";
import { TweetButton, TweetContainer, TweetInput, UserName } from "./styles";

interface ITweet {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
  };
  created_at: string;
}

function Home() {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  const {
    auth: { user },
  } = useGlobalState() as { auth: IAuth };

  const getFeed = async () => {
    const { data } = await apiWithAuth.get<ITweet[]>("/feed");

    setTweets(data);
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    <PageWrapper
      fixedContent={
        <>
          <UserName>{user.name}</UserName>
          <TweetContainer>
            <img
              src={`https://robohash.org/${user.username}`}
              alt={user.name}
            />
            <TweetInput placeholder="O que está acontecendo" />
          </TweetContainer>
          <TweetButton>
            <Button>Tweet</Button>
          </TweetButton>
        </>
      }
    >
      {tweets.map((tweet) => (
        <Tweet username={tweet.user.username} name={tweet.user.name} key={tweet.id}>
          {tweet.content}

        </Tweet>
      ))}
    </PageWrapper>
  );
}

export default Home;
