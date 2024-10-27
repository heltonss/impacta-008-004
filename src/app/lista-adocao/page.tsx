"use client";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListCards from "../components/ListCards";
import Title from "../components/Title";
import { ICard } from "../interfaces/card";
import styles from "./styles.module.css";

async function getData() {
  const url = "http://localhost:3001/adoptionList";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error: any) {
    console.error(error.message);
  }
}

function ListaAdocao() {
  const [cards, setCards] = useState<ICard[]>();
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setCards(response);
      return response;
    }
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Title text="Adoção" />
      <Divider sx={{ borderWidth: "4px", backgroundColor: "#000" }} />
      {cards && <ListCards cards={cards} />}
      <Footer />
    </main>
  );
}

export default ListaAdocao;
