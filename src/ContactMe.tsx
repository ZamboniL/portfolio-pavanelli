import { useContext, useState } from "react";
import styled from "styled-components";
import { ModalContext } from "./Context/ModalContext";
import Modal from "./Modal";
import emailjs from "emailjs-com";
import { SubmitHandler, useForm } from "react-hook-form";
import BeatLoader from "react-spinners/BeatLoader";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactMe: React.FC = () => {
  const { contactModal, changeContactModal } = useContext(ModalContext);

  const { handleSubmit, register, errors, clearErrors } = useForm<FormValues>();
  const hasError = !!errors.name || !!errors.email || !!errors.message;

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_1qkj3gg",
        "template_v7qu4f9",
        data,
        "user_DfRX9vjlbDchfEWzkAwUB"
      )
      .finally(() => {
        setLoading(false);
        clearErrors();
        changeContactModal();
      });
  };
  return (
    <Modal open={contactModal} setOpen={changeContactModal}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasError && (
          <p style={{ color: "red" }}>Por favor preencha todos os campos.</p>
        )}
        <div>
          <input
            name="name"
            type="text"
            placeholder="Seu Nome"
            ref={register({ required: true })}
          />
          <input
            name="email"
            type="email"
            placeholder="Seu E-mail"
            ref={register({ required: true })}
          />
        </div>

        <textarea
          name="message"
          placeholder="Sua Mensagem..."
          id=""
          cols={30}
          rows={10}
          ref={register({ required: true })}
        />
        <button type="submit">
          {loading ? <BeatLoader size={12} /> : <>Enviar</>}
        </button>
      </Form>
    </Modal>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  button[type="submit"] {
    padding: 1rem;
    -webkit-appearance: none;
    border: 2px solid black;
    background: white;
    margin-top: 1rem;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }
  input,
  button,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.dark.medium};
      font-size: ${({ theme }) => theme.rootFont.sm};
    }
  }

  > div > *:nth-child(2) {
    margin: 1rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    div {
      display: flex;
      margin: 1rem 0;

      *:last-child {
        margin: unset;
        margin-left: 2rem;
      }
    }
    input,
    textarea {
      padding: 1rem;
    }
  }
`;

export default ContactMe;
