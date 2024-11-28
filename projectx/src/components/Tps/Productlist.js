import React, { useEffect, useState } from 'react';
import Product from './Product';

function Productlist() {


   
  const [Productlist,setProductlist]=useState([]);
  const [Category,setCategory]=useState([]);
  const [currentCategory,setcurrentCategory]=useState('electronics');
  const [SaerchInput,setSaerchInput]=useState('');
  //function api : 
   
  const getProducts=()=>{
  fetch('https://fakestoreapi.com/products').then(response=>response.json())
  .then(data=> setProductlist(data));
  
}


const getCategorys=()=>{
  fetch('https://fakestoreapi.com/products/categories').then(response=>response.json())
  .then(data=> setCategory(data));
  
}


useEffect(()=>{
  getProducts()
  getCategorys()

},[])


     const DisplayCategorys = () => {
      return Category.map((category, key) =>
      <button key={key}
              className={'btn ' + (currentCategory === category ? 'btn-dark' : 'btn-secondary')}
              onClick={(e) => {
                  e.preventDefault()
                  setcurrentCategory(category)
              }}>
          {category}
      </button>
  )
          
  

}
    const DisplayProducts = () => {
 
      let productsTemp = Productlist;
      if (SaerchInput !== ' ') {
          productsTemp = productsTemp.filter(product =>
             
          product.id.toString().includes(SaerchInput)|| 
              product.title.includes(SaerchInput)
              ||  product.price.toString().includes(SaerchInput)
              || product.description.includes(SaerchInput)
             
          )
      }
      if (currentCategory !== '') {
        productsTemp = productsTemp.filter((product) =>
          product.category === currentCategory
        );
      }
    return productsTemp.map((product, key) => (
      <Product product={product} key={key} />
    ));

}
const handlSearch = (e) => {
e.preventDefault();
 const searchValue= document.querySelector('#searchInput').value;
 setSaerchInput(searchValue);

}
// style button
const styles = {
marginLeft:'20px',
}
const styles2 = {
  position :'relative',
  right:'440px'
  }
  



  return <div className='container-fluix mx-auto w-75 my-3'>

         <h1> Liste des Produits: </h1>
          
          <hr></hr>

         <div className="d-flex align-items-center my-5">
  <input type="text" id="searchInput" className="form-control w-25" placeholder='Trouvez votre produit' />

  <input value="search" className="btn btn-success" style={styles} onClick={handlSearch}
    type='submit'
  />
</div>
<hr></hr>
<h4 style={styles2}>categories:</h4>

<div className="btn-group w-100 my-3">
 {DisplayCategorys()}
</div>
  


      <table className="table  my-3">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description </th>
      <th scope="col">Category</th>
      <th scope="col">Image</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>
    {DisplayProducts()}
    </tbody>
  </table>

    </div>
  
}

export default Productlist;
