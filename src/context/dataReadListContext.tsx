import React from "react";
export interface IDataReadListContext {
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
export const DataReadListContext = React.createContext<
  Array<IDataReadListContext>
>([]);
