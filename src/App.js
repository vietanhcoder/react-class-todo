import React, { Component } from "react";

import Clock from "./components/Clock";
import Users from "./components/Users";
import Calculator from "./components/lifting-state-up/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Course: Class component React</h1>
        <Clock />
        <Users />
        <Calculator />
      </div>
    );
  }
}
export default App;
