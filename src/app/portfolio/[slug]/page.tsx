import { getEntries } from 'src/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Asset from 'src/components/Asset';
import Title from './Title';
import PortfolioItemPage from './PortfolioItemPage';

async function getSpecificProject(slug: string) {
  const projectList = await getEntries(`fields.slug=${slug}&include=1`);

  return projectList;
}

export default async function Projects({ params }: { params: { slug: string } }) {
  const projectList = await getSpecificProject(params.slug);
  const [project] = projectList.items;

  return (
    <main className="flex max-w-8xl flex-col gap-6 px-5 text-white md:items-center md:pt-20 2xl:px-0">
      <Title title={project.fields.title} subtitle={project.fields.subtitle} />
      <PortfolioItemPage projectList={projectList} />
    </main>
  );
}
