import React, { Component } from 'react'

export class Counter extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        count:0,age:25
     }
     
     console.log('hello from constructor')
   }
   Increment(){
      this.setState({
         count:this.state.count+1
      })
   }
   getSnapshotBeforeUpdate(){
      //momkin nst3mlohaaa fe body scroll
      return "salam"
   }
// fetch api par exemple & shaw our first component 
componentDidMount(){
   console.log('component mounted')
}
componentDidUpdate(prevProps,prevState,snapshot){
   console.log('component updated')
   console.log(snapshot)
  // console.log(prevState,this.state)
   
}
shouldComponentUpdate(nextProps, nextState) {
   // Comparaison de l'âge dans le state
   console.log(nextState)
   if (nextState.age == this.state.age) {
     return true ;
   } else {
     return false;
   }
 }

Dncrement(){
      //PREV TAHIYA 
      this.setState({
         count:0
      })
   }
  


  render() {
   console.log('hello from render method')
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={()=>this.Increment()}>increment</button>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={()=>this.Dncrement()}>Reset</button>
      </div>
    )
  }
}
 

export default Counter
