import React from "react";
import { motion } from "framer-motion";

/**
 * 요구사항 반영:
 * - Main: 우측 중앙, 크게
 * - About: 좌측 중앙, 축소 → 그 위치에서 "고정"
 * - 그 이후 섹션(2,3,4)에서도 About 위치 그대로 유지(안 내려감)
 * - 위로 스크롤하면 다시 Main 위치로 복귀
 */
export default function FloatingMe({ currentIndex, visible = true }) {
  const isMain = currentIndex === 0;
  const showWithinAboutOnly = currentIndex <= 1 && visible;

  // 두 상태만 사용: Main / About-이하 고정
  const mainVariant = { top: "40%", left: "60%", x: "10%", scale: 1.9, opacity: showWithinAboutOnly ? 1 : 0 };
  const stuckAboutVariant = { top: "35%", left: "28%", x: "0%", scale: 1.5, opacity: showWithinAboutOnly ? 1 : 0 };

  return (
    <motion.img
      src="/me.png"
      alt="me"
      initial={false}
      animate={isMain ? mainVariant : stuckAboutVariant}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        zIndex: 1050,
        width: "250px",
        pointerEvents: "none",
      }}
    />
  );
}
