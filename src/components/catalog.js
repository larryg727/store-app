import React, { Component } from 'react';
import Product from '../components/product';
import config from '../config';

class Catalog extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        fetch(config.apiUrl + '/products')
            .then(results => {
                return results.json();
            })
            .then(response => {
                this.setState({ 
                    products: response.products
                 });
                console.log('products', this.state.products);
            })
            .catch(error => {
                console.log('error', error)
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
