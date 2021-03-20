const client = require("contentful").createClient({
  space: "nl2asqxlwi3b",
  accessToken: "zKGcnWYzQXi7kXkj_GyXwlOdOIuTiX0U9sjpx-dUUZI",
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
}

export const getText = async () => {
  const navigation = await client.getEntry("2hpeWgMYHjiVRVIxpF5tpb");
  const titles = await client.getEntry("2nRO4uuQJOJPXw3xC9BACc");
  return { navigation, titles };
};

export const getProjects = async () => {
  const projects = await client.getEntries({
    content_type: "portfolioCard",
  });

  return projects;
};

export default { fetchEntries };
