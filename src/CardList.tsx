import styled from "styled-components";
import Card from "./Card";

interface CardListProps {
  list: [
    {
      fields: { link: string; image: { fields: { file: { url: string } } } };
      sys: { id: string };
    }
  ];
}

const CardList: React.FC<CardListProps> = ({ list }) => {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <List>
      {list.map((item) => (
        <Card
          src={item.fields.image.fields.file.url}
          href={item.fields.link}
          key={item.sys.id}
        />
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
