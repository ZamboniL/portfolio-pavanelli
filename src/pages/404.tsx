import Head from "next/head";
import styles from "src/styles/NotFound.module.css";
import Footer from "src/components/Footer";
import Container from "src/components/Container";
import Header from "src/components/Header";
import Button from "src/components/Button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada | Pavanelli Design</title>
      </Head>
      <Header />
      <Container>
        <div className={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Parece que a tela que você procura não existe ou foi movida.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button href="/">Ir para tela principal</Button>
          </motion.div>
        </div>
        <Footer />
      </Container>
    </>
  );
}
