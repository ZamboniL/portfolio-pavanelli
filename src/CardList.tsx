import styled from "styled-components";
import Card from "./Card";

const CardList: React.FC = () => {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <List>
      {cardArray.map((number) => (
        <Card key={number} />
      ))}
    </List>
  );
};

const List = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  > *:first-child {
    margin-top: 2rem;
  }

  > *:nth-child(odd) {
    margin: 1rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem;

    > *:nth-child(odd) {
      margin: 2rem 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: unset;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;

    > * {
      margin: 2rem 0;
    }
  }
`;

export default CardList;
