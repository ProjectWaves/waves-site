import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  ${'' /* @import url('https://fonts.googleapis.com/css?family=Karla|Lato'); */}
  
  :root {
    --primary-color: #7BA7FF;
    --white: #FFFAFF;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    overflow: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;
