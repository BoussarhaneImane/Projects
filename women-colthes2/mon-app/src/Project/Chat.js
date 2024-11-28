import React from 'react'

import './chat.css';
import im1 from './Images/$.jpg'; 
import im2 from './Images/47.jpg'; 
import im3 from './Images/PU.jpg'; 
import im4 from './Images/sd.jpg'; 
import im5 from './Images/YOP.jpg'; 
import img6 from './Images/AZZZ.jpg'; 
import img7 from './Images/wv.jpg'; 
import img8 from './Images/custime.jpg';
import img9 from './Images/SJ.jpg';
//create api image id et titre//

const Clothes=[
  {
    id:1,
    img:img6,
    titre:"Bleuse&Pantalon en theme Noir"
  },
  {
    id:2,
    img:img7,
    titre:"Jupe jean"
  },
  {
    id:3,
    img:img8,
    titre:"Costume Blanc chic"
  },
  {
    id:4,
    img:img9,
    titre:"Packs tricos "
  }

]

const DispalyImages = () => {
  return (
    <div id='DispalyImages'  >
      {Clothes.map((clothe) => (
        <div  key={clothe.id}>
          <img src={clothe.img} alt={clothe.titre} />
          <h2>{clothe.titre}</h2>
        </div>
      ))}
    </div>
  );
};


function Chat() {
  return (
    <div>
      <form>
     <div className='search'>
     <button>Search</button>
         <input type="text" className="focusable-paragraph" />
     
  
     </div>
     </form>
     
   <div className='imgs'>
      <img src={im1} />
        <span className='points'></span>
      <img src={im2} />
      <span className='points'>  </span>
      <img src={im3} />
      <span className='points'>   </span>
      <img src={im4} />
      <span className='points'>   </span>
      <img src={im5} />
      <span className='points'>   </span>
      </div><hr className='hr'></hr>
      


      <section id="popular-destination">
        <h5 className="title">Destinations Populaires</h5>
        <div className='boxs'>
         <div className="content">
            <div className="box">
                <img src={img6} alt=""/>
                <div className="content">
              
                        
                        <h6>Un pantalon noir élégant avec une coupe slim fit pour une silhouette </h6>
                        <label>Prix : 59,99 €</label>
                        <a href="#">Commandez-maintenant</a>
                 
                </div>
</div>
</div>             

<div className="content">
            <div className="box">
                <img src={img7} alt=""/>
                <div className="content">
              
                        
                        <h6>Un pantalon noir élégant avec une coupe slim fit pour une silhouette </h6>

                        <label>Prix : 59,99 €</label>
                        <a href="#">Commandez-maintenant</a>
                 
                </div>
</div>
</div>  

<div className="content">
            <div className="box">
                <img src={img8} alt=""/>
                <div className="content">
              
                        
                        <h6>Un pantalon noir élégant avec une coupe slim fit pour une silhouette </h6>
                        <label>Prix : 59,99 €</label>
                        <a href="#">Commandez-maintenant</a>
                 
                </div>
</div>
</div>            

<div className="content">
            <div className="box">
                <img src={img9} alt=""/>
                <div className="content">
              
                        
                        <h6>Un pantalon noir élégant avec une coupe slim fit pour une silhouette </h6>
                        <label>Prix : 59,99 €</label>
                        <a href="#">Commandez-maintenant</a>
                 
                </div>
</div>
</div>  
        
</div>
          
            </section>
  
         
</div>

  )
}

export default Chat
