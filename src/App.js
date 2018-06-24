import React, { Component } from "react";
import "./App.css";
import Router from "./components/router";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
