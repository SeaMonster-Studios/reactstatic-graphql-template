import { injectGlobal } from 'react-emotion'
import reset from 'styled-reset'
//
import theme from './'

injectGlobal`
${reset}
  * { box-sizing: border-box; }

  #root,
  #app,
  #body { min-height: 100vh; }

  #body {
    position: relative; 
  }

  body {
    color: rgb(${color.gray});
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(${color.black[0]});
    font-family: ${font.family.sans};
  }

  a {
    transition: color 0.3s ease;
    color: rgb(${color.gray});
    text-decoration: underline;

    &:hover,
    &:focus {
      text-decoration: underline;
      color: rgb(${color.coral})
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
  }

  h1,
  h2 { text-align: center; }

  h1,
  .h1 {
    font-size: ${fontSize.h1}rem
  }

  h2,
  .h2 {
    font-size: ${fontSize.h2}rem
  }

  h3,
  .h3 {
    font-size: ${fontSize.h3}rem
  }

  h4,
  .h4 {
    font-size: ${fontSize.h4}rem
  }

  h5,
  .h5 {
    font-size: ${fontSize.h5}rem
  }

  h6,
  .h6 {
    font-size: ${fontSize.h6}rem
  }

  hr {
    border: 0;
    border-color: rgb(${color.coral});
    border-top-width: 2px;
    border-style: solid;
    margin-left: auto;
    margin-right: auto;
    width: 90px;
    margin-top: 27px;
    margin-bottom: 36px;
  }

  h1 + hr,
  h2 + hr,
  h3 + hr { margin-bottom: 54px; }

  ::selection {
    background: rgb(${color.coral});
    color: rgb(${color.white}) !important;
  }
`
