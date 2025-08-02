import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const handleSendEmail = (e) => {
    e.preventDefault();

    const form = e.target.form || e.target.closest("form");

    emailjs
      .sendForm(
        "service_f2rdh3f",     // ⭐ EmailJS Service ID
        "template_plwdqo9",    // ⭐ EmailJS Template ID
        form,
        "_n6O6UlqBmjw291Wl"      // ⭐ EmailJS Public Key
      )
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
      <LeftSide>
        <MessageBox>
          지금까지 제 포트폴리오를 봐주셔서 감사합니다!<br />
          디자인부터 코딩까지 전 과정에 참여하며 성장하고 있습니다.<br />
          늘 배우고 연구하며, 유행을 따르기보단,<br />만들어가는 디자이너가 되겠습니다.
        </MessageBox>
      </LeftSide>

      <RightSide>
        <Form>
          <label>이메일 주소</label>
          <input type="email" name="user_email" placeholder="example@email.com" required />

          <label>제목</label>
          <input type="text" name="subject" placeholder="제목을 입력하세요" required />

          <label>내용</label>
          <textarea name="message" placeholder="내용을 입력하세요" required />

          <SubmitButton onClick={handleSendEmail}>
            메일전송
          </SubmitButton>
        </Form>
      </RightSide>

      <ScrollTopBtn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ▲
      </ScrollTopBtn>
    </ContactSection>
  );
}


const ContactSection = styled.section`
  display: flex;
  min-height: 900px;
  justify-content: end;
  align-items: flex-start; /* 기존 */
  padding: 8rem 5rem 4rem; /* 위쪽 여백 더 주기 */
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  min-width: 1400px;
  gap: 100px;
`;


const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 2rem;
`;

const MessageBox = styled.div`
  background: #FFE3EC;
  color: #333;
  padding: 1.5rem 2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 12px;
  line-height: 1.6;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  transform: translateX(14%);
  margin-top: 80%;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 1.2rem 1.5rem;
  }
`;

const RightSide = styled.div`
  width: 50%;
`;

const Form = styled.form`
  background: #FFE3EC;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 12%;
  margin-left: 5%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  label {
    font-size: 0.9rem;
    color: #333;
  }

  input, textarea {
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    height: 150px;
    resize: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background: #FFD1E3;;
  color: #333;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #fabad2ff;;
  }
`;

const ScrollTopBtn = styled.button`
  position: absolute;
  transform: translateX(100px);
  bottom: 20px;
  right: 20px;
  background: #FFE3EC;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #f38fcdff;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);

  &:hover {
    background: #ddd;
  }
`;
