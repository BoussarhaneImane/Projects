import React from 'react'
import { useState } from 'react'
import Back from './images/sansBack3.png'
import imageDD from './images/rond3.jpg'
import imageB from './images/YBF.jpg'
import imageC from './images/TW.jpg'
import imageD from './images/SJ.jpg'
import imageE from './images/$.jpg'
import imageF from './images/sd.jpg'
import imageG from './images/Jup.jpg'
import imageK from './images/5..jpg'
import './Chat.css'
import Data from './Data';
import Contact from './Contact'


function Chat() {
  const [SaerchInput,setSaerchInput]=useState('');
  const [showContact, setShowContact] = useState(false);
 

  const Clothes=[{
    id:1,
    img:imageDD,
    price:"200$",
    desc:" Manteau minimaliste vert effet laine bouillie "
   


 },
 {
    id:2,
    img:imageB,
    price:"300$",
    desc:"Jupe courte en cuire noir et T-shirt Noir coul Manteau"


 },
 {
    id:3,
    img:imageC,
    price:"105$",
    desc:"Jacket , T-Shirt blanc pour cassé et jeans   "


 },{
    id:4,
    img:imageD,
    price:"90$",
    desc:"Pack Mini ventre 3Couleurs,Black,Red,Gray "


 },
 {
    id:5,
    img:imageE,
    price:"200$",
    desc:"Ensemble 2Pièces Jupe  et Tunique Noire"


 },{
    id:6,
    img:imageF,
    price:"300$",
    desc:"Jacket Chaude courte légère Biege "


 },{
    id:7,
    img:imageG,
    price:"80$",
    desc:"Jupe en jean blue moyen Taille longue"


 },
 {
    id:8,
    img:imageK,
    price:"400$",
    desc:"Robe Blanc courte pour les soiries "


 }

]

const DispalyProducts =()=>{


      
  let Temp=Clothes;
  if (SaerchInput !== ' ') {
      Temp = Temp.filter(product =>
           product.price.toString().includes(SaerchInput)
          || product.desc.includes(SaerchInput)
         
      )
  }

  const handleClick = () => {
 
   setShowContact(true);
 }

  return Temp.map((Clothe) =>(
    <Data key={Clothe.id} img={Clothe.img} price={Clothe.price} desc={Clothe.desc}  onClick={handleClick}/>
    
    ))}

const handlSearch = (e) => {
  e.preventDefault();
   const searchValue= document.querySelector('#searchInput').value;
   setSaerchInput(searchValue);
  
  }
  return (
    <div>
      <div id='div-grd'>
       <h1>FLAT  50% OFF </h1>
       <h3>12 Hours 20 Mins</h3>
       <button>Explore Now</button>
         <img src={Back}/>
      </div>
     
      <input type="text" className='Search-input'  placeholder="Enter your Search Clothes" id='searchInput'/> <input value="Search" className="btn" onClick={handlSearch}
    type='submit'  id='Search-btn'/>
   
      <hr className='hr-search'></hr>
   
      <div className='data-container '>

         {DispalyProducts()} 

         </div>
         
    </div>
  )
}

export default Chat


