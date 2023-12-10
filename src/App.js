import React from "react";
import Home from "./components/home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" />
      </Routes>
    </>
  );
}

export default App;
