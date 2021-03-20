import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <Hero>
      <Image src="/portfolioBg.png" />
      <Logo src="/logo.svg" />
    </Hero>
  );
};

const Hero = styled.header`
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Logo = styled.img`
  width: 15rem;
  position: absolute;
  top: 0;
  left: 50%;
`;

export default Home;
