import { useEffect, useState } from "react";
import styled from "styled-components";
import Volume from "./Icons/Volume";

const VolumeSquare = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((state) => !state);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
      animation: 3s left ease-in 1;
    }
    & #right {
      animation: 3s right ease-in 1;
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
