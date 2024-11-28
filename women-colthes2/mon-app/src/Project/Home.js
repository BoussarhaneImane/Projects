import React from 'react';
import woman from './Images/woman.mp4'; 
import woman2 from './Images/woman2.mp4'; 
import './Home.css';

import Carousel from 'react-bootstrap/Carousel';
import { AiFillBank} from "react-icons/ai";
import { FaFacebook} from "react-icons/fa";

import {ImTwitter} from "react-icons/im";
import {FaInstagram} from"react-icons/fa";


import img1 from './Images/clothe1.jpeg'; 
import img2 from './Images/jupe.jpeg'; 
import img3 from './Images/robe.jpeg'; 
import black from'./Images/black.jpeg';
import grey from './Images/grey.jpeg';
import white from  './Images/white.jpeg';
import rond1 from './Images/rond1.jpg';
import rond2 from './Images/rond2.png';
import rond3 from './Images/rond3.jpg';
const Data = [
   {
     id: 1,
     imgSrc: img1,
     title: 'Jupe & T-shirt',
     pricing:'$70'
   },
   {
     id: 2,
     imgSrc: img2,
     title: 'Jupe ',
     pricing:'$60'
   },
   {
     id: 3,
     imgSrc: img3,
     title: 'Robe Blanc',
     pricing:'$100'
   },
  
 ];


 
 



function Home() {
  return (
    <div>
      <div className='container-vd'>
      <video id='vd' autoPlay muted loop>
        <source src={woman} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de la vidéo.
      </video>
      </div>
      <h1>L'objectif principal d'Elegance Online<br></br> est de satisfaire les besoins en vêtements <br></br>des femmes.</h1>
      <h3> en offrant une variété de styles, de tailles et de designs, tout<br></br> en créant une expérience d'achat agréable et en répondant<br></br> aux attentes en matière de qualité et de style.</h3>
      {/* gha dik l chat khass link dyal chat */ }
      <div className='btn-to-chat'>
           <button> <a href='Chat'> Start choosing</a></button>
           </div>
           <div id='holf'>
            <p>Nos Services</p>
            <hr></hr>
            </div>
            <div className='card-container' >
            {Data.map(item => (
            <div  key={item.id} className="card" style={{ }}>
           <img  src={item.imgSrc} alt={item.title} className="card-img-top" />
  <div className="card-body">
  
    <h5 className="card-title">{item.title}</h5>
    <hr></hr>
    <div id='lkhwa'>
   <label>Pricing</label><h4>{item.pricing}</h4>
            <span>Relax  </span> <h1>+1</h1>
       <hr id='hr'></hr>
       </div>
    <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
    <button><a href="#" className="btn">Go somewhere</a></button>
  </div>
</div>   ))}


<div className='Description'>
   <h1>La Mode Feminine <span>Une Elegance Online</span></h1>
   
   <p>La mode féminine est une célébration de l'élégance intemporelle et de la confiance en soi. <br></br>Chez <span> Une Elegance Online </span> nous comprenons que chaque femme est unique <br></br> et c'est pourquoi notre collection de vêtements pour femmes est conçue pour refléter cette diversité.</p>
   <h5>Notre gamme de vêtements offre un éventail de styles des tenues décontractées<br></br>pour les journées de détente aux robes somptueuses pour des soirées inoubliables Chaque <br></br>  pièce est soigneusement sélectionnée pour allier confort et stylevous permettant de vous sentir<br></br> belle à chaque étape de votre journée</h5>
</div>

<video  className='vd2' autoPlay muted loop>
  <source src={woman2} type="video/mp4" />
  Votre navigateur ne supporte pas la lecture de la vidéo.
</video>
</div>




<h4 className='Produits'> <AiFillBank id='truc'/>  QUELQUES NOS PRODUITS CHEZ <span> Une Elegance Online </span>  </h4>
<div className='grp-coursoule'>
<Carousel className="cousoule" style={{borderRadius:'10px'}}>
  <Carousel.Item>
    <img src={black} className="d-block" style={{ height: '550px',width :'740px',borderRadius:'6px'}} alt="First slide" />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={grey} className="d-block w-100" style={{ height: '550px' ,width :'750px',borderRadius:'6px' }} alt="Second slide" />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={white} className="d-block w-100" style={{ height: '550px' ,width :'750px' ,borderRadius:'6px' }} alt="Third slide" />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>


<div className='Ronds'>
  <img src={rond1} />  <img id='exp' src={rond2}/><img src={rond3}/>

  <h3>Achetez maintenant et économisez tout de suite </h3>
  <button> Économisez gros aujourd'hui en chats </button>
</div>




<footer>
 

<div className='liens'>
         <h2> Nos Services</h2>
            <a href='' >Hosting</a>
               <br></br>
              
            <a  href=''>Domain Name</a>
            <br></br>
            <a href='' >E-commerce</a>
            <br></br>
            <a  href=''>Machine Learning</a>
            <br></br>
            <a href='' >Finances</a>
            <br></br>
            <a  href=''>Start-up</a>

          
</div>

<div className="trucs">
          <h2> Notre feuille de temps</h2>
         
            <li>✔️ Mon 10-19</li>
            <li>✔️ Tue 10-19</li>
            <li>✔️ Wen 10-19</li>
            <li>✔️ Thu 10-19</li>
            <li>✔️ Fri 10-19</li>
            <li>❌ Sat closed</li>
            <li>❌ Sun closed</li>
         
        </div>
  
        <div className="medias">
          <h2> Nos Medias</h2>
         
            <li><FaFacebook className='itm'/> <h6>FaceBook</h6></li>
            <li> <ImTwitter className='itm'/><h6>TewiTTer</h6></li>
            <li><FaInstagram className='itm'/><h6>InStgram</h6></li>
           
        
        </div>


<div className='map'>
  <h2>Notre Place</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647531560805!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
  


</footer>




</div>
         
  )
}

export default Home;

