import Button from "../../components/Button";
import PageWrapper from "../../components/PageWrapper";
import { useGlobalState } from "../../context/GlobalContext";
import { TweetButton, TweetContainer, TweetInput, UserName } from "./styles";

function Home() {

  const { auth } = useGlobalState()
  return (
    <PageWrapper fixedContent={
      <>
        <UserName>{auth?.user.name}</UserName>
        <TweetContainer>
          <img
            src={`https://robohash.org/${auth?.user.username}`}
            alt={auth?.user.name}
          />
          <TweetInput placeholder="O que está acontecendo" />
        </TweetContainer>
        <TweetButton>
          <Button>Tweet</Button>
        </TweetButton>
      </>
    }>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>
      <h1>Meu primeiro tweet!</h1>
      <h1>Meu segundo tweet!</h1>
      <h1>Meu terceiro tweet!</h1>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}></div>

    </PageWrapper>
  )
}

export default Home;
