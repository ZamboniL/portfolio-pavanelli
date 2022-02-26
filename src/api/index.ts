import axios from "axios";
import { ProjectList } from "../types/project";

export const getEntries = (query?: string) =>
  axios.get<ProjectList>(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIROMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=portfolioCard&${query}`
  );
