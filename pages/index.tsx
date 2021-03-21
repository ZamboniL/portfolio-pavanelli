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
} from "../src/schema/generated/contentful";

export interface HomeProps {
  navText: ITextFields;
  projects: IPortfolioCard[];
}

const Home: React.FC<HomeProps> = ({ navText, projects }) => {
  return (
    <ContentProvider navText={navText} projects={projects}>
      <ModalProvider>
        <Header />
        <CardList />
        <ContactMe />
        <About />
      </ModalProvider>
    </ContentProvider>
  );
};

export const getServerSideProps = async () => {
  const navText = await getText();
  const projects = await getProjects();
  return {
    props: { navText, projects },
  };
};

export default Home;
