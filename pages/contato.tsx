import styled from "styled-components";
import Container from "../src/components/Container";
import ContactForm from "../src/features/ContactForm";

const Contact = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <Container>
        <Grid>
          <Title>
            Vamos construir algo <Underlined>incrível</Underlined> e{" "}
            <Underlined>único</Underlined>?
          </Title>
          <ContactForm />
        </Grid>
      </Container>
      <img src="/squiggle.svg" alt="" />
    </main>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 40px;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 48px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 72px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 130.5%;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: right;
    font-size: 84px;
  }
`;

const Underlined = styled.span`
  text-decoration: underline;
`;

export default Contact;
