// src/components/Contact.jsx
import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // 기본 클라이언트 검증
    const nextErrors = {};
    const email = form.user_email.value?.trim();
    const subject = form.subject.value?.trim();
    const message = form.message.value?.trim();
    if (!email) nextErrors.email = "이메일을 입력해 주세요.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "이메일 형식이 올바르지 않습니다.";
    if (!subject) nextErrors.subject = "제목을 입력해 주세요.";
    if (!message) nextErrors.message = "내용을 입력해 주세요.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    try {
      setLoading(true);
      setStatus(null);

      await emailjs.sendForm(
        "service_f2rdh3f",    // EmailJS Service ID
        "template_plwdqo9",   // EmailJS Template ID
        form,
        "_n6O6UlqBmjw291Wl"   // EmailJS Public Key
      );

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      {/* 좌: 소개 메시지 */}
      <LeftSide className="container">
        <MessageBox role="note" aria-label="소개 메시지">
          지금까지 제 포트폴리오를 봐주셔서 감사합니다!<br />
          디자인부터 코딩까지 전 과정에 참여하며 성장하고 있습니다.<br />
          늘 배우고 연구하며, 유행을 따르기보단,<br />
          만들어가는 디자이너가 되겠습니다.
        </MessageBox>
      </LeftSide>

      {/* 우: 메일 폼 */}
      <RightSide className="container">
        <Form onSubmit={handleSendEmail} noValidate aria-live="polite">
          <Field>
            <label htmlFor="user_email">이메일 주소</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="example@email.com"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              autoComplete="email"
              inputMode="email"
            />
            {errors.email && <ErrorText id="email-error">{errors.email}</ErrorText>}
          </Field>

          <Field>
            <label htmlFor="subject">제목</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="제목을 입력하세요"
              required
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              autoComplete="off"
            />
            {errors.subject && <ErrorText id="subject-error">{errors.subject}</ErrorText>}
          </Field>

          <Field>
            <label htmlFor="message">내용</label>
            <textarea
              id="message"
              name="message"
              placeholder="내용을 입력하세요"
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <ErrorText id="message-error">{errors.message}</ErrorText>}
          </Field>

          <SubmitButton type="submit" disabled={loading} aria-busy={loading}>
            {loading ? "전송 중..." : "메일 전송"}
          </SubmitButton>

          {status === "success" && (
            <SuccessText role="status">메일이 성공적으로 전송되었습니다 ✅</SuccessText>
          )}
          {status === "error" && (
            <ErrorText role="alert">전송에 실패했어요. 잠시 후 다시 시도해 주세요.</ErrorText>
          )}
        </Form>
      </RightSide>

      {/* 푸터: 바닥 밀착 */}
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

const ContactSection = styled.section`
  /* 화면 높이를 채우고, 마지막 행에 footer 고정 */
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 460px; /* 좌 가변 / 우 고정폭(폼) */
  grid-template-rows: 1fr auto;                /* 본문 / 푸터 */
  grid-template-areas:
    "left form"
    "footer footer";
  align-items: center;
  gap: 32px;
  padding: 72px 0 0; /* 하단 패딩 0: 푸터가 바닥에 붙도록 */

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "left"
      "form"
      "footer";
    gap: 24px;
    padding: 56px 0 0;
  }
`;

const LeftSide = styled.div`
  grid-area: left;
  display: grid;
  place-items: center;
`;

const MessageBox = styled.div`
  position: relative;
  z-index: 1; /* 고정 로고가 덮지 않도록 */
  background: #ffe3ec;
  color: #333;
  padding: 1.5rem 2rem;
  font-weight: 700;
  text-align: center;
  border-radius: 12px;
  line-height: 1.6;
  max-width: 560px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  font-size: 1rem;
  margin-left: 80px;
  transform: translateY(-110px);
  /* 필요시 X,Y 미세조정 (예: 로고 위로 살짝 올리기)
     transform: translate(-55%, -40px);
     @media (max-width:1200px){ transform:none; }
  */
`;

const RightSide = styled.div`
  grid-area: form;
  width: 100%;
  display: grid;
  justify-items: end;   /* 폼을 오른쪽 끝에 */
  align-items: center;  /* 수직 중앙 */

  @media (max-width: 1200px) {
    justify-items: stretch; /* 모바일에서는 가로 꽉 */
  }
`;

const Form = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 460px;
  width: 100%;
  transform: translate(-300px, 50px);

`;

const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    color: #333;
    display: inline-block;
    margin-bottom: 0.35rem;
    font-weight: 600;
  }

  input,
  textarea {
    padding: 0.8rem;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    font-size: 1rem;
    background: #fff;
  }

  input:focus,
  textarea:focus {
    outline: 2px solid #7d4eff;
    outline-offset: 2px;
    border-color: transparent;
  }

  textarea {
    height: 150px;
    resize: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.9rem;
  background: #ffd1e3;
  color: #333;
  border: none;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: filter 0.15s ease;
  &[disabled] { opacity: 0.6; cursor: not-allowed; }
  &:hover { filter: brightness(0.97); }
`;

const ErrorText = styled.p`
  color: #b00020;
  font-size: 0.9rem;
  margin-top: 6px;
`;

const SuccessText = styled.p`
  color: #128a3f;
  font-size: 0.95rem;
  margin-top: 8px;
  font-weight: 600;
`;

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
  font-weight: 800;
  &:hover { background: #f1f1f1; }
`;
