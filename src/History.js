import React, { Component } from "react";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: "Notre histoire"
    };
  }
  render() {
    return <h1>{this.state.history}</h1>;
  }
}

export default History;
