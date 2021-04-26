import * as React from "react";
import styles from "./bookShelf.css";

import { useCallback, useState } from "react";
import { OpenLibraryService } from "../services";
import { SearchBlock } from "../components/SearchBlock";
import { OneBookBlock } from "../components/OneBookBlock";
import { BooksBlock } from "../components/BooksBlock";
import { ReadListService } from "../services/ReadListService";

export interface IPropBook {
  title: string;
  subtitle?: string;
  language?: Array<string>;
  author_name?: string;
  has_fultext?: boolean;
  first_publish_year?: number;
  publish_year?: Array<number>;
  key: string;
  isRead?: boolean;
}
export interface IPropPages {
  numFound: number;
  start: number;
  page: number;
  search: string;
}
export const DataBooksContext = React.createContext<Array<IPropBook>>([]);
export const ReadListContext = React.createContext<Array<IPropBook>>([]);
export const DataPagesContext = React.createContext<IPropPages>({
  numFound: 0,
  start: 0,
  page: 1,
  search: "",
});

export function BookShelf() {
  const [dataBooks, setDataBooks] = useState<Array<IPropBook> | null>(null);
  const [dataPages, setDataPages] = useState<IPropPages>({
    numFound: 0,
    start: 0,
    page: 1,
    search: "",
  });
  const [readList, setReadList] = useState(ReadListService.readList);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [chosenBook, setChosenBook] = useState<IPropBook | null>(null);

  const [isError, setIsError] = useState("");
  const [valueForSearch, setValueForSearch] = useState("");
  const [pageForSearch, setPageForSearch] = useState(0);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  const handleAddNewBook = useCallback((book: IPropBook) => {
    const newReadList = ReadListService.addBook(book);
    setReadList(newReadList);
    setIsAdd(true);
  }, []);

  const handleDelBook = useCallback((bookId: string) => {
    const newReadList = ReadListService.delBook(bookId);
    setReadList(newReadList);
    setIsAdd(false);
  }, []);

  const handleMarkBook = useCallback((bookId: string) => {
    const newReadList = ReadListService.markBook(bookId);
    setReadList(newReadList);
  }, []);

  const handleSearch = useCallback(async (search, page) => {
    setIsLoading(true);
    setIsError("");
    setValueForSearch(search);
    setPageForSearch(page);
    if (page === 1) setIsAllLoaded(false);
    const books = await OpenLibraryService.searchBooks(search, page);
    setIsLoading(false);
    if (books.docs)
      setDataBooks((prevChildren) =>
        prevChildren && prevChildren.length > 0 && page > 1
          ? prevChildren.concat(...books.docs)
          : books.docs
      );
    else setIsError(books.status);

    setChosenBook(null);
    setDataPages({
      numFound: books.numFound,
      start: books.start,
      page: page,
      search: search,
    });

    if (books.numFound < page * 100) setIsAllLoaded(true);
    else setIsAllLoaded(false);
  }, []);

  const handleChoice = useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      const item = ev.currentTarget.id;
      if (chosenBook && chosenBook.key === item) return;
      const book = dataBooks?.find((el) => el.key === item);
      if (readList.some((el) => el.key === book?.key)) setIsAdd(true);
      else setIsAdd(false);
      if (book) setChosenBook(book);
    },
    [dataBooks, chosenBook, readList]
  );
  return (
    <DataBooksContext.Provider value={dataBooks!}>
      <DataPagesContext.Provider value={dataPages}>
        <ReadListContext.Provider value={readList}>
          <div className={styles.wrapper}>
            <SearchBlock
              onChoice={handleChoice}
              onSearch={handleSearch}
              valueForSearch={valueForSearch}
              pageForSearch={pageForSearch}
              chosenBook={chosenBook}
              isLoading={isLoading}
              isError={isError}
              isAllLoaded={isAllLoaded}
            />
            <OneBookBlock
              book={chosenBook}
              onAddBook={handleAddNewBook}
              isAdd={isAdd}
            />
            <BooksBlock onDelBook={handleDelBook} onMarkBook={handleMarkBook} />
          </div>
        </ReadListContext.Provider>
      </DataPagesContext.Provider>
    </DataBooksContext.Provider>
  );
}
