import React, { useState } from "react";
export default function Form(){

const [formsValues,setformsValues]=useState({});
const handleChange=(e)=>{
   const event=e.currentTarget;
   const id=event.id;
   let value=event.value;
   if(event.type ==="checkbox"){
      if(value=event.checked   ? "Oui" : "Non"){
      
      }
   } 
    setformsValues(preveState=>{
      return {...preveState,[id]:value}
    });

};




   return <>
   <div className="container my-3">
   
   {JSON.stringify(formsValues)}
   <form className="w-25">
   <div className="form-group">
      <label>
         Name:
      </label>
      <input type="text" id="name" className="form-control" onChange={handleChange}/>

   </div>


   <div className="form-group">
      <label>
        Age:
      </label>
      <input type="text" id="age" className="form-control" onChange={handleChange}/>

   </div>


   <div className="form-group">
          <label>Choisissez une option :</label>
          <select id="selectedOption" className="form-control" onChange={handleChange}>
            <option value="">Sélectionnez une option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          
          </select>
        </div>



   <div className="form-check">
      
   <input type="checkbox" id="check" className="form-check-input"  onChange={handleChange}/> <label htmlFor="accept" className="form-check-label">  Accept our Rules :</label>
      
    </div>
    <button className="btn btn-primary" >Save</button>

</form>
</div>

   </>
}