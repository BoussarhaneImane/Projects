import React from "react";
import Rating from "./Rating";
export default function Product({product}){
   return(
   <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}$</td>
      <td>{product.description.slice(0,50)}...</td>
      <td><span className="badge badge-pill bg-dark">{product.category}</span></td>
      <td><img width={100} src={product.image} alt={product.title}></img></td>
      <td><Rating rate={product.rating.rate}/></td>

   </tr>
   )

}
