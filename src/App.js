import React from "react";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import WriteBook from "./pages/WriteBook";
import Update from "./pages/Update";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact="true" element={<Main />}></Route>
      <Route path="/Detail/:id" element={<Detail />}></Route>
      <Route path="/WriteBook" element={<WriteBook />}></Route>
      <Route path="/Update/:id" element={<Update />}></Route>
    </Routes>
  );
};

export default App;

