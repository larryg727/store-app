import React, { Component } from "react";

class Product extends Component {
  render() {
    const { name, description, price } = this.props.details;
    return (
      <div className="person">
        <h3>Name</h3>
        <h4>{name}</h4>
        <h3>description</h3>
        <h4>{description}</h4>
        <h3>Price</h3>
        <h4>${price}</h4>
      </div>
    );
  }
}

export default Product;
