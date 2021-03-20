import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./Context/ModalContext";
import Modal from "./Modal";

const ContactMe: React.FC = () => {
  const { contactModal, changeContactModal } = useContext(ModalContext);
  return (
    <Modal open={contactModal} setOpen={changeContactModal} title="contato">
      <Form>
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu E-mail" />
        <textarea
          name=""
          placeholder="Sua Mensagem..."
          id=""
          cols={30}
          rows={10}
        />
      </Form>
    </Modal>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  * {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.dark.medium};
    }
    :nth-child(2) {
      margin: 1rem 0;
    }
  }
`;

export default ContactMe;
