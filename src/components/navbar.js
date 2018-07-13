import React, { Component } from 'react';

class Navbar extends Component {
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
                    <a href="/products" className="nav-btn hvr-underline-from-center">
                        Catalog
                    </a>
                    <a href="/admin" className="nav-btn hvr-underline-from-center">
                        Admin
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;
