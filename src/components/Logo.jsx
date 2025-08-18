import React from "react";
import { motion } from "framer-motion";

/**
 * currentIndex: 0=Main, 1=About, 2=Skill, 3=Projects, 4=Contact
 * - Main: 좌측(겹침 방지), 크게
 * - About~Projects: 좌상단 작게(네비 위에 뜨도록 zIndex 높음)
 * - Contact: Main과 같은 위치지만 살짝 작게
 * - Intro 직후 튐 방지: initial을 animate와 동일 상태로 시작
 */
export default function Logo({ currentIndex, visible = true }) {
  let top, left, x, scale;

  if (currentIndex === 0) {
    // Main
    top = "35%";
    left = "25%";
    x = "0%";
    scale = 1.2;
  } else if ([1, 2, 3].includes(currentIndex)) {
    // About ~ Projects
    top = "16px";
    left = "-150px";
    x = "0%";
    scale = 0.22;
  } else {
    // Contact
    top = "40%";
    left = "25%";
    x = "0%";
    scale = 0.9;
  }

  const base = { top, left, x, scale, opacity: visible ? 1 : 0 };

  const handleLogoClick = () => {
    document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.img
      src="/logo.png"
      alt="logo"
      initial={base}
      animate={base}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: "fixed",
        zIndex: 1100,   // 네비보다 위
        width: "555px",
        cursor: "pointer",
        pointerEvents: "auto",
      }}
      onClick={handleLogoClick}
    />
  );
}
