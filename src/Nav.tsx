import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./Context/ModalContext";
import { LinksTextProps } from "./Header";

const Links: React.FC<LinksTextProps> = ({ linksText }) => {
  const { changeAboutModal, changeContactModal } = useContext(ModalContext);

  return (
    <Nav>
      <ul>
        <li>
          <a>{linksText.primeiro}</a>
        </li>
        <li>
          <a onClick={() => changeContactModal()}>{linksText.segundo}</a>
        </li>
        <li>
          <a onClick={() => changeAboutModal()}>{linksText.terceiro}</a>
        </li>
      </ul>
    </Nav>
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
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem 2rem;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;

    ul {
      justify-content: flex-end;
    }
    li:nth-child(2) {
      padding: 0 4rem;
    }
    a {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.bg}) {
    font-size: ${({ theme }) => theme.rootFont.md};
  }
`;

export default Links;