import * as React from "react";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { BookShelfContainer } from "./containers";
import "./main.global.css";

export function App() {
  return (
    <AppLayout>
      <BookShelfContainer />
    </AppLayout>
  );
}
