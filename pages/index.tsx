import About from "../src/About";
import Card from "../src/Card";
import CardList from "../src/CardList";
import ContactMe from "../src/ContactMe";
import { ModalProvider } from "../src/Context/ModalContext";
import Header from "../src/Header";

const Home: React.FC = () => {
  return (
    <>
      <ModalProvider>
        <Header />
        <CardList />

        <About />
        <ContactMe />
      </ModalProvider>
    </>
  );
};

export default Home;
