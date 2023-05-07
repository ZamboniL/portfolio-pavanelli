import Head from "next/head";
import styles from "src/styles/Contact.module.css";
import Footer from "src/components/Footer";
import Container from "src/components/Container";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import BlockLink from "src/components/BlockLink";
import ArrowIcon from "src/components/Card/ArrowIcon";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Contato | Pavanelli Design</title>
      </Head>
      <Header />
      <Container className={styles.container}>
        <Hero
          title="Vamos conversar"
          description="Entre em contato para criarmos soluções incríveis."
          invert
          disableDescriptionAnimation
        />
        <div className={styles.contact}>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={styles.email}
            >
              <BlockLink
                className={styles.emailLink}
                height=""
                href="mailto:lucaspavanellireis@gmail.com"
              >
                lucaspavanellireis@gmail.com
              </BlockLink>
            </motion.h2>
          </div>
          <div className={styles.socials}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <BlockLink href="https://www.linkedin.com/in/lucas-pavanelli-navarro-dos-reis-14420b18a/">
                LinkedIn <ArrowIcon />
              </BlockLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <BlockLink href="#">
                Instagram <ArrowIcon />
              </BlockLink>
            </motion.div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}
