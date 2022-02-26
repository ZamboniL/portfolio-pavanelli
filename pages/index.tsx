import { GetServerSideProps } from "next";
import styled from "styled-components";
import ArtGrid from "../src/features/ArtGrid";
import Container from "../src/components/Container";
import ProjectGrid from "../src/components/ProjectGrid";
import { ChevronDown } from "@styled-icons/bootstrap";
import { getEntries } from "../src/api";
import { ProjectList } from "../src/types/project";

const Home = ({ projectList }: { projectList: ProjectList }) => {
  return (
    <main style={{ height: "calc(100% - 61px)" }}>
      <Container>
        <Hero>
          <HeroText>
            <Title>Olá! Seja bem-vindo ao meu portfóflio.</Title>
            <Introduction>
              Me chamo Lucas Pavanelli e sou um Designer que trabalha nos
              segmentos de UX e UI.
            </Introduction>
            <Introduction>
              Nesse site você encontra alguns dos meus mais recentes projetos
              feitos, sendo a maior parte deles e-commerces.
            </Introduction>
          </HeroText>
          <ArtGrid />
          <Arrow href="#projetos">
            <ChevronDown />
          </Arrow>
        </Hero>
      </Container>
      <ProjectGrid list={projectList} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: projectList } = await getEntries();

    return { props: { projectList } };
  } catch (e) {
    return {
      props: {
        projectList: {},
      },
    };
  }
};

const Arrow = styled.a`
  position: absolute;
  bottom: 16px;
  width: 64px;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateX(-50%) scale(0.8);
  }
`;

const Hero = styled.div`
  height: 100%;
  align-items: center;
  padding: 0px 16px;
  display: flex;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    gap: 104px;
    padding: unset;
    grid-template-columns: 45% 55%;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;
const Introduction = styled.p`
  font-size: 14px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export default Home;
