import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";

const RoutesComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pokemon/:id" element={<Pokemon />} />
  </Routes>
);

export default RoutesComponent;
