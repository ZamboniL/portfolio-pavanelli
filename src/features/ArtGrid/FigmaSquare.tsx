import styled from "styled-components";
import Figma from "./Icons/Figma";

const FigmaSquare = () => {
  return (
    <Square>
      <Figma />
    </Square>
  );
};

const Square = styled.div`
  grid-area: figma;
  background: ${({ theme }) => theme.colors.dark.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FigmaSquare;
