import React, { Component } from 'react';
import Navbar from './components/navbar';
import Router from './components/router';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div className="appContainer">
                <Navbar />
                <div className="contentContainer">
                    <Router />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
