import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchData } from "./services/dataApi";
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"about"} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
