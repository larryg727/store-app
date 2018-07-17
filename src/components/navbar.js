import React, { Component } from 'react';
import Dropdown from './navDropdown';

class Navbar extends Component {
    state = {
        categories: [],
        showDropDown: false
    }

    dropDownClick = (e) => {
        let change = !this.state.showDropDown
        this.setState({
            showDropDown: change
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.categories !== this.props.categories) {
            this.setState({
                categories: this.props.categories
            });
        }
        
    };

    render() {
        return (
            <div id="navbar">
                <div id="navLogoContainer">
                    <img src="http://via.placeholder.com/350x150" alt="logo" className="navLogo" />
                </div>
                <div id="navLinksContainer">
                    <a href="/" className="nav-btn hvr-underline-from-center">
                        Home
                    </a>
                    <div className='dropdown'>
                        <a onClick={this.dropDownClick} className='nav-btn hvr-underline-from-center'>Products</a>
                        <ul className={this.state.showDropDown ? 'slideDown' : 'slideUp'}>
                            <li><a href="/products/0" className='nav-btn'>All Products</a></li>
                            {this.state.categories.map(category => (
                                <Dropdown category={category} key={category.id} />
                            ))}
                        </ul>
                    </div>
                    <a href="/admin" className="nav-btn hvr-underline-from-center">
                        Admin
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;
