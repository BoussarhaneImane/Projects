import React from 'react'

function Childcomponent(props) {
  return (
    <div>
      <button style={{backgroundColor: "red"}} onClick={()=>props.greetHandler('child')}>Greet parent</button>
    </div>
  )
}

export default Childcomponent
