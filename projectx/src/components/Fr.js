import React, { useState } from "react"


export default function Fruits() {

  const[fruit,setfruit]=useState('')
  const[fruitaffiche,setfruitaffiche]=useState([])
  const afficher= ()=>fruitaffiche.map((fruit,fruitkey)=><li key={fruitkey}>{fruit}</li>)
  
   const Handlinput= () =>{
    const fruitValue=document.querySelector('#fruit').value
    setfruit(fruitValue)
   }
     const Handladd=(e)=>{
     e.preventDefault()
  setfruitaffiche([...fruitaffiche,fruit])

   }
  return (
    <div>
      <h1> Fruits</h1>
       <form>
        <input onChange={Handlinput} type='text' id='fruit'/>
        <input onClick={Handladd} type='submit' value='add fruits'/>
       </form>
      <ul>{afficher()}</ul>
    </div>
  )
}
