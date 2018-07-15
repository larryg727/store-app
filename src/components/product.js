import React, { Component } from "react";

class Product extends Component {
  render() {
    const { name, description, price, id } = this.props.details;
    return (
      <div className="product" id={id}>
        <h2>{name}</h2>
        <h4>{description}</h4>
        <h4>${price}</h4>
      </div>
    );
  }
}

export default Product;
