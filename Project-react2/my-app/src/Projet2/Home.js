import React from 'react';
import img from './images/RobeX.jpg'
import img2 from './images/Robe2.jpeg'
import imgA from './images/custime.jpg'
import imgB from  './images/PU.jpg'
import imgC from  './images/gh.jpg'
import './Home.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div>
 <div id='Home'>
   <div className='container'>
   <img className='img1' src={img}/>
     </div>
      
      <h1 className='text'>  NEW <br></br>
                              COLLECTIONS <br></br>
                               FOR WOMEN<br></br> 
                              <p className='PX'> a leading brand in women's fashion</p>
                </h1>

      <a href='/Chat' className='btn-chat'> More information </a>

      <div className='container2'>
   <img className='img2' src={img2} />
     </div>
     </div>

      
        <ul className='E'>E</ul><p className='titreX'>verything you want in women's elegance is here<br></br>
        The founder of The Australian Finishing School has listed things elegant <br></br>women 
           never wear and also in the same vain what they do wear.</p>
           <div className='bare'><h4></h4></div>
        <h3 className='h3'>Special Expamples for you</h3>
          <div className='boxCards'>
            <div className='box1'>
            <img className='imgA' src={imgA}/>
            <p className='titre-card'>Habituellement en tissu léger <br></br>
            à manches longues ou courtes portées <br></br> sur le torse avec différentes coupes</p>
            <p className='titre-price'>500$</p>
            <button className='btn-card'> <Link to="/Chat" id='lien-chat'>See More</Link></button>
            </div>
            <div className='box2'>
            <img className='imgA' src={imgB}/>
            <p className='titre-card'>Des vêtements d'une pièce qui couvrent<br></br>le corps de la poitrine jusqu'aux jambes<br></br>avec différentes coupes et styles.</p>
            <p className='titre-price'>200$</p>
            <button className='btn-card'><Link to="/Chat" id='lien-chat'>See More</Link></button>
            </div>
            <div className='box3'>
            <img className='imgA' src={imgC}/>
            <p className='titre-card'>Des vêtements pour la partie inférieure<br></br> du corps comprenant des jeans, <br></br>des pantalons  habillés, des leggings</p>
            <p className='titre-price'>300$</p>
            <button className='btn-card'><Link to="/Chat" id='lien-chat'>See More</Link></button>
            </div>
          </div>
     <h2 className='titre-footer'>Votre confort est notre passion.</h2>

       <footer>
        <div className='Footer-divs'>
         <div className='Company'>
          <h6 className='Company-titre'>Company</h6><br></br>
        
         <a className='Company-link'>About Us</a><br></br>
         <a className='Company-link'>Our Services</a><br></br>
         <a className='Company-link'>Privacy Policy</a><br></br>
         <a className='Company-link'>Afillite Program</a>

         </div>
         <div className='Get'>
         
         <h6 className='Get-titre'>Get Help</h6><br></br>
         <a className='Get-link'>FaQ</a><br></br>
         <a className='Get-link'>Shipping</a><br></br>
         <a className='Get-link'>Order Status</a><br></br>
         <a className='Get-link'>Payment Options </a>

         </div>

         <div className='Shope'>
         <h6 className='Shop-titre'>Online Shop </h6><br></br>
     
         <a className='Shop-link'>Watch </a><br></br>
         <a className='Shop-link'>Bag</a><br></br>
         <a className='Shop-link'>Shoes</a><br></br>
         <a className='Shop-link'>Dress</a>
         </div>
         <div className='Follow'>
         <h6 className='Follow-titre'>Follow Us  </h6><br></br>
       
         
        <span className='Span-media'><FaFacebook className='media' /></span> 
        <span className='Span-media'><FaInstagram className='media' /></span> 
        <span className='Span-media'><FaTwitter   className='media'/></span> 
        <span className='Span-media'><FaLinkedin  className='media' /></span> 
       

         </div>
         </div>
       <br></br>
          
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647531560805!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>

       <div className="input-group">
 
 <input type="text" className='input'  placeholder=" Your email id is here "  />
 <input value="Subscribe" className="btn" 
type='submit'  
/>
</div>
       </footer>

    

 
     </div>

  )
}

export default Home
