import CardChild from "../CardChild";
import styles from "./styles.module.css";

function ListCards() {
  return (
    <section className={styles.list}>
      <CardChild />
      <CardChild />
      <CardChild />
      <CardChild />
    </section>
  );
}

export default ListCards;
