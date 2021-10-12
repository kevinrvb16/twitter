import Button from "../../components/Button";
import PageWrapper from "../../components/PageWrapper";
import Tweet from "../../components/Tweet";
import { IAuth, useGlobalState } from "../../context/GlobalContext";
import { TweetButton, TweetContainer, TweetInput, UserName } from "./styles";

function Home() {
  const { auth: {user} } = useGlobalState() as { auth: IAuth }

  return (
    <PageWrapper fixedContent={
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
    }>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
      <Tweet username={user.username} name={user.name}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati, reprehenderit rem optio adipisci soluta autem. Consequatur cum, facere esse inventore laboriosam saepe dignissimos iste dolor architecto error aut officiis!
      </Tweet>
    </PageWrapper>
  )
}

export default Home;
