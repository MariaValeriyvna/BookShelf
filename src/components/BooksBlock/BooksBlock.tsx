import React from "react";
import { AboutBooks, ListBooks } from ".";
import styles from "./booksBlock.css";

interface IPropsBooksBlock {
  onDelBook: (bookId: string) => void;
  onMarkBook: (bookId: string) => void;
}

export function BooksBlock({
  onDelBook,
  onMarkBook,
}: IPropsBooksBlock): JSX.Element {
  return (
    <section className={styles.block}>
      <AboutBooks />
      <ListBooks onDelBook={onDelBook} onMarkBook={onMarkBook} />
    </section>
  );
}
