import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useGetDataQuery } from "./app/services/api";
import { Page } from "./components/Page";
import { Products } from "./components/Products";
import "./styles/App.css";
import { Category } from "./components/Category";

function App() {
  // const { data: products } = useGetDataQuery();
  // console.log(products);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:slug" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
