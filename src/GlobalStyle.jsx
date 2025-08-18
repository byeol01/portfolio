// src/GlobalStyle.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    min-height: 100vh;
    min-height: 850px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffffff;
    color: #213547;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    cursor: none;
    box-sizing: border-box;
    overflow-x: hidden; // 가로 스크롤 방지
  }

  // 인트로 영상이 표시되는 동안 body 스크롤 방지
  body.intro-playing {
    overflow: hidden;
  }

  // 메인 콘텐츠가 표시된 후 body 스크롤 허용
  body.main-content-visible {
    overflow: auto;
  }

  // 반응형 기본 설정
  img {
    max-width: 100%;
    height: auto;
  }

  // 터치 디바이스 최적화
  @media (hover: none) and (pointer: coarse) {
    body {
      cursor: auto; // 모바일에서는 커서 표시
    }
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
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
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
  
  /* 모바일에서 스크롤바 숨기기 */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 6px;
    }
  }
`;

export default GlobalStyle;
