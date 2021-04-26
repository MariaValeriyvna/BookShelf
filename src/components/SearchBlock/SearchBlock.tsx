import React, { MouseEvent } from "react";
import { FoundBooksList, InputGroup, PageGroup } from ".";
import { IPropBook} from "../../Layout";
import styles from "./searchBlock.css";

interface IPropsSearchBlock {
  onSearch: (search: string, page?: number) => {};
  isLoading: boolean;
  chosenBook: IPropBook | null;
  onChoice: (ev: MouseEvent<HTMLElement>) => void;
  isError: string;
  valueForSearch: string;
  pageForSearch: number;
  isAllLoaded: boolean;
}

export function SearchBlock({
  onSearch,
  isLoading,
  chosenBook,
  onChoice,
  isError,
  valueForSearch,
  pageForSearch,
  isAllLoaded,
}: IPropsSearchBlock): JSX.Element {
  return (
    <div className={styles.block}>
      <InputGroup onSearch={onSearch} isLoading={isLoading} />
      <FoundBooksList
        onChoice={onChoice}
        chosenBook={chosenBook}
        isError={isError}
        addLoad={onSearch}
        valueForSearch={valueForSearch}
        pageForSearch={pageForSearch}
        isAllLoaded={isAllLoaded}
      />
      <PageGroup onSearch={onSearch} />
    </div>
  );
}
