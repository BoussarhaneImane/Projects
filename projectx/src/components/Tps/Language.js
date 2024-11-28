import React from "react"
export default function Language({OnLanguageClick}){
 
const HandleClick=(e)=>{
   e.preventDefault();
   OnLanguageClick(e.currentTarget.dataset.lang);

};


   return<>


<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" data-lang="FR" href="#" onClick={HandleClick}>Francais</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-lang="AR"  href="#" onClick={HandleClick}>Arabe</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-lang="EN"  href="#" onClick={HandleClick}>English</a>
  </li>

</ul>



        </>
}