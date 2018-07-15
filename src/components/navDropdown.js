import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return (
            <ul>
                <li><a href="/products" className="nav-btn">
                All Products
                </a></li>
                {this.props.categories.map(category => {
                    return <li id={category.id}><a className='nav-btn'>{category.name}</a></li>
                })}
            </ul>
        )
    }
}

export default Dropdown;