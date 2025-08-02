import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 Han Byeol. All rights reserved.</p>
      <p>
        본 사이트는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
        <a href="https://github.com/byeol01/portfolio" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
box-sizing: border-box;
text-align: center;
padding: 40px 0;
font-size: 14px;
color: #888;
background-color: #fff5fa;
margin-top: 100px;
border-top: 1px dashed #ffc0cb;

a {
margin-left: 6px;
color: #ff90b3;
text-decoration: none;

&:hover {
text-decoration: underline;
}
}
`;
const Disclaimer = styled.p`
  font-size: 12px;
  color: #bbb;
  margin-top: 10px;
`;