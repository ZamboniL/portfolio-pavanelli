import { format } from "date-fns";
import styles from "./ProjectHeader.module.css";
import { motion } from "framer-motion";
import { ptBR } from "date-fns/locale";

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  clientList?: string[];
  serviceList?: string[];
  industriesList?: string[];
  date: string;
}

const ProjectHeader = ({
  title,
  subtitle,
  description,
  clientList = [],
  serviceList = [],
  industriesList = [],
  date,
}: ProjectHeaderProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>
        <h2>{subtitle}</h2>
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Cliente</span>
          {clientList.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Serviços</span>
          {serviceList.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Indústrias</span>
          {industriesList.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <span>Data</span>
          <span className={styles.date}>
            {format(new Date(date), "MMMM yyyy", { locale: ptBR })}
          </span>
        </motion.li>
      </ul>
    </div>
  );
};

export default ProjectHeader;
