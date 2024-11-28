import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  maFonction() {
   alert("body clicked !");
 }

  componentDidMount() {
    console.log("My component is mounting");
    document.addEventListener('click',this.maFonction)
    this.timer = setInterval(() => {
      console.log("a");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("My component is unmounting");
    document.removeEventListener('click',this.maFonction)
    clearInterval(this.timer);
  }

  

  render() {
    return (
      <div>
        <h1>Hello {this.props.lastname}</h1>
      </div>
    );
  }
}

export default HelloWorld;
