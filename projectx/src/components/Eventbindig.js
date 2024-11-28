import 
React, { Component } from 'react'
export class Eventbindig extends Component {

   constructor(props) {
      super(props)
    
      this.state = {
         message: "full stack developer"
      }
      {/*this.Clickevent=this.Clickevent.bind(this)*/}
    }
  /* Clickevent(){
      this.setState({
         message:"hello i'am imane"
      })
      
    }*/
    Clickevent = ()=>{
      this.setState({
         message:"hello i'am imane"
      })
    }
    

  render() {
    return (
     <div>
   
         <h1 style={{color: "red"}}>{this.state.message}</h1>
        {/*<button onClick={this.Clickevent.bind(this)}>click here</button>*/}
        {/*<button onClick={this.Clickevent}>click here</button>*/}
        {/*<button onClick={()=>this.Clickevent()}>click here</button>*/}
        <button onClick={this.Clickevent}>click here</button>
      </div>
    )
  }
}
//toro9 bach t3yt 3la fuctions ou ahssan tari9a hiya .bind(this)

export default Eventbindig
