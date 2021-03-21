import styled from "styled-components";
import { Behance } from "@styled-icons/entypo-social/Behance";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import Modal from "./Modal";
import { useContext } from "react";
import { ModalContext } from "./Context/ModalContext";
import { ContentContext } from "./Context/ContentContext";

const About: React.FC = () => {
  const { aboutModal, changeAboutModal } = useContext(ModalContext);
  return (
    <Modal open={aboutModal} setOpen={changeAboutModal}>
      <p>Olá!</p>{" "}
      <p>
        Me chamo Lucas Pavanelli e sou um Designer que trabalha nos segmentos de
        UX e UI.
      </p>{" "}
      <p>
        Nesse site você encontra alguns dos meus mais recentes projetos feitos,
        sendo a maior parte deles e-commerces.
      </p>{" "}
      <p>
        Aqui embaixo tem algumas das minhas redes sociais que possa te
        interessar!{" "}
      </p>
      <p>Obrigado.</p>
      <Socials>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/"
        >
          <Linkedin />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.behance.net/lucaspavanelli"
        >
          <Behance />
        </a>
      </Socials>
    </Modal>
  );
};

const Socials = styled.section`
  svg {
    width: 2rem;
    fill: white;
    margin-top: 1rem;
  }
  a:last-of-type {
    margin-left: 1rem;
  }
`;

export default About;
