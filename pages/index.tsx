import About from "../src/About";
import Card from "../src/Card";
import ContactMe from "../src/ContactMe";
import { ModalProvider } from "../src/Context/ModalContext";
import Header from "../src/Header";

const Home: React.FC = () => {
  return (
    <>
      <ModalProvider>
        <Header />
        <Card />
        <Card />
        <Card />
        <Card />
        <About />
        <ContactMe />
      </ModalProvider>
    </>
  );
};

export default Home;
