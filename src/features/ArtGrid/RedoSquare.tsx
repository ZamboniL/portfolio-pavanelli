import styled from "styled-components";
import Redo from "./Icons/Redo";

interface RedoSquareProps {
  animate?: boolean;
}

const RedoSquare = ({ animate }: RedoSquareProps) => {
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
    animation: rotate 3s ease-in-out 1;
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
