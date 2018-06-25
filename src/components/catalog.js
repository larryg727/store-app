import React, { Component } from 'react';
import Product from '../components/product';
import apiUrl from '../config';
import '../css/products.css';

class Catalog extends Component {
    state = {
        products: []
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
            <div className="productContainer">
                {Object.keys(this.state.products).map(key => (
                    <Product key={key} details={this.state.products[key]} />
                ))}
            </div>
        );
    }
}

export default Catalog;
