import { getEntries } from 'src/api';
import HomePage from './HomePage';

async function highlightedEntries() {
  const entries = await getEntries('fields.highlight=true&order=fields.order');

  return entries;
}

export default async function Home() {
  const entries = await highlightedEntries();
  return <HomePage entries={entries} />;
}
