import { Divider } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListCards from "../components/ListCards";
import Title from "../components/Title";
import styles from "./styles.module.css";

function ListaAdocao() {
  return (
    <main className={styles.main}>
      <Header />
      <Title text="Adoção" />
      <Divider sx={{ borderWidth: "4px", backgroundColor: "#000" }} />
      <ListCards />
      <Footer />
    </main>
  );
}

export default ListaAdocao;
