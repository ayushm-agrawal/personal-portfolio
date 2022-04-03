import './App.css';
import Navbar from "./components/Navbar";
import ParticlesBg from "particles-bg";
import React from "react";
import About from "./components/About";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Blog from "./components/Blog";



function App() {

  return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/about" />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog/>} />
                </Routes>
            </BrowserRouter>

            {/*<About/>*/}
            <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
        </div>

  );
}

export default App;
