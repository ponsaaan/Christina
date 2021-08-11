import Head from 'next/head';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import { staticPath } from '@/lib/$path';

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
          <Header>ホーム</Header>
          <MyTweet>
            <ProfileIcon>
              <ProfileIconItem
                src={staticPath.samlepp_ico}
                alt="aaa"
                width="16"
              />
            </ProfileIcon>
            <TweetArea>
              <TweetAreaUpper>
                <TweetTextInput
                  type="text"
                  placeholder="いまどうしてる？"
                ></TweetTextInput>
                <TweetTextInputSub>全員が返信できます</TweetTextInputSub>
                <TweetTextUnderLine></TweetTextUnderLine>
              </TweetAreaUpper>
              <TweetAreaLower>
                <IconArea>写像</IconArea>
                <TweetButton>ツイートする</TweetButton>
              </TweetAreaLower>
            </TweetArea>
          </MyTweet>
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
  color: #d9d9d9;
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
const Header = styled.div`
  font-size: 2rem;
  color: #d9d9d9;
  width: 60rem;
`;
const MyTweet = styled.div`
  font-size: 2rem;
  width: 60rem;
  height: 20rem;
  display: flex;
`;
const Wrapper = styled.div`
  width: 60rem;
  padding-left: 6rem;
`;
const Timeline = styled.div`
  background: yellow;
  width: 60rem;
`;
const LogoArea = styled.div`
  height: 2em;
  color: #d9d9d9;
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
  color: #d9d9d9;
`;

const ProfileIcon = styled.div`
  background: blue;
  height: 100%;
  width: 12.2%;
`;
const ProfileIconItem = styled.img``;
const TweetArea = styled.div`
  background: red;
  height: 100%;
  width: 87.8%;
`;
const TweetAreaUpper = styled.div`
  height: 7em;
  background-color: #000000;
`;
const TweetAreaLower = styled.div`
  height: 3em;
  display: flex;
`;
const IconArea = styled.div`
  width: 70%;
`;
const TweetButton = styled.button`
  width: 14rem;
  height: 4.6rem;
  background: #1a91da;
  border-radius: 10px;
  border: transparent;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
`;
const TweetTextInput = styled.input`
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  background-color: #000000;
  color: #d9d9d9;
`;
const TweetTextInputSub = styled.button`
  width: 14rem;
  height: 4.6rem;
  background: #000000;
  border-radius: 10px;
  border: transparent;
  color: #1da1f2;
  font-size: 1rem;
  cursor: pointer;
`;
const TweetTextUnderLine = styled.div`
  position: relative;
  border-top: 1px solid #c2c2c2;
`;
