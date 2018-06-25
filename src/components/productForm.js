import React, { Component } from 'react';

class ProductForm extends Component {
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    priceRef = React.createRef();

    createProduct = e => {
        e.preventDefault();
        const product = {
            name: this.nameRef.current.value,
            description: this.descriptionRef.current.value,
            price: this.priceRef.current.value
        };
        this.props.addProduct(product);
        e.currentTarget.reset();
    };

    render() {
        return (
            <div className="modalBackground">
                <form className="addProduct" onSubmit={this.createProduct}>
                    <div className="modalCloseBtn" onClick={this.props.hideForm}>
                        X
                    </div>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                    <input name="description" ref={this.descriptionRef} type="text" placeholder="Description" />
                    <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                    <button type="submit">Add Product</button>
                </form>
            </div>
        );
    }
}

export default ProductForm;
