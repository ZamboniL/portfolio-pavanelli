import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./Context/ModalContext";

const Header: React.FC = () => {
  const { changeAboutModal, changeContactModal } = useContext(ModalContext);
  return (
    <Hero>
      <Nav>
        <ul>
          <li>
            <a>projetos</a>
          </li>
          <li><a onClick={() => changeContactModal()}>contato</a></li>
          <li><a onClick={() => changeAboutModal()}>sobre</a></li>
        </ul>
      </Nav>
      <Image src="/portfolioBg.png" />
      <Logo src="/logo.svg" />
    </Hero>
  );
};

const Nav = styled.nav`
  padding: 0.5rem 1rem;
  font-weight: 500;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  li {
    text-transform: uppercase;
  }
`;

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
