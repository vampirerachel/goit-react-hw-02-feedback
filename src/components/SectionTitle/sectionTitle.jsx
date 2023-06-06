import styles from "./style.module.css";
export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <h1>className={styles.title}{title}</h1>
          <h2>className={styles.title}{subtitle}</h2>
    </>
  );
}
