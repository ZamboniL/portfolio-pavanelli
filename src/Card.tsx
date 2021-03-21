import styled from "styled-components";

interface CardProps {
  src?: string;
  href?: string;
}

const Card: React.FC<CardProps> = ({ src, href }) => {
  return (
    <Container href={href} rel="noopener noreferrer" target="_blank">
      <CardItem src={src} />
    </Container>
  );
};

const Container = styled.a`
  height: fit-content;
`;

const CardItem = styled.div<CardProps>`
  height: 175px;
  cursor: pointer;
  background: ${({ src }) => `url(https:${src}) center no-repeat`};
  border-radius: 5px;
  transition: transform 0.2s;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 325px;
  }
  :hover {
    transform: scale(1.1);
  }
`;

export default Card;
