import React from "react";
import Cast from "./pages/Cast";
import CastDetails from "./pages/CastDetails";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/the-cast" element={<Cast />} />
        <Route path="/cast-details/:id" element={<CastDetails />} />
      </Routes>

      {/* <Cast /> */}
      {/* <CastDetails /> */}
    </>
  );
}

export default App;
