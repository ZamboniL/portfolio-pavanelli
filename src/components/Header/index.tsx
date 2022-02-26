import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Behance from "./Behance";
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
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li className={current === "/contato" ? "current" : ""}>
              <Link href="/contato">
                <a>CONTATO</a>
              </Link>
            </li>
          </List>
          <Hamburger src="/nav.svg" alt="" onClick={() => setIsOpen(!isOpen)} />
          <LogoContainer href="/">
            <Logo />
          </LogoContainer>
          <List>
            <li>
              <Link href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
                <a>
                  <Linkedin />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.behance.net/lucaspavanelli">
                <a>
                  <Behance />
                </a>
              </Link>
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
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
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
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.dark.main};
    }
    & > * {
      display: flex;
    }
    & svg {
      transition: fill 0.3s ease-in-out;
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
