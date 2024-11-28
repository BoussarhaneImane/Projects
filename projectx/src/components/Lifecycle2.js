
import React, { Component } from 'react';


class Lifecycle2 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
//ILA BGHITI TERA L UPDATE OLALA 
  shouldComponentUpdate() {
   return true;
 }
 //
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
    }}

export default Lifecycle2;
