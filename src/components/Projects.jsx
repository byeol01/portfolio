import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaFigma } from "react-icons/fa";

const projects = [
    {
      id: 3,
      title: "날씨 기반 쇼핑 추천 서비스",
      contribution:
        "전체적인 사이트 컨셉과 컬러 시스템을 직접 설계하고, 서비스 톤앤매너에 맞춘 커스텀 아이콘을 제작했습니다. " +
        "Vue로 컴포넌트를 모듈화하여 추천 카드, 필터, 배지 등의 UI를 재사용 가능하게 구성했고, CSS만으로도 깔끔한 인터랙션과 " +
        "반응형(모바일 퍼스트) 레이아웃을 구현했습니다.",
      stack: "Vue, CSS3, Firebase, Figma",
      details: {
        period: "2025.05.10 ~ 2025.06.05",
        type: "프로젝트",
        description: "날씨 카테고리 기반 쇼핑 큐레이션 & 경품 추천 서비스",
        goal: "Vue, CSS3, Figma",
        implementation: "날씨 데이터를 활용한 쇼핑 알고리즘으로 추천 서비스를 제공",
        responsibilities:
          "전체 컨셉 구상 및 상세 작업, 추천·이벤트 페이지 디자인, 로고 및 파비콘 아이콘 제작, 반응형 제작 참여",
      },
      mockup: "/img01.png",
      preview: "/preview1.png",
      responsive: "/responsive01.png",
      site: "https://vue-rara.vercel.app/",
      github: "https://github.com/",
      figma:
        "https://www.figma.com/design/TXBgRvgne3nnz7g7m1VuAO/%EC%9C%BC%EB%9E%8F%EC%B0%A8%EC%B0%A8?node-id=0-1",
    },
  
    {
      id: 4,
      title: "마음상점",
      contribution:
        "캐릭터 디자인, 로그인 및 반응형 UI 디자인, 부분 섹션 구현, 반응형 구현, mySQL로 DB 연동, 로그인/회원가입/아이디 찾기 구현, " +
        "로그인 여부에 따른 결제 페이지 및 메인 페이지 차별화 구현",
      stack: "React, SCSS, Vite, Figma, mySQL, GPT, 미리캔버스",
      details: {
        period: "2025.06.05 ~ 2025.07.03",
        type: "프로젝트",
        description: "에듀테크 교육 검색 플랫폼 (기분 기반 클래스 추천)",
        goal: "기분에 따라 맞춤형 클래스를 추천하는 교육 검색 플랫폼 구현",
        implementation:
          "React 기반 반응형 SPA로 개발, 챗봇 인터페이스 제공, Dark mode 기능 구현",
        responsibilities:
          "기획 참여, UI/UX 디자인 및 전체 컨셉 구상, 지역별 클래스 추천 및 결제 페이지 제작, " +
          "사이트 메인 캐릭터 제작, 전반적인 반응형 레이아웃 구현",
      },
      mockup: "/img02.png",
      preview: "/preview2.png",
      responsive: "/responsive02.png",
      site: "https://heart-shop.vercel.app/",
      github: "https://github.com/byeol01/heart-shop",
      figma: "https://www.figma.com/file/EXAMPLE2",
    },
    
    {
      id: 5,
      title: "Meloa – 콘텐츠 판매 및 감상 플랫폼",
      contribution:
        "기획 참여, 프론트엔드 개발자로서 디자인 시안을 기반으로 백엔드 연동 전까지 UI 코드 구현. " +
        "모바일 환경 최적화 및 반응형 레이아웃 설계.",
      stack: "React, styled-components, MongoDB, Vercel, GitHub, Figma",
      details: {
        period: "2025.07.04 ~ 2025.08.01",
        type: "프로젝트",
        description: "음악 콘텐츠 감상 및 구매 플랫폼으로, 일반 사용자와 관리자 모드를 지원",
        goal:
          "사용자가 모바일 환경에서 음악 콘텐츠를 감상하고 구매할 수 있으며, 관리자는 콘텐츠를 업로드 및 관리할 수 있는 서비스 구현",
        implementation:
          "일반 사용자: 콘텐츠 감상 / 구매 / 찜 / 장바구니 기능 제공\n" +
          "관리자: 콘텐츠 업로드 / 수정 / 삭제 및 전체 관리 기능 구현",
        responsibilities:
          "기획 참여, 프론트엔드 개발자로 디자인 반영 및 백엔드 연동 전까지 코드 구현, " +
          "반응형 UI 및 사용자 경험 최적화",
      },
      mockup: "/img03.png",
      preview: "/preview3.png",
      responsive: "/responsive03.png",
      site: "https://meloa.vercel.app/",
      github: "https://github.com/byeol01/meloa",
      figma: "https://www.figma.com/file/EXAMPLE3",
    },
    
    {
      id: 6,
      title: "베스트이엔티 리뉴얼",
      contribution:
        "기존 베스트이엔티 웹사이트를 전면 리뉴얼. 기획부터 디자인, 퍼블리싱까지 전 과정 참여. " +
        "엔터테인먼트 기업의 아이덴티티를 살릴 수 있도록 감각적인 컬러와 레이아웃을 설계하고, " +
        "사용자 친화적인 정보 구조로 UX를 개선했습니다.",
      stack: "HTML, CSS, Figma, Photoshop, Illustrator",
      details: {
        period: "2025.04.15 ~ 2025.05.05",
        type: "리뉴얼 프로젝트",
        description: "엔터테인먼트 기업 웹사이트의 기획·디자인·개발까지 전면 리뉴얼",
        goal:
          "사용자가 직관적으로 아티스트 정보와 콘텐츠를 탐색할 수 있는 엔터테인먼트 특화 웹사이트 구현",
        implementation:
          "메인 페이지 비주얼 강조, 아티스트별 상세 페이지 UX 개선, " +
          "모바일·PC 반응형 레이아웃 적용 및 빠른 로딩 최적화",
        responsibilities:
          "기획 단계 참여 (정보 구조 재정립), 전체 UI/UX 디자인, HTML/CSS 퍼블리싱, " +
          "컬러 시스템 및 시각적 톤앤매너 재정립",
      },
      mockup: "/img07.png",
      preview: "/preview7.png",
      responsive: "/responsive.png",
      site: "https://byeol01.github.io/bestent_Renewal/",
      github: "https://github.com/byeol01/bestent_Renewal",
      figma: "https://www.figma.com/file/EXAMPLE4",
    },
      
    {
      id: 7,
      title: "새미네부엌 리뉴얼",
      contribution:
        "기존 새미네부엌 웹사이트를 리뉴얼하며 랜딩 페이지 중심의 정보 구조를 재구성했습니다. " +
        "색감 통일성과 브랜드 톤을 맞추고, 심심하지 않은 UI로 사용자 경험을 개선했습니다.",
      stack: "HTML, CSS, Figma, Slick.js, 슬라이딩 플러그인",
      details: {
        period: "2025.03.20 ~ 2025.04.10",
        type: "리뉴얼 프로젝트",
        description: "브랜드 톤앤매너에 맞춘 랜딩 페이지 중심의 웹사이트 리뉴얼",
        goal:
          "기존 사이트의 정보 전달력을 강화하고, 색감과 구성 요소를 통일해 브랜드 이미지를 명확히 전달",
        implementation:
          "메인 랜딩 페이지 구성, 제품 소개 섹션 슬라이딩 UI 구현, 컬러 시스템 정리 및 시각적 통일감 부여",
        responsibilities:
          "사이트 리뉴얼 기획, 전체 UI/UX 디자인, HTML/CSS 퍼블리싱, Slick.js 적용 및 인터랙션 구현",
      },
      mockup: "/img08.png",
      preview: "/preview8.png",
      responsive: "/responsive.png",
      site: "https://byeol01.github.io/SamPyo/",
      github: "https://github.com/byeol01/SamPyo",
      figma: "https://www.figma.com/file/EXAMPLE5",
    },
    
    {
      id: 8,
      title: "랜딩페이지 1",
      contribution:
        "실제 사이트를 참고하여 동일한 레이아웃과 인터랙션으로 제작한 클론 랜딩페이지. " +
        "캐릭터 디자인, 로그인 UI, 반응형 레이아웃 구성 등 부분 섹션 구현 연습 프로젝트.",
      stack: "HTML, CSS, Figma, Photoshop, Illustrator",
      details: {
        period: "2025.02.10 ~ 2025.02.20",
        type: "클론 프로젝트",
        description: "실제 사이트를 동일하게 재현한 연습용 랜딩페이지",
        goal: "UI·UX 구현 능력 강화 및 반응형 레이아웃 제작 연습",
        implementation: "실제 서비스의 레이아웃, 폰트, 색감, 섹션 구조를 클론하여 제작",
        responsibilities:
          "UI 디자인 분석, 캐릭터 및 아이콘 리디자인, HTML/CSS 퍼블리싱, 반응형 구현",
      },
      mockup: "/img04.png",
      preview: "/preview4.png",
      responsive: "/responsive.png",
      site: "https://byeol01.github.io/Landing1/",
      github: "https://github.com/byeol01/Landing1",
      figma: "https://www.figma.com/file/EXAMPLE6",
    },
    {
      id: 9,
      title: "랜딩페이지 2",
      contribution:
        "실제 서비스 웹페이지를 분석해 동일한 디자인과 인터랙션을 구현한 클론 프로젝트. " +
        "반응형 UI 구현을 중심으로 연습.",
      stack: "HTML, CSS, Figma, Photoshop, Illustrator",
      details: {
        period: "2025.02.21 ~ 2025.02.28",
        type: "클론 프로젝트",
        description: "실제 사이트의 디자인 시스템을 그대로 적용한 연습용 랜딩페이지",
        goal: "반응형 레이아웃과 세부 인터랙션 구현 능력 향상",
        implementation: "Flex·Grid 기반 반응형 구조, 스크롤 애니메이션, Hover 인터랙션 구현",
        responsibilities:
          "UI 설계, HTML/CSS 퍼블리싱, 애니메이션 효과 추가, 모바일 퍼스트 레이아웃 적용",
      },
      mockup: "/img05.png",
      preview: "/preview5.png",
      responsive: "/responsive05.png",
      site: "https://byeol01.github.io/Landing2/",
      github: "https://github.com/byeol01/Landing2",
      figma: "https://www.figma.com/file/EXAMPLE7",
    },
    {
      id: 10,
      title: "랜딩페이지 3",
      contribution:
        "랜딩페이지 UI/UX를 직접 설계하고 구현한 연습 프로젝트. " +
        "애니메이션과 색상 통일성을 고려하여 시각적 완성도를 높임.",
      stack: "HTML, CSS, Figma, Photoshop, Illustrator",
      details: {
        period: "2025.03.01 ~ 2025.03.07",
        type: "클론 프로젝트",
        description: "랜딩페이지 제작 및 인터랙션 구현 연습 프로젝트",
        goal: "디자인 시스템과 인터랙션 패턴을 학습하고 직접 구현",
        implementation: "스크롤 기반 애니메이션, 슬라이더 컴포넌트 구현, 모바일 대응",
        responsibilities:
          "UI 분석 및 리디자인, HTML/CSS 퍼블리싱, 인터랙션 효과 구현, 모바일 최적화",
      },
      mockup: "/img06.png",
      preview: "/preview6.png",
      responsive: "/responsive.png",
      site: "https://byeol01.github.io/Landing3/",
      github: "https://github.com/byeol01/Landing3",
      figma: "https://www.figma.com/file/EXAMPLE8",
    },
    
    {
      id: 1,
      title: "약학 X IT 창업 해커톤",
      contribution:
        "2025.07.26 ~ 07.27 약학과 IT 융합 해커톤 참여. " +
        "발달장애 아동을 위한 디지털 치료제 컨셉을 기획하고 UI/UX 디자인 및 캐릭터 제작을 담당했습니다.",
      stack: "React, SCSS, Vite, Figma",
      details: {
        period: "2025.07.26 ~ 2025.07.27",
        type: "해커톤 프로젝트",
        description: "발달장애 아동을 위한 게임형 디지털 치료제 서비스 제작",
        goal:
          "아동들이 집중하면서 학습할 수 있는 게임형 학습 플랫폼 제작. AI 알고리즘을 활용해 개별 맞춤 리포트 제공",
        implementation:
          "React 기반 반응형 웹앱 제작. UI 디자인과 간단한 게임 플로우 구현, 학습 진행도 시각화",
        responsibilities:
          "디자이너로 참여. UI/UX 디자인, 캐릭터 제작, 메인 화면 및 게임 화면 시각 디자인 기획",
      },
      mockup: "/img09.png",
      preview: "/preview9.png",
      responsive: "/responsive09.png",
      site: "https://hackathon-project.vercel.app/",
      github: "https://github.com/byeol01/hackathon",
      figma: "https://www.figma.com/file/EXAMPLE9",
    },
    {
      id: 0,
      title: "2025 춘천시 데이터 활용 해커톤 (은상)",
      contribution:
        "2025.09.05 ~ 09.06 춘천시 데이터 활용 해커톤 대회 참여, 은상 수상. " +
        "프론트엔드 개발자로 앱 UI 디자인 및 프론트엔드 개발을 담당하고, 백엔드와 협업하여 데이터 시각화를 구현했습니다.",
      stack: "React, styled-components, Python, Figma",
      details: {
        period: "2025.09.05 ~ 2025.09.06",
        type: "해커톤 프로젝트",
        description: "춘천시 수질 데이터를 활용한 관광지수 및 물놀이 안전지수 예측 앱 '미리씨'",
        goal:
          "춘천시의 실시간·과거 수질 데이터를 기반으로 관광지수를 계산하고, " +
          "사용자가 안전한 물놀이 가능 여부를 직관적으로 확인할 수 있는 앱 제작",
        implementation:
          "React + styled-components로 UI 구현, Python으로 데이터 수집·정리 및 지수 계산, " +
          "사용자 친화적 대시보드 설계, 반응형 레이아웃 적용",
        responsibilities:
          "프론트엔드 개발 및 UI 디자인, 컴포넌트 설계, 데이터 시각화 작업, " +
          "협업을 통한 API 연동 테스트 및 최종 데모 발표 준비",
      },
      mockup: "/img10.png",
      preview: "/preview10.png",
      responsive: "/responsive10.png",
      site: "https://miri-c.vercel.app/",
      github: "https://github.com/byeol01/miri-c",
      figma: "https://www.figma.com/file/EXAMPLE10",
    },
    
    
];

