import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header/";
import ListCards from "./components/ListCards";
import TextBlock from "./components/TextBlock";
import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Title text="Disponíveis para Adoção" bold="500" />
      <Divider style={{ background: "#000", borderWidth: "4px" }} />
      <ListCards />
      <section>
        <div className={styles["flex-horizontal"]}>
          <TextBlock text="Quero adotar" colorBox="#000000" />
          <TextBlock text="Quero divulgar um animal" colorBox="#DEBB10" />
        </div>
        <div className={styles["flex-horizontal"]}>
          <Image
            src="https://placehold.co/616x604/png"
            width="616"
            height="604"
            alt="placeholder"
          />
          <section className={styles["block-text"]}>
            <Title text="Disponíveis para Adoção" bold="bolder" />
            <Typography
              style={{ marginBottom: 20, fontSize: "1.25rem" }}
              variant="body1"
            >
              Lorem ipsum dolor sit amet. Ut consequatur earum ut dolorem quidem
              a necessitatibus aspernatur qui voluptate maxime et voluptatem
              quia. Ex consequatur eligendi non omnis fugit est quis distinctio
              non quis porro et expedita laborum hic quae ipsa.
            </Typography>
            <Typography
              style={{ marginBottom: 20, fontSize: "1.25rem" }}
              variant="body1"
            >
              Sed nihil dolorem aut laborum commodi et fugiat animi qui
              similique sequi ea quod porro eos dolores quas. Vel rerum
              provident aut temporibus quod ea unde recusandae 33 optio soluta
              33 temporibus voluptas in expedita quas qui aspernatur aperiam.
            </Typography>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
