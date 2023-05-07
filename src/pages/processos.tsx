import Head from "next/head";
import styles from "src/styles/Processes.module.css";
import Footer from "src/components/Footer";
import Container from "src/components/Container";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import { motion } from "framer-motion";
import Window from "src/components/Window";
import BulletList from "src/components/BulletList";
import LogoGrid from "src/components/LogoGrid";

const MotionWindow = motion(Window);

export default function Processes() {
  return (
    <>
      <Head>
        <title>Processos | Pavanelli Design</title>
      </Head>
      <Header />
      <Container className={styles.container}>
        <Hero
          title="Processos"
          description="Transformando visões ambiciosas em marcas transformadoras."
          invert
          disableDescriptionAnimation
        />
        <MotionWindow
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.description}
        >
          Com mais de 20 projetos em empresas diferentes, vemos um histórico
          comprovado de reconhecimento e sucesso para nossos parceiros. Onde
          desempenho toda a minha dedicação para entender suas necessidades de
          negócios e criar projetos que se alinhem com seus objetivos.
        </motion.p>
        <BulletList
          title="Pesquisa & Estratégia de marca"
          list={[
            "Brand Strategy",
            "Research & Insights",
            "User Experience Research",
          ]}
        />
        <BulletList
          title="Direção Criativa & Design"
          list={[
            "Web Design",
            "UX & UI Design",
            "Brand Identity",
            "Interaction Design",
          ]}
        />
        <LogoGrid />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.endNote}
        >
          Acredito que é possível viver em um mundo onde cada produto ou serviço
          é projetado da melhor forma possível.
        </motion.p>
        <Footer />
      </Container>
    </>
  );
}
