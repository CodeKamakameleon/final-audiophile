import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        {/* <Route path="/:page" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
