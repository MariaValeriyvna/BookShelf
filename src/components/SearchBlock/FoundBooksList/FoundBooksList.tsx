import React, { MouseEvent, useContext, useEffect, useRef } from "react";
import { DataBooksContext, IPropBook } from "../../../Layout";
import { Errorimg } from "../../elements";
import styles from "./foundBooksList.css";

interface IPropsFoundBooks {
  chosenBook: IPropBook | null;
  onChoice: (ev: MouseEvent<HTMLElement>) => void;
  isError: string;
  addLoad: (search: string, page?: number) => {};
  valueForSearch: string;
  pageForSearch: number;
  isAllLoaded: boolean;
}

export function FoundBooksList({
  onChoice,
  chosenBook,
  isError,
  addLoad,
  valueForSearch,
  pageForSearch,
  isAllLoaded,
}: IPropsFoundBooks): JSX.Element {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const dataBooks = useContext(DataBooksContext);
  useEffect(() => {
    if (pageForSearch === 1) document.getElementById("list")!.scrollTop = 0;
    if (!isAllLoaded) {
      const observerBottom = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (entries[0].boundingClientRect.bottom > window.innerHeight)
              addLoad(valueForSearch, pageForSearch + 1);
          }
        },
        { root: document.getElementById("list"), rootMargin: "800px" }
      );
      if (bottomOfList.current !== null) {
        observerBottom.observe(bottomOfList.current);
      }
      return () => {
        if (bottomOfList.current) {
          observerBottom.unobserve(bottomOfList.current);
        }
      };
    }
  }, [isAllLoaded, dataBooks]);
  return (
    <>
      <ul id="list" className={styles.wrapper}>
        {isError && <Errorimg />}
        {dataBooks === null && (
          <p className={styles.info}>Information about found books... </p>
        )}
        {dataBooks && dataBooks.length === 0 ? (
          <p className={styles.infonot}>Nothing has found ... </p>
        ) : (
          dataBooks &&
          dataBooks.map((el, index) => {
            const langs = el.language && el.language.join(", ");
            el.isRead = false;
            const isChoice = (chosenBook && chosenBook.key === el.key) || false;
            return (
              <li
                className={
                  styles.item + `${isChoice ? " " + styles.itemchoice : ""}`
                }
                id={el.key}
                key={el.key + index}
                onClick={onChoice}
              >
                <p className={styles.text}>
                  {++index}. {el.title} ({langs || "---"})
                </p>
                <p className={styles.text}>{el.subtitle}</p>
              </li>
            );
          })
        )}
        <div ref={bottomOfList}></div>
      </ul>
    </>
  );
}
