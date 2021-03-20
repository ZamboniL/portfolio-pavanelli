import styled from "styled-components";
import { X } from "@styled-icons/bootstrap/X";

export interface ModalProps {
  open: Boolean;
  setOpen: Function;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ title, setOpen, open, children }) => {
  if (!open) return <></>;

  return (
    <Obscure>
      <Container>
        <Header>
          <Title>{title}</Title>
          <X onClick={() => setOpen()} />
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
  article {
    padding: 0.5rem;
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
`;

const Title = styled.h1`
  text-transform: uppercase;
`;

export default Modal;
