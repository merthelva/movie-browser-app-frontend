import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: var(--fw-normal);
    background-color: #393E46;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
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
