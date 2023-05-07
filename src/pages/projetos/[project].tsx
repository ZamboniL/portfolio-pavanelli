import Head from "next/head";
import styles from "src/styles/Project.module.css";
import Footer from "src/components/Footer";
import Container from "src/components/Container";
import Header from "src/components/Header";
import ProjectHeader from "src/components/ProjectHeader";
import ProjectImage from "src/components/ProjectImage";
import { GetServerSideProps } from "next";
import { getEntries } from "src/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { ProjectList } from "src/types/project";
import Asset from "src/components/Asset";

export default function Projects({
  projectList,
}: {
  projectList: ProjectList;
}) {
  const [project] = projectList.items;

  return (
    <>
      <Head>
        <title>{project.fields.subtitle} | Pavanelli Design</title>
      </Head>
      <Header />
      <Container className={styles.container}>
        <ProjectHeader
          title={project.fields.subtitle}
          subtitle={project.fields.title}
          description={project.fields.description}
          date={project.sys.createdAt}
          clientList={project.fields.client?.split("\n")}
          serviceList={project.fields.service?.split("\n")}
          industriesList={project.fields.industrie?.split("\n")}
        />
        {documentToReactComponents(project.fields.page, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => (
              <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
            [BLOCKS.HEADING_1]: (_, children) => <h1>{children}</h1>,
            [BLOCKS.HEADING_2]: (_, children) => <h2>{children}</h2>,
            [BLOCKS.HEADING_3]: (_, children) => <h3>{children}</h3>,
            [BLOCKS.PARAGRAPH]: (_, children) => {
              if (Array.isArray(children) && children[0] === "") {
                return <></>;
              }
              return <p className={styles.paragraph}>{children}</p>;
            },
            [BLOCKS.HR]: () => (
              <hr style={{ width: "100%", borderColor: "rgb(23, 23, 23)" }} />
            ),
            [BLOCKS.UL_LIST]: (_, children) => <ul>{children}</ul>,
            [BLOCKS.QUOTE]: (_, children) => (
              <blockquote>{children}</blockquote>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <Asset
                id={node.data.target.sys.id}
                list={projectList.includes.Asset}
              />
            ),
          },
        })}
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { project } = query;
    const { data: projectList } = await getEntries(
      `fields.slug=${project}&include=1`
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
