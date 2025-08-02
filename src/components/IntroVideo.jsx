import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function IntroVideo({ onTransition }) {
  const videoRef = useRef();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    video.play();

    const handleEnd = () => {
      video.pause();
      video.currentTime = video.duration;

      onTransition();   // ✅ 메인 콘텐츠 먼저 보여줌
      setFadeOut(true); // ✅ 그 후 인트로 영상 페이드아웃
    };

    video.addEventListener("ended", handleEnd);
    return () => video.removeEventListener("ended", handleEnd);
  }, [onTransition]);

  return (
    <FadeWrapper className={fadeOut ? "fade-out" : ""}>
      <StyledVideo
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
    </FadeWrapper>
  );
}

// ✅ 페이드아웃 애니메이션
const fadeOutAnim = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// ✅ 영상 래퍼
const FadeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  &.fade-out {
    animation: ${fadeOutAnim} 1.2s ease-in-out forwards;
  }
`;

// ✅ 영상 자체
const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
