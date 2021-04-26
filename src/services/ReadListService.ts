import { IPropBook } from "../Layout";

export class ReadListService {
  private static setReadList(readList) {
    localStorage.setItem("readList", JSON.stringify(readList));
  }

  static get readList() {
    const json = localStorage.getItem("readList");
    return json ? JSON.parse(json) : [];
  }

  static addBook(book: IPropBook) {
    let newReadList: any[];
    if (ReadListService.readList.every((el) => el.key !== book.key)) {
      newReadList = [...ReadListService.readList, book];
      ReadListService.setReadList(newReadList);
    } else newReadList = ReadListService.readList;
    return newReadList;
  }

  static markBook(bookId: string) {
    const newReadList = ReadListService.readList.map((el: IPropBook) => {
      if (el.key === bookId) {
        el.isRead = true;
      }
      return el;
    });
    ReadListService.setReadList(newReadList);
    return newReadList;
  }

  static delBook(bookId: string) {
    const newReadList = ReadListService.readList.filter(
      (el: IPropBook) => el.key !== bookId
    );
    ReadListService.setReadList(newReadList);
    return newReadList;
  }
}
