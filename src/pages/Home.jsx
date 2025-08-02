// src/pages/Home.jsx
import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Intro />
      <Navigation fixed={true} />
      <About />
      {/* 필요한 섹션 추가 */}
    </div>
  );
}