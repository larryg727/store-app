import React, { Component } from "react";
import "./App.css";
import Body from "./components/body";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
