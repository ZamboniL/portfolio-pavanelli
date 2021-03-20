import { fetchEntries, getProjects, getText } from "../lib/contentFulPosts";
import About from "../src/About";
import CardList from "../src/CardList";
import ContactMe from "../src/ContactMe";
import { ModalProvider } from "../src/Context/ModalContext";
import Header from "../src/Header";

interface HomeProps {
  data: Object;
  navigation: {
    fields: { primeiro: string; segundo: string; terceiro: string };
  };
  titles: { fields: { primeiro: string; segundo: string } };
  projects: {
    items: [
      {
        fields: { link: string; image: { fields: { file: { url: string } } } };
        sys: { id: string };
      }
    ];
  };
}

const Home: React.FC<HomeProps> = ({ data, titles, navigation, projects }) => {
  console.log(projects.items);
  return (
    <>
      <ModalProvider>
        <Header linksText={navigation.fields} />
        <CardList list={projects.items} />
        <ContactMe title={titles.fields.primeiro} />
        <About title={titles.fields.segundo} />
      </ModalProvider>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await fetchEntries();
  const { navigation, titles } = await getText();
  const projects = await getProjects();
  return {
    props: { data, navigation, titles, projects },
  };
};

export default Home;
