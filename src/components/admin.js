import React, { Component } from 'react';
import config from '../config';
import Product from './product';
import ProductFrom from './productForm';
import CreateCategoryForm from './createCategoryForm';

class Admin extends Component {
    state = {
        products: [],
        categories: [],
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
        formData.append('category', product.category);
        fetch(config.apiUrl + '/add/product', {
            method: 'POST',
            body: formData
        })
            .then(results => {
                return results.json();
            })
            .then(response => {
                console.log('response', response);
                //TODO: error handle based on response.result
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

    addCategory = category => {
        const formData = new FormData();
        formData.append('name', category)
        
        fetch(config.apiUrl + '/add/category', {
            method: 'POST',
            body: formData
        })
            .then(results => {
                return results.json();
            })
            .then(response => {
                console.log(response);
                //TODO: error handle based on response.result
            })
            .catch(error => {
                console.log(error);
            })
    };

    componentDidMount() {
        fetch(config.apiUrl + '/products')
            .then(results => {
                return results.json();
            })
            .then(response => {
                console.log(response)
                this.setState({ 
                    products: response.products,
                    categories: response.categories
                 });
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    render() {
        return (
            <div>
                <h1>Welcome to the Admin Panel</h1>
                <button onClick={this.showProductFormClick}>Add Product</button>
                <CreateCategoryForm addCategory={this.addCategory} />
                <div className="productContainer">
                    {Object.keys(this.state.products).map(key => <Product key={key} details={this.state.products[key]} />)}
                </div>
                {this.state.showAddForm ? (
                    <ProductFrom addProduct={this.addProduct} hideForm={this.hideProductFormClick} categories={this.state.categories} />
                ) : null}
            </div>
        );
    }
}

export default Admin;
