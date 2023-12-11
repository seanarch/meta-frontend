import React from "react";
import Home from "./components/home";
import Reservation from "./components/reservations";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default App;
