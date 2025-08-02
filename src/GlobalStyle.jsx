// src/GlobalStyle.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body, html, #root {
    height: 100vh;
    min-height: 850px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffffff;
    color: #213547;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    cursor: none;
    box-sizing: border-box;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.25s ease;
  }
  a:hover {
    color: #535bf2;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    color: white;
    cursor: pointer;
    transition: border-color 0.25s ease;
  }
  button:hover {
    border-color: #cbceff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 1.1;
    color: #213547;
  }
  /* 스크롤바 스타일 (크롬, 사파리, 엣지) */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffd9ec;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff0f6;
    border-radius: 10px;
  }

  /* 파이어폭스용 (선택사항) */
  * {
    scrollbar-color: #ffd9ec #fff0f6;
    scrollbar-width: thin;
  }
`;


export default GlobalStyle;
