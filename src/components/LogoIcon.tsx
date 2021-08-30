import styled from 'styled-components';
import { staticPath } from '@/lib/$path';

export const LogoIcon: React.VFC = () => {
  return <Main src={staticPath.twittericon_ico} alt="aaa" width="16" />;
};

const Main = styled.img`
  height: 4em;
  width: 4em;
`;
