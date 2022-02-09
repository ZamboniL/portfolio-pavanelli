import axios from "axios";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import ArtGrid from "../src/features/ArtGrid";
import Container from "../src/components/Container";
import Header from "../src/components/Header";
import ProjectGrid from "../src/components/ProjectGrid";

export interface ProjectList {
  includes: {
    Asset: {
      sys: {
        id: string;
      };
      fields: {
        title: string;
        file: {
          url: string;
        };
      };
    }[];
  };
  items: {
    sys: {
      id: string;
    };
    fields: {
      title: string;
      subtitle: string;
      link: string;
      image: {
        sys: {
          id: string;
        };
      };
      order: number;
    };
  }[];
}

const Home = ({ projectList }: { projectList: ProjectList }) => {
  return (
    <main>
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
        </Hero>
      </Container>
      <ProjectGrid list={projectList} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: projectList } = await axios.get<ProjectList>(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIROMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    );

    return { props: { projectList } };
  } catch (e) {
    return {
      props: {
        projectList: {},
      },
    };
  }
};

const Hero = styled.div`
  margin: 72px 0px;
  padding: 0px 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    gap: 104px;
    padding: unset;
    grid-template-columns: 45% 55%;
    margin-left: 80px;
    margin-top: 80px;
    margin-bottom: 80px;
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
