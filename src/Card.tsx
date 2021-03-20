import styled from "styled-components";

interface CardProps {
  src: string;
  href?: string;
}

const Card: React.FC<CardProps> = ({ src, href }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <CardItem src={src} />
    </a>
  );
};

const CardItem = styled.div<CardProps>`
  min-height: 175px;
  cursor: pointer;
  background: ${({ src }) => `url(https:${src}) center no-repeat`};
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 325px;
  }
`;

export default Card;
