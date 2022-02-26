import styled from "styled-components";
import { ProjectList } from "../../types/project";
import Project from "../Project";

interface ProjectGridProps {
  list: ProjectList;
}

const ProjectGrid = ({ list }: ProjectGridProps) => {
  const orderedList = list.items.sort(
    (a, b) => a.fields.order - b.fields.order
  );

  return (
    <Grid id="projetos">
      {orderedList.map((item) => (
        <Project
          key={item.sys.id}
          title={item.fields.title}
          subtitle={item.fields.subtitle}
          href={item.fields.link ?? `/projetos/${item.fields.slug}`}
          src={
            list.includes.Asset.find(
              (asset) => asset.sys.id === item.fields.image?.sys.id
            )?.fields.file.url
          }
        />
      ))}
    </Grid>
  );
};

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 264px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-rows: 480px;
    grid-template-columns: 1fr 1fr;
  }
`;

export default ProjectGrid;
