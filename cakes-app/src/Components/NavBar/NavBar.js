import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { HiMenu, HiX } from 'react-icons/hi';
import './NavBar.css'; // Make sure you have this CSS file
import { Link } from 'react-router-dom';
import { RiCake3Line } from 'react-icons/ri';
import { FiLogIn } from "react-icons/fi";
import { useShoppingCart } from '../Context/ShoppingCartContext';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar className='nav' expand="lg">
        <Container>
          <div className='logo'>
            <Link to='/' className='Links'>
              <span className='C'>Sweet</span>Clicks<RiCake3Line id='icon-cake' />
            </Link>
          </div>
          <Navbar.Toggle onClick={toggleMenu} className='menu'>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
            <Nav className="ms-auto">
              <Link to='/' className='Link'>
                Home
              </Link>
              <Link to='/service' className='Link'>
                Service
              </Link>
              <Link to='/shop' className='Link'>
                Shop
                <div className='Link-shop'>
                  {cartQuantity > 0 && (
                    <Button
                      style={{ width: "3rem", height: "2.5rem", position: "relative", left: "10px", color: "#e43558" }}
                      variant="outline"
                      className="cart"
                      onClick={openCart}
                    >
                      <div className='icon-cart'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="currentColor"
                        >
                          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                      </div>
                      <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                        style={{
                          color: "white",
                          width: "1.5rem",
                          height: "1.5rem",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          transform: "translate(25%, 25%)",
                        }}
                      >
                        {cartQuantity}
                      </div>
                    </Button>
                  )}
                </div>
              </Link>
              <Link to='/login' className='Link'>
                Log In
              </Link>
              <Link to='/login' className='' id='icon-login'>
                <FiLogIn />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
