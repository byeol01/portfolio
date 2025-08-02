import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Navigation from "./components/Navigation";
import MainTitle from "./components/MainTitle";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Logo from "./components/Logo";
import FloatingMe from "./components/FloatingMe";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import IntroVideo from "./components/IntroVideo"; // ✅ 인트로 영상 추가

export default function App() {
  const sectionRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false); // ✅ 메인 콘텐츠 전환 여부

  const sectionIds = ["main", "about", "skills", "projects", "contact"];
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on("change", (latest) => {
      setScrollYValue(latest);
    });
  }, [scrollY]);

  // 휠 스크롤로 섹션 전환
  useEffect(() => {
    const handleWheel = (e) => {
      if (!showMainContent) return;
      if (Math.abs(e.deltaY) < 10) return;
      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= sectionRefs.current.length) return;

      isScrolling.current = true;

      const scrollTargetY = sectionRefs.current[nextIndex].offsetTop;
      window.scrollTo({ top: scrollTargetY, behavior: "smooth" });

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        isScrolling.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, showMainContent]);

  // 스크롤 위치에 따라 현재 섹션 인덱스 갱신
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const current = sectionRefs.current.findIndex(
        (section) =>
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
      );
      if (current !== -1) {
        setCurrentIndex(current);
      }
    };

    if (showMainContent) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMainContent]);

 return (
  <>
    <CustomCursor />

    {/* ✅ Main 콘텐츠는 showMainContent가 true일 때만 렌더 */}
    {showMainContent && (
      <>
        <Navigation currentSection={sectionIds[currentIndex]} />
      <Logo
  sectionRefs={sectionRefs}
  scrollYValue={scrollYValue}
  visible={true} // 항상 true로 두고
  style={{ opacity: 1 }} // 강제로 바로 보이게!
/>
        <FloatingMe
          sectionRefs={sectionRefs}
          scrollYValue={scrollYValue}
          visible={true}
        />

        {sectionIds.map((id, i) => (
          <div
            key={id}
            ref={(el) => (sectionRefs.current[i] = el)}
            id={id}
            style={{ height: "100vh" }}
          >
            {
              [
                <MainTitle show={true} />,
                <About />,
                <Skill />,
                <Projects />,
                <Contact />,
              ][i]
            }
          </div>
        ))}
        <Footer />
      </>
    )}

    {/* ✅ IntroVideo는 항상 위에 위치 (position: fixed로 제어) */}
    <IntroVideo onTransition={() => setShowMainContent(true)} />
  </>
);
}