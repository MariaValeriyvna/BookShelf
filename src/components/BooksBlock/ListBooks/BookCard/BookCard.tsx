import React, { useState } from "react";
import { IPropBook } from "../../../../Layout";
import { Button } from "../../../elements";
import styles from "./bookCard.css";

interface IPropBookCard {
  book: IPropBook;
  onDelBook: (bookId: string) => void;
  onMarkBook: (bookId: string) => void;
}

export function BookCard({
  book,
  onDelBook,
  onMarkBook,
}: IPropBookCard): JSX.Element {
  const [isRead, setIsRead] = useState(book.isRead);
  const [isDel, setIsDel] = useState(false);
  const langs = book.language && book.language.join(", ");
  function handleMark() {
    onMarkBook(book.key);
    setIsRead(true);
  }
  function handleDel() {
    const bookId = book.key;
    if (bookId) onDelBook(bookId);
    setIsDel(true);
  }
  if (isDel) return <div></div>;
  return (
    <li className={styles.item} key={book.key}>
      <h3 className={isRead ? styles.isread : styles.title}>
        {book.title}({langs})
      </h3>
      <p className={styles.subtitle}>{book.subtitle}</p>
      <h3 className={isRead ? styles.isread : styles.title}>
        {book.author_name}
      </h3>
      {!book.isRead && (
        <div className={styles.btns}>
          <Button text="Mark as read" handleClick={handleMark} />
          <Button
            text="Remove from list"
            handleClick={handleDel}
            isAttention={true}
          />
        </div>
      )}
    </li>
  );
}
