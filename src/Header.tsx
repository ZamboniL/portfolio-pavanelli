import styled from "styled-components";
import Links from "./Nav";

export interface LinksTextProps {
  linksText: { primeiro: string; segundo: string; terceiro: string };
}

const Header: React.FC<LinksTextProps> = ({ linksText }) => {
  return (
    <Hero>
      <Links linksText={linksText} />
      <Image src="/portfolioBg.png" />
      <Logo src="/logo.svg" />
    </Hero>
  );
};

const Hero = styled.header`
  background: url("portfolioBg.png") no-repeat center top;
  position: relative;
  height: 500px;
`;

const Image = styled.img`
  display: none;
`;

const Logo = styled.img`
  width: 12rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export default Header;
