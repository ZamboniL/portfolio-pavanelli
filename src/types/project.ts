import { Document } from "@contentful/rich-text-types";

interface Sys {
  space: {
    sys: SysType;
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: SysType;
  };
  revision: number;
  contentType: {
    sys: SysType;
  };
  locale: string;
}

interface SysType {
  type: string;
  linkType: string;
  id: string;
}

export interface ProjectList {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: {
    metadata: {
      tags: string[];
    };
    sys: Sys;
    fields: {
      title: string;
      subtitle: string;
      slug: string;
      image: {
        sys: SysType;
      };
      link: string;
      order: number;
      page: Document;
    };
  }[];
  includes: {
    Asset: AssetDetails[];
  };
}

export interface AssetDetails {
  metadata: {
    tags: Tag[];
  };
  sys: Sys;
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

interface Tag {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
}
