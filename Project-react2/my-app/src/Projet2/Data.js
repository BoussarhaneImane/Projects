import React from 'react';
import {BsFillStarFill} from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'

export default function Data({id,img,price,desc,onClick}){
   return(
      <div className='data-container '>
       <div  id={id}>

     <img onClick={onClick} width={250} src={img} alt={img}>
     
     </img>
      
    
     <h6>{desc}</h6>
    <span className='Star'><BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <AiOutlineStar/> </span> <h5>{price}</h5>
   </div>
   </div>
   )

}
