import * as React from "react";
import { SearchBlock } from "../SearchBlock";
import { OneBookBlock } from "../OneBookBlock";
import { BooksBlock } from "../BooksBlock";

export function BookShelf(props) {
  return (
    <>
      <SearchBlock
        onChoice={props.handleChoice}
        onSearch={props.handleSearch}
        valueForSearch={props.valueForSearch}
        pageForSearch={props.pageForSearch}
        chosenBook={props.chosenBook}
        isLoading={props.isLoading}
        isError={props.isError}
        isAllLoaded={props.isAllLoaded}
      />
      <OneBookBlock
        book={props.chosenBook}
        onAddBook={props.handleAddNewBook}
        isAdd={props.isAdd}
      />
      <BooksBlock
        onDelBook={props.handleDelBook}
        onMarkBook={props.handleMarkBook}
      />
    </>
  );
}
