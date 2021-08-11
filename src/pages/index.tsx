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
          <UpperNav>
            <LogoArea>ロゴ</LogoArea>
            <MainArea>
              <Item>ホーム</Item>
              <Item>話題の検索</Item>
              <Item>通知</Item>
              <Item>メッセージ</Item>
              <Item>ブックマーク</Item>
              <Item>リスト</Item>
              <Item>
                <ButtonArea>ツイートする</ButtonArea>
              </Item>
            </MainArea>
          </UpperNav>
          <LowerNav>
            <ProfileArea>プロフィール</ProfileArea>
          </LowerNav>
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
  justify-content: space-between;
  width: 30rem;
  padding-left: 10rem;
`;

const UpperNav = styled.div``;
const LowerNav = styled.div``;
const Item = styled.div`
  font-size: 2rem;
`;
const ButtonArea = styled.button`
  width: 14rem;
  height: 4.6rem;
  background: #1a91da;
  border-radius: 10px;
  border: transparent;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
`;
const Header = styled.div``;
const MyTweet = styled.div``;
const Wrapper = styled.div``;
const Timeline = styled.div``;
const LogoArea = styled.div`
  height: 2em;
`;
const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30em;
`;
const ProfileArea = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px solid black;
`;
