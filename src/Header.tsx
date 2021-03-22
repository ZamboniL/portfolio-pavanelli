import styled from "styled-components";
import Links from "./Nav";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";

const Header: React.FC = () => {
  return (
    <Hero>
      <Links />
      <Logo src="/logo.svg" />
      <ArrowDown
        onClick={() => {
          window.scrollTo(0, document.body.scrollHeight);
        }}
      />
    </Hero>
  );
};

const Hero = styled.header`
  background: url("portfolioBg.png") no-repeat center top;
  background-size: cover;
  position: relative;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ::after {
      content: "";
      display: block;
      position: absolute;
      background: linear-gradient(to right, black, transparent 25%),
        linear-gradient(to left, black, transparent 25%);
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
`;

const Logo = styled.img`
  width: 12rem;
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 16rem;
  }
`;

const ArrowDown = styled(ArrowIosDownwardOutline)`
  width: 8rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  fill-opacity: 0.75;
  z-index: 1;
  cursor: pointer;
  transition: width 0.2s ease-in-out;
  :hover {
    width: 10rem;
  }
`;

export default Header;
