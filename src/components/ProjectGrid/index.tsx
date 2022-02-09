import styled from "styled-components";
import { ProjectList } from "../../../pages";
import Project from "../Project";

interface ProjectGridProps {
  list: ProjectList;
}

const ProjectGrid = ({ list }: ProjectGridProps) => {
  return (
    <Grid>
      {list.items.map((item) => (
        <Project
          key={item.sys.id}
          title={item.fields.title}
          subtitle={item.fields.subtitle}
          href={item.fields.link}
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
