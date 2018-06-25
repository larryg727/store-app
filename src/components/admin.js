import React, { Component } from 'react';
import apiUrl from '../config';
import Product from './product';
import ProductFrom from './productForm';

class Admin extends Component {
    state = {
        products: [],
        showAddForm: false
    };

    showProductFormClick = () => {
        this.setState({ showAddForm: true });
    };

    addProduct = product => {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        fetch(apiUrl + '/product/create', {
            method: 'POST',
            body: formData
        })
            .then(results => {
                return results.json();
            })
            .then(response => {
                console.log('response', response);
                const products = { ...this.state.products };
                products[products.length] = product;
                this.setState({
                    products: products,
                    showAddForm: false
                });
            });
    };

    componentDidMount() {
        fetch(apiUrl + '/products')
            .then(results => {
                return results.json();
            })
            .then(products => {
                this.setState({ products: products });
                console.log('state', this.state.products);
            });
    }
    render() {
        return (
            <div>
                <h1>Welcome to the Admin Panel</h1>
                <button onClick={this.showProductFormClick}>Add Product</button>
                <div className="productContainer">
                    {Object.keys(this.state.products).map(key => <Product key={key} details={this.state.products[key]} />)}
                </div>
                {this.state.showAddForm ? <ProductFrom addProduct={this.addProduct} /> : null}
            </div>
        );
    }
}

export default Admin;
