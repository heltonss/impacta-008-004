"use client";
import { ICard } from "@/app/interfaces/card";
import CardChild from "../CardChild";
import styles from "./styles.module.css";

interface IOwnProps {
  cards: ICard[];
}

function ListCards({ cards }: IOwnProps) {
  return (
    cards && (
      <section className={styles.list}>
        {cards.map((card) => (
          <CardChild
            key={card.id}
            name={card.name}
            donation_name={card.donation_name}
            age={card.age}
            pet_type={card.pet_type}
            address={card.address}
            image={card.image}
          />
        ))}
      </section>
    )
  );
}

export default ListCards;
