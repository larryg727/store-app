import React, { Component } from 'react';
import config from '../config';
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

    hideProductFormClick = () => {
        this.setState({ showAddForm: false });
    };

    addProduct = product => {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        fetch(config.apiUrl + '/add/product', {
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
            })
            .catch(error => {
                console.log('error', error)
            });
    };

    componentDidMount() {
        fetch(config.apiUrl + '/products')
            .then(results => {
                return results.json();
            })
            .then(response => {
                this.setState({ products: response });
            })
            .catch(error => {
                console.log('error', error)
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
                {this.state.showAddForm ? (
                    <ProductFrom addProduct={this.addProduct} hideForm={this.hideProductFormClick} />
                ) : null}
            </div>
        );
    }
}

export default Admin;
