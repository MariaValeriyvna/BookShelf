import React from "react";
import styles from "./applayout.css";

export const AppLayout = ({ children }) => (
  <main className={styles.appContainer}>{children}</main>
);
