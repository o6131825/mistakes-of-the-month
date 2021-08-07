//import "./styles.css";
import React from "react";

//import About from "./About";

//import Contact from "./Contact";

import Navbar from "../navbar/navbar";

import Dtpic from "../dtpic/dtpic";
import Home from "../home/home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Home/>
        
        
      </div>
    </Router>
  );
}
