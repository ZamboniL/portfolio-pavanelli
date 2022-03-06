import styled from "styled-components";
import emailjs from "emailjs-com";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import SuccessModal from "./SuccessModal";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);
    emailjs
      .send(
        "service_q7swm0s",
        "template_v7qu4f9",
        data,
        "user_DfRX9vjlbDchfEWzkAwUB"
      )
      .then(() => {
        setSuccess(true);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {success && <SuccessModal close={() => setSuccess(false)} />}
      <Label>Nome *</Label>
      <Input
        type="text"
        placeholder="Seu nome..."
        error={Boolean(errors.name)}
        {...register("name", { required: "Campo obrigatório" })}
      />
      {errors.name ? <Error>{errors.name.message}</Error> : null}
      <Label>E-mail *</Label>
      <Input
        type="text"
        placeholder="Seu e-mail..."
        error={Boolean(errors.email)}
        {...register("email", {
          required: "Campo obrigatório",
        })}
      />
      {errors.email ? <Error>{errors.email.message}</Error> : null}
      <Label>Mensagem *</Label>
      <Textarea
        rows={9}
        placeholder="Sua mensagem..."
        error={Boolean(errors.message)}
        {...register("message", {
          required: "Campo obrigatório",
        })}
      />
      {errors.message ? <Error>{errors.message.message}</Error> : null}
      <Button type="submit">
        {isLoading ? <BeatLoader color="#fff" /> : "ENVIAR"}
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  & input,
  textarea {
    padding: 14px;
    font-size: 12px;
    margin-bottom: 32px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark.bright};
      font-size: 12px;
    }
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 8px;
`;

const Input = styled.input<{ error?: boolean }>`
  ${(component) => component.error && `border: 2px solid #ffed69`};
`;

const Textarea = styled.textarea<{ error?: boolean }>`
  ${(component) => component.error && `border: 2px solid #ffed69`};
`;

const Error = styled.span`
  color: #ffed69;
  font-weight: 600;
  position: relative;
  top: -24px;
`;

const Button = styled.button`
  /* background-color: ${({ theme }) => theme.colors.secondary.main}; */
  background: unset;
  color: ${({ theme }) => theme.colors.secondary.main};
  border: 2px solid ${({ theme }) => theme.colors.secondary.main};
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 64px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-end;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.main};
    color: #fff;
  }
`;

export default ContactForm;
