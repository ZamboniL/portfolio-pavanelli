import Head from "next/head";
import styles from "src/styles/Projects.module.css";
import Footer from "src/components/Footer";
import Container from "src/components/Container";
import Header from "src/components/Header";
import Card from "src/components/Card";
import Hero from "src/components/Hero";
import { GetServerSideProps } from "next";
import { getEntries } from "src/api";
import { ProjectList } from "src/types/project";

export default function Projects({
  projectList,
}: {
  projectList: ProjectList;
}) {
  const orderedList = projectList.items.sort(
    (a, b) => a.fields.order - b.fields.order
  );

  const hasEvenProjects = orderedList.length % 2 === 0;

  return (
    <>
      <Head>
        <title>Projetos | Pavanelli Design</title>
      </Head>
      <Header />
      <Container className={styles.container}>
        <Hero
          title="Projetos"
          description="Não crio apenas marcas, crio experiências inesquecíveis que deixam uma impressão duradoura."
          invert
        />
        <div className={styles.cardGrid}>
          {orderedList.map((item, i) => (
            <Card
              key={item.sys.id}
              title={item.fields.subtitle}
              description={item.fields.title}
              href={item.fields.link ?? `/projetos/${item.fields.slug}`}
              src={
                projectList.includes.Asset.find(
                  (asset) => asset.sys.id === item.fields.image?.sys.id
                )?.fields.file.url
              }
              className={
                i === 2 || (i + 1 === orderedList.length && hasEvenProjects)
                  ? styles.bigCard
                  : ""
              }
            />
          ))}
        </div>
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: projectList } = await getEntries();

    return { props: { projectList } };
  } catch (e) {
    return {
      props: {
        projectList: {},
      },
    };
  }
};
