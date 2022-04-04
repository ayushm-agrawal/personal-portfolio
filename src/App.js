import './App.css';
import Navbar from "./components/Navbar";
import React from "react";
import About from "./components/About";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Particles from "react-tsparticles";



function App() {

  return (
        <div className="App">
            <Particles
                canvasClassName="particles"
                options={{
                    fullScreen: {
                        enable: true
                    },
                }}
                style={{opacity: "0.5"}}
                params={{
                    fpsLimit: 60,

                    particles: {
                        color: {
                            value: "#fff"
                        },
                        links: {
                            enable: true,
                            color: "#fff",
                            distance: 150
                        },
                        move: {
                            enable: true
                        }
                    }
                }}
            />
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
            {/*<ParticlesBg color="#ffffff" type="cobweb" bg={true} />*/}

        </div>

  );
}

export default App;
