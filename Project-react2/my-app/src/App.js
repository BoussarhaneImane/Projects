import './App.css';

import './Projet2/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Projet2/Home';
import Chat from './Projet2/Chat';
import Contact from './Projet2/Contact';
import Log from './Projet2/Log';
import Sign from './Projet2/Sign';
import { AiFillGitlab } from "react-icons/ai";







function App() {


  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById('nav-bar');
      if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
    
        <nav className="navbar navbar-expand-lg" id='nav-bar'>
          <div id='box'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h2><AiFillGitlab id='itm'/> <span>Elegance Online</span> </h2>
              </Link>
            </li>

            <li className="nav-item" id='links'>
              <Link to="/" className="nav-link" id='container-li'>Home</Link>
            </li>

            <li className="nav-item" id="links">
              <Link to="/Chat" className="nav-link" id='container-li'>Purchases</Link>
            </li>

            <li className="nav-item" id='links'>
              <Link to="/Contact" className="nav-link" id='container-li'>Contact Us</Link>
            </li>

            <li className="nav-item" id='log'>
              <Link to="/Log" className="nav-link" id='container-log'>Log-In</Link>
            </li>

            <li className="nav-item" id='sign'>
              <Link to="/Sign" className="nav-link" id='container-sign'>Sign-Up</Link>
            </li>
          </ul>
          </div>
        </nav>
  

        <Routes>
          <Route path="/" element={<Home/>} />
      
          <Route path="/Chat" element={<Chat/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/log" element={<Log/>} />
          <Route path="/sign" element={<Sign/>} />
        </Routes>

      </BrowserRouter>
      
     
      
     


  
  );
 
}

export default App;

