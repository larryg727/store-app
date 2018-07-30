import React, { Component } from "react";

class AdminProduct extends Component {
    render() {
        const { name, description, price, id } = this.props.details;
        return (
            <div className="product" id={id} onClick={() => this.props.editProduct(id)}>
                <h2>{name}</h2>
                <h4>{description}</h4>
                <h4>${price}</h4>
            </div>
        );
    }
}

export default AdminProduct;