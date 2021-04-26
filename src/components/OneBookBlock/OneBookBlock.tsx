import React from "react";
import { IPropBook } from "../../containers";
import { Button } from "../../elements";
import styles from "./oneBookBlock.css";

interface IPropsBooks {
  book: IPropBook | null;
  onAddBook: (book: IPropBook) => void;
  isAdd: boolean;
}

export function OneBookBlock({
  book,
  onAddBook,
  isAdd,
}: IPropsBooks): JSX.Element {
  const langs = book && book.language && book.language.join(", ");
  const years = book && book.publish_year && book.publish_year.join(", ");

  function handleClick() {
    if (book) onAddBook(book);
  }
  const fultext = book?.has_fultext ? "yes" : "no";
  return (
    <section className={styles.block}>
      {!book ? (
        <p className={styles.info}>Information about the selected book... </p>
      ) : (
        <div className={styles.book}>
          <h2 className={styles.title}>{book.title}</h2>
          <p className={styles.subtitle}>{book.subtitle}</p>
          <p>
            <u>Athour:</u> {book.author_name || "--"}
          </p>
          <p>
            <u>Languages available:</u> {langs || "--"}
          </p>
          <p>
            <u>Full text available:</u> {fultext}
          </p>
          <p>
            <u>First publish year:</u> {book.first_publish_year}
          </p>
          <p>
            <u>Years puplished:</u> {years}
          </p>
          {isAdd ? (
            <p className={styles.infored}>
              This book has already been added to the list
            </p>
          ) : (
            <Button text={"Add book to Read List"} handleClick={handleClick} />
          )}
        </div>
      )}
    </section>
  );
}
