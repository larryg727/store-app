import React, { Component } from 'react';
import Navbar from './components/navbar';
import Router from './components/router';
import Footer from './components/footer';
import { URL_CATEGORIES } from './constants/urls';

class App extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        fetch(URL_CATEGORIES)
            .then(results => {
                return results.json();
            })
            .then(response => {
                this.setState({
                    categories: response.categories
                });
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    render() {
        return (
            <div className="appContainer">
                <Navbar categories={this.state.categories} />
                <div className="contentContainer">
                    <Router />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
