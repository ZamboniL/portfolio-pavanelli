import styled from "styled-components";
import Alphabet from "./Icons/Alphabet";

const AlphabetSquare = () => {
  return (
    <Square>
      <Alphabet />
    </Square>
  );
};

const Square = styled.div`
  grid-area: alphabet;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AlphabetSquare;
