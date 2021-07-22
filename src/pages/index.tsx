import Head from 'next/head';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Container>
        <Navigation>
          <LogoArea>ロゴ</LogoArea>
          <MainArea>メイン</MainArea>
          <ProfileArea>プロフィール</ProfileArea>
        </Navigation>

        <Wrapper>
          <Header>ヘッダー</Header>
          <MyTweet>自分が投稿する場所</MyTweet>
          <Timeline>タイムライン</Timeline>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 0 0.5rem;
  height: 100vh;
`;

const Navigation = styled.div`
display: flex;
flex-direction: column;
width: 20rem;
`;

const Header = styled.div``;
const MyTweet = styled.div``;
const Wrapper = styled.div``;
const Timeline = styled.div``;
const LogoArea = styled.div`
  height: 2em;
`;
const MainArea = styled.div``;
const ProfileArea = styled.div`
  margin-bottom: 0;
`;
