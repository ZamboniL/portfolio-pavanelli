import { useEffect, useState } from "react";
import styled from "styled-components";
import Redo from "./Icons/Redo";

const RedoSquare = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <Square>
      <RedoIcon />
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
  cursor: pointer;
`;

export default RedoSquare;
