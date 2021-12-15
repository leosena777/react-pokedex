import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
    font-family: Arial, Helvetica, sans-serif; 
    font-weight: 700;
  }
  @font-face {
    font-family: Arial, Helvetica, sans-serif; 
    font-weight: 500;
  }
  @font-face {
    font-family: Arial, Helvetica, sans-serif; 
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.text.white};
    color: ${({ theme }) => theme.colors.text.black};
    font-family: Arial, Helvetica, sans-serif; 
    -webkit-font-smoothing: antialiased;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/images/pokeball.png');
    background-size: cover;
    
  }
  body, input, button, a {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-family: Arial, Helvetica, sans-serif; 
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
