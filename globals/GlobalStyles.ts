import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #393E46;
    font-weight: var(--fw-normal);
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--spacing-4x);
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    vertical-align: middle;
  }

  figure {
    position: relative;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
