import React, { Component } from "react";
import Product from "../components/product";
import "../css/products.css";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/products")
      .then(results => {
        return results.json();
      })
      .then(products => {
        this.setState({ products: products });
        console.log("state", this.state.products);
      });
  }
  render() {
    return (
      <div id="productContainer">
        {Object.keys(this.state.products).map(key => (
          <Product key={key} details={this.state.products[key]} />
        ))}
      </div>
    );
  }
}

export default Catalog;
