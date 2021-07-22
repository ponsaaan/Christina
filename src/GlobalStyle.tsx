import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
