import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaFigma } from "react-icons/fa";

const projects = [
  {
    id: 0,
    title: "기분쇼핑 추천 서비스",
    contribution: "전체 컨셉 및 상세/추천/이벤트 페이지 디자인, 로고 제작, 반응형 구현 등",
    stack: "Vue, CSS3, Firebase, Figma",
    mockup: "/img01.png",
    preview: "/preview1.png",
    responsive: "/responsive01.png",
    site: "https://vue-rara.vercel.app/",
    github: "https://github.com/",
    figma: "https://www.figma.com/design/TXBgRvgne3nnz7g7m1VuAO/%EC%9C%BC%EB%9E%8F%EC%B0%A8%EC%B0%A8?node-id=0-1"
  },
  {
    id: 1,
    title: "에듀테크 교육 검색 플랫폼",
    contribution: "캐릭터 디자인, 로그인 및 반응형 UI 디자인, 부분 섹션 구현",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img02.png",
    preview: "/preview2.png",
    responsive: "/responsive02.png",
    site: "https:/https://heart-shop.vercel.app/",
    github: "https://github.com/byeol01/heart-shop",
    figma: "https://www.figma.com/file/EXAMPLE2"
  },
  {
    id: 2,
    title: "에듀테크 교육 검색 플랫폼",
    contribution: "캐릭터 디자인, 로그인 및 반응형 UI 디자인, 부분 섹션 구현",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img03.png",
    preview: "/preview3.png",
    responsive: "/responsive03.png",
    site: "https:/https://heart-shop.vercel.app/",
    github: "https://github.com/byeol01/heart-shop",
    figma: "https://www.figma.com/file/EXAMPLE2"
  },
  {
    id: 3,
    title: "리뉴얼페이지1",
    contribution: "베스트이엔티 ",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img07.png",
    preview: "/preview7.png",
    responsive: "/responsive.png",
    site: "https://byeol01.github.io/bestent_Renewal/",
    github: "https://github.com/byeol01/bestent_Renewal",
    figma: "https://www.figma.com/file/EXAMPLE2"
  },
  {
    id: 4,
    title: "리뉴얼페이지2",
    contribution: "새미네부엌",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img08.png",
    preview: "/preview8.png",
    responsive: "/responsive.png",
    site: "https://byeol01.github.io/SamPyo/",
    github: "https://github.com/byeol01/SamPyo",
    figma: "https://www.figma.com/file/EXAMPLE2"
  },
  {
    id: 5,
    title: "랜딩페이지1",
    contribution: "캐릭터 디자인, 로그인 및 반응형 UI 디자인, 부분 섹션 구현",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img04.png",
    preview: "/preview4.png",
    responsive: "/responsive.png",
    site: "https://byeol01.github.io/Landing1/",
    github: "https://github.com/byeol01/Landing1",
    figma: "https://www.figma.com/file/EXAMPLE2"
  },
  {
    id: 6,
    title: "랜딩페이지2",
    contribution: "캐릭터 디자인, 로그인 및 반응형 UI 디자인, 부분 섹션 구현",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img05.png",
    preview: "/preview5.png",
    responsive: "/responsive05.png",
    site: "https://byeol01.github.io/Landing2/",
    github: "https://github.com/byeol01/Landing2",
    figma: "https://www.figma.com/file/EXAMPLE2"
  },
  {
    id: 7,
    title: "랜딩페이지3",
    contribution: "캐릭터 디자인, 로그인 및 반응형 UI 디자인, 부분 섹션 구현",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img06.png",
    preview: "/preview6.png",
    responsive: "/responsive.png",
    site: "https://byeol01.github.io/Landing3/",
    github: "https://github.com/byeol01/Landing3",
    figma: "https://www.figma.com/file/EXAMPLE2"
  },
  {
    id: 8,
    title: "해커톤",
    contribution: "2025-7.26~27약학과 IT 융합",
    stack: "React, SCSS, Vite, Figma",
    mockup: "/img09.png",
    preview: "/preview9.png",
    responsive: "/responsive09.png",
    site: "https://byeol01.github.io/Landing3/",
    github: "https://github.com/byeol01/Landing3",
    figma: "https://www.figma.com/file/EXAMPLE2"
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
box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  padding: 4rem;
  min-width: 1000px;
  margin: 0 auto 0 12%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Left = styled.div`
  width: 50%;
  background: #f9f6ff;
  border-radius: 20px;
  padding: 60px;
  border: 2px dashed #d8b9ff;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  transform: translateX(0%);

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
`;

const MockupWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
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
