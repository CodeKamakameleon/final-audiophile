import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useGetDataQuery } from "./app/services/api";
import { Page } from "./components/Page";
import { Products } from "./components/Products";
import "./styles/App.css";
import { Category } from "./components/Category";
import { CheckoutPage } from "./components/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/home" element={<Page />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:slug" element={<Products />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
