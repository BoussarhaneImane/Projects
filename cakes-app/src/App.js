import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';

import NavBar from './Components/NavBar/NavBar';
import ShoppingCartProvider from "./Components/Context/ShoppingCartContext";




function App() {
  return (
    <div>
    <ShoppingCartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
    
    </div>
  )
}

export default App




