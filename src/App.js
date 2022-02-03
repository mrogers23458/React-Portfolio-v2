import React from "react"
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
  );
}

export default App;
