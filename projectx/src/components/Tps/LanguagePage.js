import React, { useState } from "react";
import Language from "./Language";
export default function Page(){

   const [CurrentLanguage,setcurrentLanguage] =useState('');

const dDisplayMessage=()=>{
   switch(CurrentLanguage){
       case 'AR': return ' سلام ';
       case 'FR': return ' Bonjour';
       case 'EN': return ' Hello';
   }
}

return<>
<h1>bienvenue sur mon tp </h1>

<Language OnLanguageClick={value=>setcurrentLanguage(value)}/>
<hr></hr>
<h5>{CurrentLanguage}</h5>
<hr></hr>
<div className="p-3 mb-2 bg-secondary text-white">{dDisplayMessage()}</div>

</>
}