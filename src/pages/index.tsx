import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Footer from "src/components/Footer";
import Container from "src/components/Container";
import Header from "src/components/Header";
import Card from "src/components/Card";
import Hero from "src/components/Hero";
import Window from "src/components/Window";
import { GetServerSideProps } from "next";
import { getEntries } from "src/api";
import { ProjectList } from "src/types/project";

export default function Home({ projectList }: { projectList: ProjectList }) {
  return (
    <>
      <Head>
        <title>Pavanelli Design</title>
      </Head>
      <Header />
      <Container>
        <Hero
          title="UX/UI Designer"
          description="Especialista em criar experiências digitais excepcionais para ajudar
          meus clientes a atingir seus objetivos."
          hasLink
        />
        <div className={styles.cardGrid}>
          {projectList.items
            ? projectList.items.map((item) => (
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
                />
              ))
            : null}
        </div>
        <Window />
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: projectList } = await getEntries(
      `fields.highlight=true&order=fields.order`
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
