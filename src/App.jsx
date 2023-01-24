import { useState, useEffect } from "react";
import { fetchData } from "./services/dataApi";

import "./App.css";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
