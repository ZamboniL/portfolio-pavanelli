import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { GetServerSideProps } from "next";
import React from "react";
import styled from "styled-components";
import { getEntries } from "../../src/api";
import Asset from "../../src/components/Asset";
import { ProjectList } from "../../src/types/project";

const ProjectPage = ({ projectList }: { projectList: ProjectList }) => {
  const [project] = projectList.items;

  return (
    <Page>
      <TextContainer>
        {documentToReactComponents(project.fields.page, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => (
              <A href={node.data.uri} target="_blank" rel="noopener noreferrer">
                {children}
              </A>
            ),
            [BLOCKS.HEADING_1]: (_, children) => <H1>{children}</H1>,
            [BLOCKS.HEADING_2]: (_, children) => <H2>{children}</H2>,
            [BLOCKS.HEADING_3]: (_, children) => <H3>{children}</H3>,
            [BLOCKS.PARAGRAPH]: (_, children) => {
              if (Array.isArray(children) && children[0] === "") {
                return <Empty />;
              }
              return <P>{children}</P>;
            },
            [BLOCKS.HR]: () => <Hr />,
            [BLOCKS.UL_LIST]: (_, children) => <Ul>{children}</Ul>,
            [BLOCKS.QUOTE]: (_, children) => (
              <Blockquote>{children}</Blockquote>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <Asset
                id={node.data.target.sys.id}
                list={projectList.includes.Asset}
              />
            ),
          },
        })}
      </TextContainer>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { name } = query;
    const { data: projectList } = await getEntries(
      `fields.slug=${name}&include=1`
    );

    return { props: { projectList } };
  } catch (e) {
    return {
      props: {
        projectList: {},
      },
    };
  }
};

const H1 = styled.h1`
  font-size: 24px;
  padding-bottom: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.principal.main};
`;

const H2 = styled.h2`
  font-size: 18px;
  padding-bottom: 16px;
  font-weight: bold;
`;
const H3 = styled.h3`
  font-size: 16px;
  padding-bottom: 16px;
  font-weight: bold;
`;

const Empty = styled.p`
  padding-bottom: 20px;
`;

const P = styled.p``;

const A = styled.a`
  text-decoration: underline;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Ul = styled.ul`
  padding: 0px 20px 20px;
  li:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Blockquote = styled.blockquote`
  padding-bottom: 20px;

  p:last-child {
    font-weight: bold;
  }
`;

const Page = styled.div`
  width: 100%;
  min-height: 100%;
  background: white;
  padding: 40px 0px;
  overflow-x: hidden;
`;

const TextContainer = styled.main`
  max-width: 862px;
  color: ${({ theme }) => theme.colors.dark.main};
  margin: auto;
  padding: 0px 16px;
  font-size: 14px;
`;

export default ProjectPage;
