import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Parentcomponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     parentElement:"Parent"
  }
  this.Parentmethod=this.Parentmethod.bind(this)
}
Parentmethod(childName){
   alert(`hello ${this.state.parentElement} from ${childName}`)
}

  render() {
    return (
      <div>
        <Childcomponent greetHandler={this.Parentmethod}/>
      </div>
    )
  }
}

export default Parentcomponent
