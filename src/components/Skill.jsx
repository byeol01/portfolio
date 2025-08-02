// src/components/Skill.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// ✅ 1. 스킬 데이터
const skills = {
  "Design Tools": [
    { name: "Photoshop", percent: 85 },
    { name: "Illustrator", percent: 70 },
    { name: "Adobe", percent: 70 },
    { name: "Figma", percent: 85 },
    { name: "미리캔버스", percent: 95 },
  ],
  "Web Publishing": [
    { name: "HTML", percent: 85 },
    { name: "CSS,SCSS", percent: 85 },
    { name: "GPT 활용", percent: 95 },
    { name: "jQuery", percent: 60 },
    { name: "GitHub", percent: 75 },
  ],
  "Frontend Basics": [
    { name: "React", percent: 60 },
    { name: "Vue.js", percent: 50 },
    { name: "JavaScript", percent: 30 },
    { name: "Node.js", percent: 40 },
    { name: "MongoDB", percent: 40 },
  ],
};

// ✅ 2. CountUp 컴포넌트
function CountUp({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1초
    const interval = 20;
    const steps = duration / interval;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}%</span>;
}

// ✅ 3. Skill 컴포넌트 본문
export default function Skill() {
  const sectionRef = useRef(null);
  const [animatedPercents, setAnimatedPercents] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const result = {};
        Object.entries(skills).forEach(([category, items]) => {
          items.forEach(({ name, percent }) => {
            result[name] = entry.isIntersecting ? percent : 0;
          });
        });
        setAnimatedPercents(result);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <SkillSection ref={sectionRef} id="skill">
      <Title>Skill</Title>
      <CategoryWrapper>
        {Object.entries(skills).map(([category, items]) => (
          <SkillBox key={category}>
            <Category>{category}</Category>
            {items.map(({ name }) => (
              <SkillItem key={name}>
                <SkillName>{name}</SkillName>
                <BarContainer>
                  <BarBackground>
                    <BarFill
                      $percent={animatedPercents[name] || 0}
                      $category={category}
                    />
                  </BarBackground>
                  <PercentText>
                    <CountUp target={animatedPercents[name] || 0} />
                  </PercentText>
                </BarContainer>
              </SkillItem>
            ))}
          </SkillBox>
        ))}
      </CategoryWrapper>
    </SkillSection>
  );
}

//
// ✅ 4. 스타일 컴포넌트
//


const Title = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff90b3;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;



const SkillItem = styled.div`
  margin-bottom: 1.2rem;
`;

const SkillName = styled.p`
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BarBackground = styled.div`
  flex: 1;
  height: 12px;
  background: #f0f0f0ff;
  border-radius: 8px;
  overflow: hidden;
`;


const PercentText = styled.span`
  font-size: 0.9rem;
  min-width: 35px;
  color: #555;
  text-align: right;
`;
const SkillSection = styled.section`
  min-height: 100vh;
  padding: 6rem 4rem;
  background: #fffdf6; /* 아이보리 느낌의 흰색 */
`;

const SkillBox = styled.div`
  width: 320px;
  background: #ffffff;
  border: 2px dashed #e7c8ff; /* 점선 테두리 */
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

const Category = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  color: #ff90b3;
  
`;

const BarFill = styled.div`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  transition: width 1s ease-out;
  background: ${({ $category }) => {
    switch ($category) {
      case "Design Tools":
        return "linear-gradient(to right, #ffe0f0, #ffcce0)"; // 핑크톤
      case "Web Publishing":
        return "linear-gradient(to right, #d6f6ff, #baeaff)"; // 하늘톤
      case "Frontend Basics":
        return "linear-gradient(to right, #d9ffe2, #b8fccc)"; // 민트톤
      default:
        return "#ccc";
    }
  }};
`;
