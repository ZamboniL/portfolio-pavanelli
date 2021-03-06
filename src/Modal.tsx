import styled from "styled-components";
import { Close } from "@styled-icons/material/Close";

export interface ModalProps {
  open: Boolean;
  setOpen: Function;
}

const Modal: React.FC<ModalProps> = ({ setOpen, open, children }) => {
  if (!open) return <></>;

  return (
    <Obscure>
      <Container>
        <Header>
          <Close onClick={() => setOpen()} />
        </Header>
        <article>{children}</article>
      </Container>
    </Obscure>
  );
};

const Container = styled.div`
  padding: 1rem;
  line-height: 1.3rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 56rem;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  display: flex;
  place-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  svg:first-of-type {
    width: 3rem;
    margin: 0 -0.5rem;
    margin-left: auto;
    cursor: pointer;
  }
`;

const Obscure = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #000000f0;
  top: 0;
  left: 0;
  display: flex;
  place-items: center;
  z-index: 2;
`;

export default Modal;
