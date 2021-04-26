import React, { ChangeEvent, useState } from "react";
import { Button, PreLoader } from "../../elements";

import styles from "./inputGroup.css";

interface IPropsInputGroup {
  onSearch: (search: string, page?: number) => {};
  isLoading: boolean;
}

export function InputGroup({
  onSearch,
  isLoading,
}: IPropsInputGroup): JSX.Element {
  const [valueInput, setValueInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  function changeHandler(ev: ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value;
    setValueInput(value);
  }

  function handleClick(ev) {
    if (!valueInput && (ev.key === "Enter" || ev.type === "click"))
      setIsEmpty(true);
    else if (ev.key === "Enter" || ev.type === "click") {
      onSearch(valueInput, 1);
      setIsEmpty(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles.preloader}>
          <PreLoader />
        </div>
      )}
      <input
        className={styles.input}
        type="search"
        name="search"
        placeholder="search ..."
        onChange={changeHandler}
        onKeyPress={handleClick}
        autoFocus
        autoComplete="on"
      />
      <Button text={"Go!"} handleClick={handleClick} />
      {isEmpty && <p className={styles.empty}>Fill in this field</p>}
    </div>
  );
}
