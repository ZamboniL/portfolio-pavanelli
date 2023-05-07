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
          Our portfolio speaks for itself, with over 70 awards in design and
          digital innovation, we have a proven track record of delivering
          recognition and success for our partners. Our team of experts is
          dedicated to understanding your business needs and creating designs
          that align with your goals. Let us help you elevate your brand and
          stand out in your industry.
        </motion.p>
        <BulletList
          title="Research & Brand Strategy"
          list={[
            "Brand Strategy",
            "Research & Insights",
            "Content Marketing",
            "User Experience Research",
          ]}
        />
        <BulletList
          title="Creative Direction & Design"
          list={[
            "Web Design",
            "UX & UI Design",
            "Brand Identity",
            "Interaction Design",
            "Video Production",
            "Animation",
            "Illustration",
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
