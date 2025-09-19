import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function About() {
  const meImage = useRef(null);
  const [targetY, setTargetY] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (meImage.current) {
      const rect = meImage.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setTargetY(rect.top + scrollY);
    }
  }, []);

  const traits = [
    { label: "ENFP", desc: "재기발랄한 활동가", color: "#FFE0E6" },
    { label: "활발함", desc: "에너지 넘치는 분위기메이커", color: "#D8F5E3" },
    { label: "긍정적", desc: "항상 밝고 유쾌한 마인드", color: "#FFF2CC" },
    { label: "도전정신", desc: "새로운 것에 대한 두려움 없음", color: "#DCE6FF" },
    { label: "협업능력", desc: "팀과 함께 성장하는 태도", color: "#E6E0FF" },
  ];

  return (
    <AboutSection id="about">
      <Content>
        <ImageContainer>
          <ImagePlaceholder ref={meImage}></ImagePlaceholder>
        </ImageContainer>

        <TextContent>
          <Title>About Me</Title>
          <Quote>"경험을 디자인하고, 코드로 구현하는 디자이너 이한별입니다."</Quote>

          <Info>
            <InfoItem>
              <strong>나만의 장점:</strong> ENFP, 공감 능력, 긍정적인 마인드, AI 활용도 높음, 팀플에 최적화
            </InfoItem>

            <ImageTraits>
              {traits.map((trait, index) => (
                <TraitBox
                  key={index}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{ backgroundColor: trait.color }}
                >
                  <TraitIcon>{trait.label}</TraitIcon>
                </TraitBox>
              ))}
            </ImageTraits>

            <FixedTooltip>{traits[selectedIndex].desc}</FixedTooltip>

            <InfoItem>
              <strong>자격증</strong>
              <ul>
                <li>포토샵 1급</li>
              </ul>
            </InfoItem>

            <ActivitySection>
              <SectionTitle>공모전 & 해커톤</SectionTitle>
              <ActivityList>
              <ActivityItem>
                  <strong>[해커톤] 2025 약학 X IT 창업 해커톤</strong>
                  <p>디자이너 역할, 앱 디자인 </p>
                </ActivityItem>
                <ActivityItem>
                  <strong>[해커톤] 2025 춘천시 데이터 활용 해커톤 대회[은상]</strong>
                  <p>프론트 개발자 역활, 앱 디자인 및 프론트작업 </p>
                </ActivityItem>
                <ActivityItem>
                  <strong>[공모전] 2025 서울 데이터 허브 시각화 경진대회</strong>
                  <p>팀원으로 참여, 자료 및 데이터수집 및 ppt자료 제작,데이터 시각화 시안 제작</p>
                </ActivityItem>
                <ActivityItem>
                  <strong>[공모전]생성형 AI 콘텐츠 공모전 </strong>
                  <p>새만금 스마트 수변도시의 이미지를 프롬프트로 입력하여 생성형 AI를 활용해 디자인 및 기획</p>
                </ActivityItem>
                <ActivityItem>
                  <strong>[공모전] 전주비전대학교 캐릭터 네이밍 공모전</strong>
                  <p>캐릭터 네이밍 기획 </p>
                </ActivityItem>
                <ActivityItem>
                  <strong>[공모전] 2025 미디어센터관악 생성형 AI공모전 GAGA </strong>
                  <p>생성형 AI를 활용해 캐릭터 디자인 및 기획</p>
                </ActivityItem>
              </ActivityList>
            </ActivitySection>
          </Info>
        </TextContent>
      </Content>
    </AboutSection>
  );
}


const AboutSection = styled.section`
box-sizing: border-box;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const ImagePlaceholder = styled.div`
  background-color: #ddd;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
`;

const TextContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15%;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;


const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`;

const Quote = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #666;
  margin-bottom: 32px;
`;

const Info = styled.div`
  text-align: left;
`;

const InfoItem = styled.div`
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.6;

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

const ImageTraits = styled.div`
  display: flex;
  gap: 12px;
  margin: 24px 0;
`;

const TraitBox = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  background-color: #f0f0f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
  }

  &:hover > div {
    opacity: 1;
    transform: translateY(-100%);
    pointer-events: auto;
  }
`;

const TraitIcon = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #444;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -280%;
  left: -200%;
  transform: translate(10px, -50%);
  background: #333;
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent #333 transparent transparent;
  }
`;


const ActivitySection = styled.div`
  margin-top: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;
  background-color:#fffdf6;
  
  /* 사이트 스타일과 통일된 스크롤바 */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffd9ec;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff0f6;
    border-radius: 10px;
  }

  /* 파이어폭스용 */
  scrollbar-color: #ffd9ec #fff0f6;
  scrollbar-width: thin;
  
  /* 모바일에서 스크롤바 숨기기 */
  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      width: 6px;
    }
  }
`;

const ActivityItem = styled.li`
  margin-bottom: 1rem;

  p {
    margin: 0.3rem 0 0;
    font-size: 0.95rem;
    color: #555;
  }
`;

const FixedTooltip = styled.div`
  position: absolute;
  top: 238px;
  transform: translateX(-110%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
  z-index: 2000;
  
  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    transform: none;
    margin-top: 1rem;
    white-space: normal;
  }
`;