import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assests/wave.svg'


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: blue;
  }
  .score {
    color: #995ff0;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, #640ce9);
    font-weight: 380;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 60px;
    text-align: center;
    margin: 0px;
  }
  img {
      width:200px;
  }
  .start, .next, .results {
    cursor: pointer;
    background: #fffff2;
    border: 2px solid #c5d358;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 10px 0;
    padding: 0 40px;
    color:#640ce9;
  }
  .start {
    max-width: 200px;
  }
  select{
    background: #fffff2;
    text-align: center;
    text-align-last: center;
    border: 2px solid #c5d358;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    padding: 0 40px;
    margin-bottom:40px;
    color:#640ce9;
  }`;