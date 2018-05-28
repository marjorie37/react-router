import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import History from "./History";

class App extends Component {
  render() {
    return (
      <div>
        <ul
          style={{
            "background-color": "blue",
            "list-style-type": "none",
            "font-size": "25px"
          }}
        >
          <li style={{ float: "left" }}>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold"
              }}
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                "margin-left": "40px"
              }}
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              to="/notre-histoire"
            >
              Notre histoire
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/notre-histoire" component={History} />
      </div>
    );
  }
}

export default App;
