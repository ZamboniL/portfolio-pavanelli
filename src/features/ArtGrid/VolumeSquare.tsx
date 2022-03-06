import { useEffect, useState } from "react";
import styled from "styled-components";
import Volume from "./Icons/Volume";

const VolumeSquare = () => {
  return (
    <Square>
      <VolumeSlider />
    </Square>
  );
};

const VolumeSlider = styled(Volume)`
  #left,
  #right {
    cursor: pointer;
  }
`;

const Square = styled.div`
  grid-area: volume;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default VolumeSquare;
