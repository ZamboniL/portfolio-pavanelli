import { getEntries } from 'src/api';
import ProjectsPage from './ProjectsPage';

async function allEntries() {
  const entries = await getEntries('order=fields.order');

  return entries.data;
}

export default async function Portfolio() {
  const entries = await allEntries();
  return <ProjectsPage entries={entries} />;
}
