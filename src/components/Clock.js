import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h3>Clock class component</h3>
        <div>Show date: {this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}
export default Clock;
