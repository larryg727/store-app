import React, { Component } from "react";

class Person extends Component {
  render() {
    const { name, cool, awesome } = this.props.details;
    return (
      <div className="person">
        <h3>Name</h3>
        <h4>{name}</h4>
        <h3>Cool?</h3>
        <h4>{cool}</h4>
        <h3>Awesome</h3>
        <h4>{awesome}</h4>
      </div>
    );
  }
}

export default Person;
