import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { Route, BrowserRouter, Routes, Router, Switch } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;