import styled from "styled-components";
import Play from "./Icons/Play";

const PlaySquare = () => {
  return (
    <Square>
      <Play />
    </Square>
  );
};

const Square = styled.div`
  grid-area: play;
  background: ${({ theme }) => theme.colors.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaySquare;
