import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TypingText = ({ texts = [], typingSpeed = 100, deletingSpeed = 50, delay = 1500 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingInterval, setTypingInterval] = useState(typingSpeed);

  useEffect(() => {
    const current = loopNum % texts.length;
    const fullText = texts[current];

    const handleTyping = () => {
      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      // 속도 설정
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
        setTypingInterval(deletingSpeed);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingInterval(typingSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingInterval);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, typingInterval, typingSpeed, deletingSpeed, delay]);

  return (
    <TextWrapper>
      {text}
      <Cursor>|</Cursor>
    </TextWrapper>
  );
};

export default TypingText;

const TextWrapper = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
`;

const Cursor = styled.span`
  display: inline-block;
  margin-left: 2px;
  animation: blink 0.9s infinite;
  color: #555;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
