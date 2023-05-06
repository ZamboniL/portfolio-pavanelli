import BlockLink from "../BlockLink";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.root}>
      <div>
        <h2 className={styles.description}>
          Especialista em criar experiências digitais excepcionais para ajudar
          meus clientes a atingir seus objetivos.
        </h2>
      </div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>UX/UI Designer</h1>
        </div>
        <div>
          <div>
            <BlockLink href="mailto:lucaspavanellireis@gmail.com">
              lucaspavanellireis@gmail.com
            </BlockLink>
          </div>
          <span className={styles.scroll}>Desça para explorar</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
