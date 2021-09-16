import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-500: #ffffff;
    
    --gray-100: #F8F8FA;
    --gray-200: #F3F1FC;
    --gray-250: #D8D7D7;
    --gray-300: #C4C4C4;
    --gray-400: #C8C8CA;
    --gray-600: #656469;
    --gray-700: #313136;

    --blue-500: #7B89F4;

    --purple-200: #E6D3F1;
    --purple-300: #C5C2F2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
