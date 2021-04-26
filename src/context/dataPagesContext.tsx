import React from "react";
export interface IDataPagesContext {
  numFound?: number;
  start?: number;
  page?: number;
  search?: string;
}

export const DataPagesContext = React.createContext<IDataPagesContext>({});
