import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar" 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
