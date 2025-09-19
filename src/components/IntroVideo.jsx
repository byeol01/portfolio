import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function IntroVideo({ onTransition }) {
  const videoRef = useRef();
  const [fadeOut, setFadeOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // 인트로 영상 재생 중에는 body 스크롤 방지
    document.body.classList.add('intro-playing');
    
    const video = videoRef.current;
    
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      // 비디오가 로드된 후에만 재생
      video.play().catch(error => {
        console.log('비디오 자동재생 실패:', error);
        // 자동재생이 실패해도 계속 진행
        handleVideoEnd();
      });
    };

    const handleEnd = () => {
      handleVideoEnd();
    };

    const handleError = (error) => {
      console.error('비디오 로딩 에러:', error);
      // 에러 발생 시에도 메인 콘텐츠 표시
      handleVideoEnd();
    };

    const handleVideoEnd = () => {
      // body 클래스 제거하고 스크롤 허용
      document.body.classList.remove('intro-playing');
      document.body.classList.add('main-content-visible');
      
      onTransition();   // 메인 콘텐츠 먼저 보여줌
      setFadeOut(true); // 그 후 인트로 영상 페이드아웃
      
      // 페이드아웃 애니메이션 완료 후 컴포넌트 제거
      setTimeout(() => {
        setShouldRender(false);
      }, 1200);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("ended", handleEnd);
    video.addEventListener("error", handleError);
    
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("ended", handleEnd);
        video.removeEventListener("error", handleError);
      }
      // 컴포넌트 언마운트 시 body 클래스 정리
      document.body.classList.remove('intro-playing');
      document.body.classList.remove('main-content-visible');
    };
  }, [onTransition]);

  // 컴포넌트가 제거되면 null 반환
  if (!shouldRender) return null;

  return (
    <FadeWrapper className={fadeOut ? "fade-out" : ""}>
      <StyledVideo
        ref={videoRef}
        src="/intro.mp4"
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      />
    </FadeWrapper>
  );
}

// 페이드아웃 애니메이션
const fadeOutAnim = keyframes`
  from {
    opacity: 1;
    pointer-events: auto;
  }
  to {
    opacity: 0;
    pointer-events: none;
  }
`;

// 영상 래퍼 - z-index를 낮춰서 클릭 이벤트 차단 방지
const FadeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; // 9999에서 1000으로 낮춤

  &.fade-out {
    animation: ${fadeOutAnim} 1.2s ease-in-out forwards;
    pointer-events: none;
  }
`;

// 영상 자체
const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
