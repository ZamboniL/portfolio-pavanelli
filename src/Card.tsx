import styled from "styled-components";

const Card = styled.article`
  min-height: 175px;
  background: ${({ theme }) => theme.colors.dark.bright};
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 325px;
  }
`;

export default Card;
