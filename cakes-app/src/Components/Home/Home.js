import React from 'react';
import shapImage from './ShapeX2.png';
import tartaImage from './tartax.png';
import shape from './soft2.png';
import girl from './girlX.png';
import care2 from './care2.png';
import care from './care.png';
import chef2 from './chef2.png'
import chef1 from './chef1.png';
import chef3 from './chef3.png'
import { Link } from 'react-router-dom';
import  {orderList}  from './DataHome';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { IoIosStarHalf } from 'react-icons/io';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";


import './Home.css';

function Home() {

   const Afficher = () => {
      return orderList.map(({ id, name, img, desc }) => {
        return (
          <div key={id} className="pastry-item">
            <img src={img} alt={name} className="pastry-image" />
            <h5 className="name">{name}</h5>
            <h5 className="desc">{desc}</h5>
            <div className="star">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
        );
      });
    };
  



  return (
    <div className='row'>
      <div className='container-imgs'>
      
        <img src={tartaImage} className='img-fluid' id='img2' alt='Tarta Image' />
        <img src={shapImage} className='img-fluid' id='img1' alt='Shape Image' />
      </div>
      <div className='box-left' id='content'>
        <h1 className='H1'>Cake</h1>
        <h1 className='H1'>Your Day</h1>
        <br />
        <h3 className='H3'>
          Welcome to Us Your Online Pastry Shop <br />
          Order online and have your favorite sweets delivered<br />
          directly to your home.
        </h3>
        <Link to='/service'>
          <button className='btn-home'>More Information</button>
        </Link>
      </div>
      <div className='order'>
      <h1 className="titre-specail">Our Special order</h1>
      <p className="p">Our special order, custom created to meet your unique needs</p>
     
     
      </div>

      
      <div className="box-orders">{Afficher()}</div>
      <Link to="/service">
        <button className="btn-order">See More for ordering</button>
      </Link>


      <div className="box-say">
        
  <img src={shape} className="img-shape" />
  <img src={girl} className="img-girl" />
  
  <div>
    <p className="p2">WHAT THEY SAY</p>
    <h1 className="h1">What Our Customer Say About Us </h1>
    <p>
      Sweet Clicks is the best. Besides the many and delicious Sweets,<br />
      the service is also Good, especially in the very fast delivery,<br />
      I highly recommend Sweet Clicks to you.
    </p>
    <h5>Their evaluation of us</h5>
    <span className="stars">
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <IoIosStarHalf />
      <p style={{ color: 'rgb(6, 6, 71)', fontWeight: 'bold' }}> 5.8</p>
    </span>
  </div>
</div>

      <h1 className='titre-chef'>Our most famous chefs in the world </h1>
      <div className='box-chefs'>

         <img src={care2} className='care-chef'/>
         <img src={care} className='care-chef'/>
         <img src={care2} className='care-chef'/>

      </div>
      <div className='img-chefs'>

         <img src={chef2} className='img-chef'/>
         <img src={chef1} className='img-chef'/>
         <img src={chef3} className='img-chef'/>

      </div>
      <div className='chefs-names'>
         <h2>Pierre Hermé</h2>
         <h2>Christophe Michalak</h2>
         <h2>Claire Heitzler</h2>
      </div>
      <footer>
     
    <div className='box-subscribe'>
   
      <input type='email' placeholder='Enter your email' />
      <button>Subscribe</button>
    </div>
    <div className='part1'>
      <h1>Our Information</h1>
      <div className='socails'>
        <FaFacebook className='socail' />
        <RiInstagramFill className='socail' />
        <AiFillTwitterCircle className='socail' />
        <FaLinkedin className='socail' />
  
    </div>
  </div>
 
    <div className='boxs'>
      <div className='box1'>
        <h1>Resources</h1>
        <p>Application</p>
        <p>Documentation</p>
        <p>Systems</p>
        <p>FAQ</p>
      </div>
      <div className='box2'>
        <h1>Pricing</h1>
        <p>Overview</p>
        <p>Premium</p>
        <p>Program</p>
        <p>Promotions</p>
      </div>
      <div className='box3'>
        <h1>Company</h1>
        <p>About Us</p>
        <p>Blog</p>
        <p>Online</p>
        <p>Careers</p>
      </div>
      <div className='box4'>
        <h1>Social</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Linkedin</p>
      </div>
    </div>

</footer>

    </div>
    
  );
}

export default Home;

