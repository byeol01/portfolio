import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

export default function Contact() {
  const handleSendEmail = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm("service_f2rdh3f", "template_plwdqo9", form, "_n6O6UlqBmjw291Wl")
      .then(
        () => {
          alert("메일이 성공적으로 전송되었습니다!");
          form.reset();
        },
        (error) => {
          console.error(error);
          alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
        }
      );
  };

  return (
    <ContactSection id="contact">
      {/* 왼쪽 영역: '소개 글'이 로고 위쪽 라인에 오도록 위쪽에 배치 */}
      <LeftSide>
        <MessageBox>
          지금까지 제 포트폴리오를 봐주셔서 감사합니다!<br />
          디자인부터 코딩까지 전 과정에 참여하며 성장하고 있습니다.<br />
          늘 배우고 연구하며, 유행을 따르기보단,<br />만들어가는 디자이너가 되겠습니다.
        </MessageBox>
        {/* 로고가 고정(fixed) 컴포넌트라면 이 자리는 비워두셔도 됩니다 */}
      </LeftSide>

      {/* 오른쪽 영역: 메일 폼 */}
      <RightSide>
        <Form onSubmit={handleSendEmail} noValidate>
          <Field>
            <label htmlFor="user_email">이메일 주소</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="example@email.com"
              required
              aria-required="true"
              autoComplete="email"
              inputMode="email"
            />
          </Field>

          <Field>
            <label htmlFor="subject">제목</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="제목을 입력하세요"
              required
              aria-required="true"
              autoComplete="off"
            />
          </Field>

          <Field>
            <label htmlFor="message">내용</label>
            <textarea
              id="message"
              name="message"
              placeholder="내용을 입력하세요"
              required
              aria-required="true"
            />
          </Field>

          <SubmitButton type="submit">메일전송</SubmitButton>
        </Form>
      </RightSide>

      {/* 푸터: grid의 마지막 행에 붙여서 '바닥에 딱' */}
      <FooterArea>
        <Footer />
      </FooterArea>

      <ScrollTopBtn
        aria-label="맨 위로 이동"
        onClick={() => {
          const mainSection = document.getElementById("main");
          if (mainSection) mainSection.scrollIntoView({ behavior: "smooth" });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        ▲
      </ScrollTopBtn>
    </ContactSection>
  );
}

/* ===================== styles ===================== */

/* 섹션 전체를 Grid로: 왼쪽(소개/로고), 오른쪽(폼), 맨아래(푸터) */
const ContactSection = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 480px;
  grid-template-rows: 1fr auto;         /* 본문, 푸터 */
  grid-template-areas:
    "left form"
    "footer footer";
  align-items: center;
  gap: 32px;


  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "left"
      "form"
      "footer";
    padding: 48px 20px 16px;
  }
`;

const LeftSide = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  align-items: center;      /* 로고 중앙 정렬 대비 */
  gap: 24px;
  transform: translateX(53px);
  margin-bottom: 120px;
`;

const MessageBox = styled.div`
  background: #ffe3ec;
  color: #333;
  padding: 1.5rem 2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 12px;
  line-height: 1.6;
  max-width: 560px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  font-size: 1rem;
`;

const RightSide = styled.div`
  grid-area: form;
  width: 100%;
  transform: translate(-55%, 100px);
`;

const Form = styled.form`
  background: #ffe3ec;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  max-width: 500px;
  margin-left: auto; /* 오른쪽에 자연스레 붙도록 */

  label {
    font-size: 0.9rem;
    color: #333;
    display: inline-block;
    margin-bottom: 0.35rem;
  }

  input, textarea {
    padding: 0.8rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
  }

  textarea { height: 150px; resize: none; }

  @media (max-width: 1200px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  padding: 0.9rem;
  background: #ffd1e3;
  color: #333;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #fabad2ff; }
`;

/* 푸터가 바닥에 딱 붙도록 grid의 마지막 행에 배치 */
const FooterArea = styled.div`
  grid-area: footer;
  align-self: end;
  width: 100%;
`;

const ScrollTopBtn = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #ffe3ec;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #f38fcdff;
  cursor: pointer;
  box-shadow: 0 2px 7px rgba(0,0,0,0.2);
  &:hover { background: #ddd; }
  transform: translate(-240px,-150px);
`;
