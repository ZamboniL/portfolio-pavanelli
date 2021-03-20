import styled from "styled-components";

const Card = styled.article`
  margin: 1rem;
  min-height: 150px;
  background: ${({ theme }) => theme.colors.dark.bright};
  border-radius: 5px;
`;

export default Card;
