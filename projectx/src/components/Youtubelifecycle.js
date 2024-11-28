import React ,{ useState } from "react";


function Youtubelifecycle() {
   const [count,setcount]=useState(0)
   const increment = () => {
      setcount((prevState) => prevState + 1);
    }
    const reset = () => {
      setcount(0);
    };
   
  return (
    <div>
      <h1>welcome to my counter app</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <h2>il y a   : {count} secondes</h2>
    </div>
  )
}

export default Youtubelifecycle
