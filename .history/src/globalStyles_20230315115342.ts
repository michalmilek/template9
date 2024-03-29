// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

  body {
    font-family: 'Poppins', sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
