import React, { Component } from "react";
import Person from "../components/testperson";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/test")
      .then(results => {
        return results.json();
      })
      .then(people => {
        this.setState({ people: people });
        console.log("state", this.state.people);
      });
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.people).map(key => (
          <Person key={key} details={this.state.people[key]} />
        ))}
      </div>
    );
  }
}

export default Body;
