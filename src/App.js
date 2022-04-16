import './App.css';
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import {HashRouter, Route, Routes} from "react-router-dom";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Blog from "./components/blog/Blog";
import Particles from "react-tsparticles";
import NotFoundPage from "./components/NotFoundPage";
import Resume from "./components/Resume";
import {handleScroll} from "./helpers/Events";



function App(props) {
  return (
        <div className="App"  onScroll={handleScroll}>
            <Particles
                canvasClassName="particles"
                options={{
                    fullScreen: {
                        enable: true
                    },
                }}
                style={{opacity: "0.3"}}
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
            <HashRouter>
                <Navbar/>
                <br/>
                <br/>
                <div className='app-routes'>
                    <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/research" element={<Research />} />
                            <Route exact path="/contact" element={<Contact />} />
                            <Route exact path="/blog" element={<Blog/>} />
                            <Route exact path="/resume" element={<Resume />}/>
                            <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
  );
}

export default App;
