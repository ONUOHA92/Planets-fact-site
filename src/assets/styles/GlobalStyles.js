import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}
*, *::after, *::before {
    box-sizing: border-box;
}
body{
    margin: 0;
    font-family: 'Antonio', sans-serif;
    min-height: 100vh;
}
a, button{
    font-family: 'Montserrat', sans-serif;
}
`;
