import { createGlobalStyle } from 'styled-components';

import { device } from './constants';

const darkTheme = {
  colors: {
    bg: '#8298ab',
    bg2: '#001529',
    font: '#E5E4E8',
    main: 'orange',
  },
};

const lightTheme = {
  colors: {
    bg: 'white',
    bg2: 'white',
    font: 'black',
    main: 'blue',
  },
};

export const appTheme = {
  dark: darkTheme,
  light: lightTheme,
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div#root {
    @media ${device.tablet} { 
      max-width: 768px;
      margin: 0 auto;
    }
  }
`;
