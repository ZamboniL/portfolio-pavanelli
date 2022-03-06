import { useState } from "react";
import styled from "styled-components";
import Pause from "./Icons/Pause";
import Play from "./Icons/Play";

const PlaySquare = () => {
  const [icon, setIcon] = useState<"play" | "pause">("play");

  return (
    <Square>
      {icon === "play" ? (
        <PlayAnimated onClick={() => setIcon("pause")} />
      ) : (
        <PauseAnimated onClick={() => setIcon("play")} />
      )}
    </Square>
  );
};

const PlayAnimated = styled(Play)`
  cursor: pointer;
  animation: play 0.3s ease-in-out;

  @keyframes play {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const PauseAnimated = styled(Pause)`
  cursor: pointer;
  animation: stop 0.3s ease-in-out;

  @keyframes stop {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Square = styled.div`
  grid-area: play;
  background: ${({ theme }) => theme.colors.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaySquare;
