import styled from "styled-components";
import Link from "next/link";
import Behance from "./Behance";
import Close from "./Close";
import Linkedin from "./Linkedin";

interface MobileMenuProps {
  close: () => void;
}

const MobileMenu = ({ close }: MobileMenuProps) => {
  return (
    <Menu>
      <CloseButton onClick={close} role="button" />
      <Options>
        <Link href="/">HOME</Link>
        <Link href="/contato">CONTATO</Link>
      </Options>
      <Socials>
        <a href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
          <Linkedin />
        </a>
        <a href="https://www.behance.net/lucaspavanelli">
          <Behance />
        </a>
      </Socials>
    </Menu>
  );
};

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  z-index: 1000;
  color: #c4c4c4;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
const Socials = styled.div`
  border-top: 1px solid #c4c4c4;
  padding: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const CloseButton = styled(Close)`
  justify-self: end;
  margin: 24px 16px;
`;

export default MobileMenu;
