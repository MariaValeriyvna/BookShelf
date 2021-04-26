import React from "react";
import styles from "./errorimg.css";

interface IPropError {
  error?: string;
}
export function Errorimg({ error }: IPropError): JSX.Element {
  return <div className={styles.error}>{error}</div>;
}
