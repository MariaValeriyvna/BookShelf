import React, { MouseEvent } from "react";
import styles from "./button.css";
interface IPropButton {
  text: string;
  handleClick: (ev: MouseEvent<HTMLButtonElement>) => void;
  isAttention?: boolean;
}

export function Button({
  text,
  handleClick,
  isAttention = false,
}: IPropButton) {
  return (
    <button
      className={styles.btn + `${isAttention ? " " + styles.btnattention : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
