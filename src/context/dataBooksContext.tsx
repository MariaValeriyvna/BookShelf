import React from "react";
export interface IDataBooksContext {
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
export const DataBooksContext = React.createContext<Array<IDataBooksContext>>(
  []
);
