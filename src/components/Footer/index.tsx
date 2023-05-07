import BlockLink from "../BlockLink";
import Button from "../Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.description}>
          Design não é apenas fazer as coisas parecerem boas, é criar
          experiências significativas que inspiram e conectam as pessoas.
        </div>
        <Button href="/contato">Entrar em contato</Button>
      </div>
      <div>
        <span className={styles.tag}>EXPLORAR</span>
        <ul className={styles.list}>
          <li>
            <BlockLink href="/projetos">Projetos</BlockLink>
          </li>
          <li>
            <BlockLink href="#">Processos</BlockLink>
          </li>
          <li>
            <BlockLink href="/contato">Contato</BlockLink>
          </li>
          <li>
            <BlockLink href="#">LinkedIn</BlockLink>
          </li>
          <li>
            <BlockLink href="#">Instagram</BlockLink>
          </li>
        </ul>
      </div>
      <span className={styles.copyright}>
        © Pavanelli Design {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
