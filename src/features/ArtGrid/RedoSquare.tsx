import { useEffect, useState } from "react";
import styled from "styled-components";
import Redo from "./Icons/Redo";

const RedoSquare = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((state) => !state);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Square>
      <RedoIcon className={animate ? "animated" : ""} />
    </Square>
  );
};

const Square = styled.div`
  grid-area: redo;
  background: ${({ theme }) => theme.colors.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedoIcon = styled(Redo)`
  &.animated {
    animation: 3s rotate ease-in-out 1;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default RedoSquare;
