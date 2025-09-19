import React, { useEffect, useRef, useState } from "react";

import Navigation from "./components/Navigation";
import MainTitle from "./components/MainTitle";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Logo from "./components/Logo";
import FloatingMe from "./components/FloatingMe";
import CustomCursor from "./components/CustomCursor";
import IntroVideo from "./components/IntroVideo";

export default function App() {
  // 각 섹션 DOM을 담을 refs
  const sectionRefs = useRef([]);
  const sectionIds = ["main", "about", "skills", "projects", "contact"];

  // 현재 섹션 index (0=Main, 1=About, 2=Skill, 3=Projects, 4=Contact)
  const [currentIndex, setCurrentIndex] = useState(0);

  // 스냅 스크롤 중 여부
  const isSnapping = useRef(false);

  // 인트로 영상 종료 후 메인 콘텐츠 표시
  const [showMainContent, setShowMainContent] = useState(false);

  // -------------------------------------------------------
// 1) 휠로 한 섹션씩 이동 (스냅)
//    - "정말 스냅할 때만" 기본 스크롤 방지
//    - 목표 위치 도달 확인 뒤 플래그 해제 (타임아웃 의존 X)
// -------------------------------------------------------
useEffect(() => {
  const handleWheel = (e) => {
    if (!showMainContent) return;

    // 스냅 중이면만 기본 스크롤 방지
    if (isSnapping.current) {
      e.preventDefault();
      return;
    }

    const delta = e.deltaY;
    if (Math.abs(delta) < 10) return; // 미세 입력 무시

    // 다음 섹션 계산
    const direction = delta > 0 ? 1 : -1;
    let next = currentIndex + direction;

    // refs가 아직 안전하게 채워졌는지 확인
    const lastIndex = sectionIds.length - 1;
    next = Math.max(0, Math.min(lastIndex, next));

    // 다음 섹션이 현재와 같으면(경계에서 추가 입력) 아무 것도 하지 않음
    if (next === currentIndex) return;

    const targetEl = sectionRefs.current[next];
    // ✅ target이 없으면 기본 스크롤을 막지 않는다
    if (!targetEl) return;

    // ✅ 여기서부터 "정말 스냅"이 확정 → 기본 스크롤 방지
    e.preventDefault();

    isSnapping.current = true;
    const targetY = targetEl.offsetTop;

    // 스무스 스크롤
    sectionRefs.current[next]?.scrollIntoView({ behavior: "smooth", block: "start" });

    // 실제 도달을 폴링하여 확인 (타임아웃 의존 제거)
    const TOL = 2;        // 허용 오차(px)
    const INTERVAL = 16;  // 체크 주기(ms)
    let tries = 0;
    const MAX_TRIES = 200; // ~3.2s 안전장치

    const tick = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      if (Math.abs(y - targetY) <= TOL || tries++ > MAX_TRIES) {
        setCurrentIndex(next);
        isSnapping.current = false;
        return;
      }
      setTimeout(tick, INTERVAL);
    };
    setTimeout(tick, INTERVAL);
  };

  if (showMainContent) {
    window.addEventListener("wheel", handleWheel, { passive: false });
  }
  return () => window.removeEventListener("wheel", handleWheel);
}, [currentIndex, showMainContent, sectionIds.length]);

  // -------------------------------------------------------
  // 2) 일반 스크롤 시에도 currentIndex 갱신 (네비/로고/이미지 싱크)
  //    - 화면 중앙 기준으로 현재 섹션 판별
  // -------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      if (!showMainContent || isSnapping.current) return;

      const scrollPos = window.scrollY + window.innerHeight / 2;
      const idx = sectionRefs.current.findIndex(
        (el, i) =>
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
      );
      if (idx !== -1 && idx !== currentIndex) {
        setCurrentIndex(idx);
      }
    };

    if (showMainContent) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // 초기 1회
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, showMainContent]);

  // -------------------------------------------------------
  // 3) 인트로 종료 후 초기화
  // -------------------------------------------------------
  useEffect(() => {
    if (!showMainContent) return;

    // body 클래스 설정
    document.body.classList.add('main-content-visible');

    // 약간의 지연 후 맨 위로
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setCurrentIndex(0); // 초기 인덱스 설정
    }, 100);

    return () => {
      clearTimeout(t);
      // 컴포넌트 언마운트 시 body 클래스 정리
      document.body.classList.remove('main-content-visible');
    };
  }, [showMainContent]);

  return (
    <>
      <CustomCursor />

      {/* 메인 콘텐츠 */}
      {showMainContent && (
        <>
          <Navigation currentSection={sectionIds[currentIndex]} />

          {/* 로고/플로팅 이미지: 인트로 종료 후 함께 표시 */}
          <Logo currentIndex={currentIndex} visible={showMainContent} />
          <FloatingMe currentIndex={currentIndex} visible={showMainContent} />

          {/* 섹션: id & ref 연결, 100vh 높이 */}
          {sectionIds.map((id, i) => (
            <div
              key={id}
              id={id}
              ref={(el) => (sectionRefs.current[i] = el)}
              style={{ height: id === "contact" ? "auto" : "100vh", minHeight: "100vh" }}
            >
              {
                [
                  <MainTitle key="main" show={true} />,
                  <About key="about" />,
                  <Skill key="skill" />,
                  <Projects key="projects" />,
                  <Contact key="contact" />,
                ][i]
              }
            </div>
          ))}
          
        </>
      )}

      {/* 인트로 영상 (끝나면 메인 노출) */}
      <IntroVideo onTransition={() => setShowMainContent(true)} />
    </>
  );
}
