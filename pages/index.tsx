import { getProjects, getText } from "../lib/contentFulPosts";
import About from "../src/About";
import CardList from "../src/CardList";
import ContactMe from "../src/ContactMe";
import { ContentProvider } from "../src/Context/ContentContext";
import { ModalProvider } from "../src/Context/ModalContext";
import Header from "../src/Header";
import {
  IPortfolioCard,
  ITextFields,
  ITitulosFields,
} from "../src/schema/generated/contentful";

export interface HomeProps {
  navText: ITextFields;
  titlesText: ITitulosFields;
  projects: IPortfolioCard[];
}

const Home: React.FC<HomeProps> = ({ titlesText, navText, projects }) => {
  return (
    <ContentProvider
      titlesText={titlesText}
      navText={navText}
      projects={projects}
    >
      <ModalProvider>
        <Header />
        <CardList />
        <ContactMe />
        <About />
      </ModalProvider>
    </ContentProvider>
  );
};

export const getStaticProps = async () => {
  const { navText, titlesText } = await getText();
  const projects = await getProjects();
  return {
    props: { navText, titlesText, projects },
  };
};

export default Home;
