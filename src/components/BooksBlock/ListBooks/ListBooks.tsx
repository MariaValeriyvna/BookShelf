import React, { useContext } from "react";
import { BookCard } from "..";
import { ReadListContext } from "../../../Layout";
import styles from "./listBooks.css";

interface IPropListBooks {
  onDelBook: (bookId: string) => void;
  onMarkBook: (bookId: string) => void;
}

export function ListBooks({
  onDelBook,
  onMarkBook,
}: IPropListBooks): JSX.Element {
  const readList = useContext(ReadListContext);
  return (
    <ul className={styles.wrapper}>
      {readList.length > 0 ? (
        readList.map((el) => (
          <BookCard
            key={el.key}
            book={el}
            onDelBook={onDelBook}
            onMarkBook={onMarkBook}
          />
        ))
      ) : (
        <p className={styles.info}>Information about books to read... </p>
      )}
    </ul>
  );
}
