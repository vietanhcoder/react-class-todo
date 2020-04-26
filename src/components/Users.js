import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    // this.setState: merge object
    this.setState({
      users: data,
    });
  }

  componentWillUnmount() {}

  render() {
    const { users } = this.state;
    return (
      <div>
        <h3>Users class component</h3>
        {users.length > 0 &&
          users.map((user) => <div key={user.id}>Title: {user.title}</div>)}
      </div>
    );
  }
}
export default Users;
