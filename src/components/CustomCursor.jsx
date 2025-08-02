import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 모바일 여부 확인
    const checkMobile = () => {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ];
      setIsMobile(toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem)));
    };

    checkMobile();

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  if (isMobile) return null; // 모바일은 기본 커서 유지

  return (
    <Cursor
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

const Cursor = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background: url("/mouse.png") no-repeat center; /* ✅ 여기 수정됨 */
  background-size: contain;
  transition: transform 0.1s ease-out;
`;
