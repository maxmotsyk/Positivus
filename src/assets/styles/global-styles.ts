import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  ol, ul,li {
    list-style: none;
    text-decoration:none;
  }

  input, a, button, textarea, select {
    font-family: 'Space Grotesk', sans-serif;
    margin:0;
  }

  a {
  
    color: inherit;
    text-decoration: none;
  }
	
  body {
    font-family: 'Space Grotesk', sans-serif;
  }

  h1{
    font-size: 60px;
  }

  h2{
    font-size:40px;
  }

  h3{
    font-size:30px;
  }

  h4{
    font-size: 20px
  }

  a,p,li{
    font-size: 18px;
  }

`;

export default GlobalStyle;
