import { useEffect, useState } from "react";
import styled from "styled-components";
import AlphabetSquare from "./AlphabetSquare";
import FigmaSquare from "./FigmaSquare";
import PlaySquare from "./PlaySquare";
import RedoSquare from "./RedoSquare";
import VolumeSquare from "./VolumeSquare";
import WelcomeSquare from "./WelcomeSquare";

const animations = ["volume", "redo", "welcome"];

const ArtGrid = () => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(animations[Math.floor(Math.random() * animations.length)]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Root>
      <PlaySquare />
      <AlphabetSquare />
      <FigmaSquare />
      <RedoSquare animate={animation === "redo"} />
      <VolumeSquare animate={animation === "volume"} />
      <WelcomeSquare animate={animation === "welcome"} />
    </Root>
  );
};

const Root = styled.aside`
  display: none;
  grid-template:
    [row1-start] ". play alphabet" 200px [row1-end]
    [row2-start] "welcome welcome figma" 200px [row2-end]
    [row3-start] ". redo volume" 200px [row3-end] /
    100px 200px 200px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
  }
`;

export default ArtGrid;
