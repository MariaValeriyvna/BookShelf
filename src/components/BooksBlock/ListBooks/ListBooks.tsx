import React, { useContext } from "react";
import { BookCard } from "..";
import { DataReadListContext } from "../../../context/dataReadListContext";
import styles from "./listBooks.css";

interface IPropListBooks {
  onDelBook: (bookId: string) => void;
  onMarkBook: (bookId: string) => void;
}

export function ListBooks({
  onDelBook,
  onMarkBook,
}: IPropListBooks): JSX.Element {
  const readList = useContext(DataReadListContext);
  return (
    <ul className={styles.wrapper}>
      {readList.length > 0 ? (
        readList.map((el, index) => (
          <>
            <BookCard
              index={index}
              key={el.key + index}
              book={el}
              onDelBook={onDelBook}
              onMarkBook={onMarkBook}
            />
          </>
        ))
      ) : (
        <p className={styles.info}>Information about books to read... </p>
      )}
    </ul>
  );
}
