import { createGlobalStyle } from "styled-components";
import Suprema from "./components/platforms/fonts/Futura.ttf";
import NotoSansSC from "./components/platforms/fonts/NotoSansSC-Medium.otf";
import SourceSansPro from "./components/platforms/fonts/SourceSansPro-Regular.ttf";
import Lato from "./components/platforms/fonts/Lato-Light.ttf";
import Quicksand from "./components/platforms/fonts/Quicksand-Bold.ttf";

const GlobalStyles = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

@font-face {
  font-family: 'Suprema';
  src: local('Suprema'), url(${Suprema}) format('truetype');
}

@font-face {
  font-family: 'NotoSansSC';
  src: local('NotoSansSC'), url(${NotoSansSC}) format('opentype');
}

@font-face {
  font-family: 'SourceSansPro';
  src: local('SourceSansPro'), url(${SourceSansPro}) format('truetype');
}

@font-face {
  font-family: 'Lato';
  src: local('Lato'), url(${Lato}) format('truetype');
}

@font-face {
  font-family: 'Quicksand';
  src: local('Quicksand'), url(${Quicksand}) format('truetype');
}


`;

export default GlobalStyles;
