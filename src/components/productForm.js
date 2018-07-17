import React, { Component } from 'react';

class ProductForm extends Component {
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    priceRef = React.createRef();
    categoryRef = React.createRef();

    createProduct = e => {
        e.preventDefault();
        const product = {
            name: this.nameRef.current.value,
            description: this.descriptionRef.current.value,
            price: this.priceRef.current.value,
            category : this.categoryRef.current.value
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
                    <select name='category' ref={this.categoryRef} required>
                        <option value="">Select an option</option>
                        {this.props.categories.map(category => (
                            <option value={category.id}>{category.name}</option>
                        ))}
                    </select>      
                    <button type="submit">Add Product</button>
                </form>
            </div>
        );
    }
}

export default ProductForm;
