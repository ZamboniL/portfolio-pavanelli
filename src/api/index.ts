import { ProjectList } from 'src/types/project';

export const getEntries = async (query?: string) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIROMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=portfolioCard&${query}`,
    { next: { revalidate: 900 } }
  );

  return (await res.json()) as ProjectList;
};
