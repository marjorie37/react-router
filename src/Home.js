import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "Bienvenue"
    };
  }
  render() {
    return <h1>{this.state.home}</h1>;
  }
}

export default Home;
