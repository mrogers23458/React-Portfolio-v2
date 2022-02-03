import React from "react"
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
  );
}

export default App;
