import React from 'react';
import { createPortal } from 'react-dom';

class Portals extends React.Component {
  render(){
  const portalParagraphStyles = {
     backgroundColor: 'lightblue',
     width:'300px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
   
 }; {
    return (
      <div>
        <p  >Ce composant enfant est placé dans le composant parent.</p>
        {createPortal(
          <p style={portalParagraphStyles}>Ce composant enfant est placé dans le corps du document.</p>,
          document.body
        )}
      </div>
    );
  }
}}

export default Portals;






