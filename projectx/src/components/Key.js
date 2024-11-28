import React, { Component } from 'react'

export class keys extends Component {
  render() {


    //const items = [1, 2, 3, 4, 5];

//const itemList = items.map((item) => (
 // <li key={item.toString()}>{item}</li>
//));
    const noms = ['Alice', 'Bob', 'Charlie', 'David'];

// Utilisation de map() pour créer une liste d'éléments JSX avec des clés
       const listeDesNoms = noms.map((nom, index) => (
  <li key={index}>{nom}</li>
));
    return (
      <div>
          <div>
    <h1>Liste de noms :</h1>
    <ul>{listeDesNoms}</ul>
  </div>
      </div>
    )
  }
}

export default keys

