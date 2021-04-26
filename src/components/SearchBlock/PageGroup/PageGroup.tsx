import React, { useContext } from "react";
import { DataPagesContext } from "../../../context/dataPagesContext";
import styles from "./pageGroup.css";

interface IPropPageGroup {
  onSearch: (search: string, page: number) => {};
}

export function PageGroup({ onSearch }: IPropPageGroup): JSX.Element {
  const dataPages = useContext(DataPagesContext);
  /* //Function for pagination
  function handleClick(num: number) {
    if (num <= 0 || num > dataPages.numFound / 100 + 1) return;
    onSearch(dataPages.search, num);
  }*/
  return (
    <div className={styles.wrapper}>
      <div className={styles.pages}>
        <span>Found: {dataPages.numFound || "---"}</span>
        {/* //For pagination
        <span>Start: {dataPages.numFound ? dataPages.start : "---"} </span>
        {dataPages.numFound ? <span>Page size: 100</span> : ""} */}
      </div>
      {/* //Block of pagination
      <div className={styles.btns}>
        {dataPages.start >= 100 && (
          <button onClick={() => handleClick(dataPages.page - 1)}>
            Prev results
          </button>
        )}
        {dataPages.numFound > dataPages.start + 100 && (
          <button onClick={() => handleClick(dataPages.page + 1)}>
            Next results
          </button>
        )}
      </div> */}
    </div>
  );
}
