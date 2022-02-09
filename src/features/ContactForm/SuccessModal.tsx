import styled from "styled-components";

interface SuccessModalProps {
  close: () => void;
}

const SuccessModal = ({ close }: SuccessModalProps) => {
  return (
    <Success>
      <div>
        <h3>E-mail enviado com sucesso!</h3>
        <p>Agora só aguardar que entrarei em contato em breve.</p>
        <button onClick={close}>OK</button>
      </div>
    </Success>
  );
};

const Success = styled.div`
  position: fixed;
  background: #000000b0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    max-width: 80%;
    background: #fff;
    color: #000;
    border-radius: 8px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  h3 {
    padding: 16px;
    border-radius: 8px 8px 0 0;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.principal.main};
  }
  p {
    padding: 16px;
    width: 100%;
  }
  button {
    width: 80%;
    padding: 8px 0px;
    background: ${({ theme }) => theme.colors.principal.main};
    margin: 16px 32px;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }
`;

export default SuccessModal;
