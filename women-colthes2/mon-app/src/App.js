
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Project/Home';
import Chat from './Project/Chat';
import Contact from './Project/Contact';
import Log from './Project/Log';
import Sign from './Project/Sign';
import { AiOutlineSkin} from "react-icons/ai";
function App() {
  return (
    <BrowserRouter>

      <div>
      <nav className="navbar navbar-expand-lg ">
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">
        <h2> <AiOutlineSkin id='itm'/><span> Elegance Online</span> </h2>
        </Link>
          </li>

          <li className="nav-item" id='links'>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item" id="links" style={{ textDecoration: 'underline 3px solid rgb(224, 156, 72)' }}>
  <Link to="/chat" className="nav-link">Chats</Link>
</li>

          <li className="nav-item" id='links'>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          
          <li className="nav-item" id='log'>
            <Link to="/log" className="nav-link">Log-In</Link>
          </li>
        
          <li className="nav-item" id='sign'>
            <Link to="/sign" className="nav-link">Sign-Up</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/log" element={<Log/>} />
          <Route path="/sign" element={<Sign/>} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;

  
