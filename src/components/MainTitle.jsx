import React from "react";
import styled from "styled-components";
import TypingText from "./TypingText";

export default function MainTitle({ show }) {
  return (
    <TitleWrapper className={show ? "show" : ""}>
      <Content>
        <OverlayText>
          <TypingText texts={["UX/UI Designer", "Publisher", "Front-end Developer"]} />
        </OverlayText>
      </Content>
    </TitleWrapper>
  );
}

// 스타일 컴포넌트

const TitleWrapper = styled.div`
box-sizing: border-box;
  opacity: 1;
  transition: opacity 2s ease-in-out;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  overflow: visible;
  background: white;

  margin-top: 0;
  padding-top: 0;
`;

const OverlayText = styled.div`
  position: relative;
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 600;
  color: #333;
  min-height: 32px;
  margin-left: 50px;
  
  @media (max-width: 1200px) {
    margin-left: 0;
    font-size: 24px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 20px;
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 25%;
  margin-left: 32%;
  
  @media (max-width: 1200px) {
    margin-left: 0;
    margin-bottom: 15%;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10%;
    height: 80vh;
  }
`;