export default function ProjectSection() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <Section>
      <Left>
        <MockupWrapper>
          <Mockup src={project.mockup} alt="project" />
          <ResponsiveImg src={project.responsive} alt="responsive preview" />
        </MockupWrapper>

        <Info>
          <h2>{project.title}</h2>
          <p><strong>기여도:</strong> {project.contribution}</p>
          <p><strong>사용 기술:</strong> {project.stack}</p>
        </Info>
        <ButtonRow>
          <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> 깃허브</a>
          <a href={project.figma} target="_blank" rel="noopener noreferrer"><FaFigma /> 피그마</a>
          <a href={project.site} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> 사이트</a>
        </ButtonRow>
      </Left>

      <Right>
        <Title>Projects</Title>
        <ThumbnailList>
          {projects.map((p, idx) => (
            <Thumb
              key={p.id}
              src={p.preview}
              alt="preview"
              onClick={() => setSelected(idx)}
              $active={idx === selected}
            />
          ))}
        </ThumbnailList>

        <ImageBox>
          <img src="/me.png" alt="me character" />
        </ImageBox>
      </Right>


    </Section>
  );
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    padding: 4rem 2rem; 
    max-height: 85vh;
    margin-left: 200px;
    gap: 100px;
    margin-top: 65px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Left = styled.div`
  width: 40%;
  background: #f9f6ff;
  border-radius: 20px;
  padding: 50px;
  border: 2px dashed #d8b9ff;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  transform: translateX(0%);

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 800px;
    padding: 40px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MockupWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
`;

const Mockup = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  transform: translateX(40px);
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: #E9D8FD;
    color: #272727;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-size: 0.9rem;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      background: #fff3d2; /* 부드러운 노랑 */
    }
  }
`;

const Info = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const ResponsiveImg = styled.img`
  margin-top: 1rem;
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 12px;
`;
const Right = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 600px;
  }
`;

const ThumbnailList = styled.div`
  max-height: 360px; /* 4.5개 썸네일 기준 (예: 썸네일 높이 80px + 간격) */
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffd9ec;  /* 파스텔 핑크 */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #fff0f6;  /* 파스텔톤 배경 */
    border-radius: 10px;
  }
`;

const Thumb = styled.img`
  width: 80%;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid ${({ $active }) => ($active ? "#ff90b3" : "#ccc")};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 30px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 360px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 90%;
    object-fit: contain;
    filter: drop-shadow(0 0 4px rgba(255, 144, 179, 0.4));
    border-radius: 8px;
  }
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ff90b3;
  text-align: center;
`;
