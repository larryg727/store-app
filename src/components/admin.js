import React, { Component } from 'react';
import config from '../config';
import Product from './product';
import ProductFrom from './productForm';
import CreateCategoryForm from './createCategoryForm';
import CreateSubcategoryForm from './createSubcategoryForm';

class Admin extends Component {
    state = {
        products: [],
        categories: [],
        subcategories: [],
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
        formData.append('details', product.details);
        formData.append('price', product.price);
        formData.append('category', product.category);
        formData.append('subcategory', product.subcategory);
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
                const new_category = {
                    name: category,
                    id: response.result
                }
                const categories = [...this.state.categories];
                categories.push(new_category)
                this.setState({
                    categories: categories
                })
            })
            .catch(error => {
                console.log(error);
            })
    };

    addSubcategory = subcategory => {
        const formData = new FormData();
        formData.append('name', subcategory.name)
        formData.append('category', subcategory.category)

        fetch(config.apiUrl + '/add/subcategory', {
            method: 'POST',
            body: formData
        })
            .then(results => {
                return results.json();
            })
            .then(response => {
                console.log(response);
                //TODO: error handle based on response.result
                const subcategories = [...this.state.subcategories]
                const newSubcategory = {
                    name: subcategory.name,
                    category: subcategory.category,
                    id: response.result
                }
                subcategories.push(newSubcategory)
                this.setState({
                    subcategories: subcategories
                })
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
                    categories: response.categories,
                    subcategories: response.subcategories
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
                <CreateSubcategoryForm categories={this.state.categories} addSubcategory={this.addSubcategory} />
                <div className="productContainer">
                    {Object.keys(this.state.products).map(key => <Product key={key} details={this.state.products[key]} />)}
                </div>
                {this.state.showAddForm ? (
                    <ProductFrom addProduct={this.addProduct} hideForm={this.hideProductFormClick} categories={this.state.categories} subcategories={this.state.subcategories} />
                ) : null}
            </div>
        );
    }
}

export default Admin;
