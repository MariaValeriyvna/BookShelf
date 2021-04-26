import React, { useContext } from "react";
import { DataReadListContext } from "../../../context/dataReadListContext";
import styles from "./aboutBooks.css";

export function AboutBooks(): JSX.Element {
  const readList = useContext(DataReadListContext);
  const amountIsRead = readList.filter((el) => el.isRead).length;
  const amountBooks = readList.length;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>To Read List ...</h2>
      <span className={styles.infoamount}>{amountBooks} books </span>
      <span className={styles.inforead}>{amountIsRead} read </span>
    </div>
  );
}
