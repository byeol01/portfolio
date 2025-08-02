import React from "react";
import { motion } from "framer-motion";

export default function FloatingMe({ sectionRefs, scrollYValue, visible }) {
  const mainTop = sectionRefs.current[0]?.offsetTop || 0;
  const aboutTop = sectionRefs.current[1]?.offsetTop || 1000;
  const skillTop = sectionRefs.current[2]?.offsetTop || 2000;

  const getValueByScroll = (mainVal, aboutVal) => {
    return scrollYValue < aboutTop ? mainVal : aboutVal;
  };

  const top = getValueByScroll("40%", "35%");
  const left = getValueByScroll("60%", "28%");
  const translateX = getValueByScroll("10%", "0%");
  const scale = getValueByScroll(1.9, 1.5);

  // ✅ IntroVideo 끝났고 + Skill 섹션 이전일 때만 보여짐
  const isVisible = scrollYValue < skillTop && visible;
  const opacity = isVisible ? 1 : 0;

  return (
    <motion.img
      src="/me.png"
      alt="me"
      style={{
        position: "fixed",
        top,
        left,
        translateX,
        scale,
        opacity,
        zIndex: 900,
        width: "250px",
        transition: "all 0.6s ease-in-out",
        pointerEvents: "none",
      }}
    />
  );
}
