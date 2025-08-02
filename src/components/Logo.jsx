import React from "react";
import { motion } from "framer-motion";

export default function Logo({ sectionRefs, scrollYValue, visible }) {
  // 각 섹션의 top 값 가져오기
  const mainTop = sectionRefs.current[0]?.offsetTop || 0;
  const aboutTop = sectionRefs.current[1]?.offsetTop || 1000;
  const contactTop = sectionRefs.current[4]?.offsetTop || 3000;

  // 현재 위치에 따라 값을 반환하는 헬퍼 함수
  const getValueByScroll = (mainVal, aboutVal, contactVal) => {
    if (scrollYValue < aboutTop) return mainVal;             // MainTitle 영역
    if (scrollYValue < contactTop) return aboutVal;          // About ~ Projects
    return contactVal;                                       // Contact 영역
  };

  // 위치 및 스타일 값 설정
  const top = getValueByScroll("35%", "-10%", "20%");
  const left = getValueByScroll("50%", "-160px", "40%");
  const translateX = getValueByScroll("-80%", "0%", "-70%");
  const scale = getValueByScroll(1.2, 0.2, 0.9);

  return (
    <motion.img
      src="/logo.png"
      alt="logo"
      style={{
        position: "fixed",
        top,
        left,
        translateX,
        scale,
        opacity: visible ? 1 : 0, // ✅ IntroVideo 끝나면 보여짐
        transition: "all 0.6s ease-out",
        zIndex: 1000,
        pointerEvents: "auto",
        width: "555px",
        cursor: "pointer",
      }}
    onClick={() => {
  const target = sectionRefs.current[0];
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  } else {
    // fallback
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}}

    />
  );
}
