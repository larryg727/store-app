import React, { Component } from 'react';
import Product from '../components/product';
import { URL_PRODUCTS } from '../constants/urls';

class Catalog extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        const category = this.props.match.params.category;
        const catLink = category === '0' ? '' : '/' + category;
        fetch(URL_PRODUCTS + catLink)
            .then(results => {
                return results.json();
            })
            .then(response => {
                this.setState({
                    products: response.products
                });
                console.table(this.state.products);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    render() {
        return (
            <div className="productContainer">
                {Object.keys(this.state.products).map(key => <Product key={key} details={this.state.products[key]} />)}
            </div>
        );
    }
}

export default Catalog;
