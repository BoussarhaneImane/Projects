import React, { Component } from 'react'

export class condition extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
      choice:false
     }
   }
   
  render() {
   let message
   if (this.state.choice) {
      message=<h1>it's the best</h1>
      
   }
   else{
      message=<h1> it's bad</h1>
   }
    return (
     
      <div>
       <h1>{message}</h1>  
      </div>
    )
  }
}

export default condition
