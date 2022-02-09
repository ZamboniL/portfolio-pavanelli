import styled from "styled-components";
import Volume from "./Icons/Volume";

interface VolumeSquareProps {
  animate?: boolean;
}

const VolumeSquare = ({ animate }: VolumeSquareProps) => {
  return (
    <Square>
      <Volume className={animate ? "animated" : ""} />
    </Square>
  );
};

const Square = styled.div`
  grid-area: volume;
  display: flex;
  justify-content: center;
  align-items: center;
  & .animated {
    & #left {
      animation: left ease-in 4s 1;
    }
    & #right {
      animation: right ease-in 3s 1;
    }
  }

  @keyframes left {
    30% {
      transform: translateY(24px);
    }
    60% {
      transform: translateY(120px);
    }

    90% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY() (80px);
    }
  }
  @keyframes right {
    30% {
      transform: translateY(-80px);
    }

    60% {
      transform: translateY(16px);
    }

    90% {
      transform: translateY() (-48px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export default VolumeSquare;
