import { createClient } from "contentful";
import { IPortfolioCard, IText } from "../src/schema/generated/contentful";

const space = process.env.CONTENTFUL_SPACE_ID ?? "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN ?? "";

const client = createClient({
  space,
  accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
}

export const getText = async () => {
  const navigation = await client.getEntry<IText>("2hpeWgMYHjiVRVIxpF5tpb");

  const navText = navigation.fields;
  return navText;
};

export const getProjects = async () => {
  const projects = await client.getEntries<IPortfolioCard>({
    content_type: "portfolioCard",
    order: "fields.order",
  });

  return projects.items;
};

export default { fetchEntries };
