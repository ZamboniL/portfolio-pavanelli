import styles from "./Container.module.css";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return <main className={`${styles.container} ${className}`}>{children}</main>;
};

export default Container;
