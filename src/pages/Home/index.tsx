import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    auth: { user },
  } = useGlobalState() as { auth: IAuth };

  const createTweet = async () => {
    setLoading(true)
    try{
      await apiWithAuth.post<ITweet[]>("/tweets", {content})
      setContent('')
      await getFeed()
    } catch( err) {
      console.log({err})
      toast.error(err?.response?.data?.message.join(". ") || 'Não foi possovel fazer o tweet')
    }
    setLoading(false)
  }

  const getFeed = async () => {
    setLoading(true)
    try {
      const { data } = await apiWithAuth.get<ITweet[]>("/feed");
      setTweets(data);
    } catch( err) {
      console.log({err})
      toast.error(err?.response?.data?.message.join(". ") || 'Não foi possovel carregar o tweet')
    }
    setLoading(false)

    
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
            <TweetInput placeholder="O que está acontecendo" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
          </TweetContainer>
          <TweetButton>
            <Button onClick={createTweet} isDisabled={loading || content === ''}>Tweet</Button>
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
