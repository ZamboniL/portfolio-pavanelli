import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Behance from "./Behance";
import Close from "./Close";
import Linkedin from "./Linkedin";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const router = useRouter();
  const current = router.route;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Root>
      <Container>
        <Nav>
          <List>
            <li className={current === "/" ? "current" : ""}>
              <a href="/">HOME</a>
            </li>
            <li className={current === "/contato" ? "current" : ""}>
              <a href="/contato">CONTATO</a>
            </li>
          </List>
          <Hamburger src="/nav.svg" alt="" onClick={() => setIsOpen(!isOpen)} />
          <LogoContainer href="/">
            <Logo />
          </LogoContainer>
          <List>
            <li>
              <a href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/lucaspavanelli">
                <Behance />
              </a>
            </li>
          </List>
        </Nav>
      </Container>
      {isOpen ? <MobileMenu close={() => setIsOpen(false)} /> : null}
    </Root>
  );
};

const Root = styled.header`
  padding: 18px;
  background: #fff;
  color: ${({ theme }) => theme.colors.dark.main};
  font-weight: 800;
  font-size: 16px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LogoContainer = styled.a`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    justify-content: center;
    align-items: center;
  }
`;

const Hamburger = styled.img`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
  display: none;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  width: min-content;
  gap: 32px;

  & > a {
    display: flex;
  }

  & > li {
    display: flex;
    color: ${({ theme }) => theme.colors.dark.bright};
    &:hover {
      color: ${({ theme }) => theme.colors.dark.main};
    }
    & > * {
      display: flex;
    }
    & svg {
      fill: ${({ theme }) => theme.colors.dark.bright};
      &:hover {
        fill: ${({ theme }) => theme.colors.dark.main};
      }
    }
  }

  & .current {
    color: ${({ theme }) => theme.colors.dark.main};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
  }
`;

export default Header;
