import { useEffect, useState } from "react";
import styled from "styled-components";
import SpeechBubble from "./Icons/SpeechBubble";
import Star from "./Icons/Star";
import Stars from "./Icons/Stars";

const welcomeTexts = [
  "Bem-vindo",
  "welcome",
  "bienvenue",
  "bienvenido",
  "yokoso",
  "velkommen",
];

interface WelcomeSquareProps {
  animate?: boolean;
}

const WelcomeSquare = ({ animate }: WelcomeSquareProps) => {
  const [text, setText] = useState(welcomeTexts[0]);

  useEffect(() => {
    if (animate) {
      setText(welcomeTexts[Math.floor(Math.random() * welcomeTexts.length)]);
    }
  }, [animate]);

  return (
    <Square>
      <SpeechBubble />
      <Speech>{text}</Speech>
      <StarIcon />
      <StarsIcon />
    </Square>
  );
};

const Square = styled.div`
  grid-area: welcome;
  margin-top: 34px;
  margin-bottom: 34px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  position: relative;
`;

const Speech = styled.p`
  color: ${({ theme }) => theme.colors.principal.main};
  position: absolute;
  top: 45%;
  left: 46%;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StarIcon = styled(Star)`
  position: absolute;
  top: -8px;
  left: -16px;
`;

const StarsIcon = styled(Stars)`
  position: absolute;
  bottom: 0;
  right: -10px;
`;

export default WelcomeSquare;
