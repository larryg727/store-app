import React, { Component } from 'react';
import Navbar from './components/navbar';
import Router from './components/router';
import Footer from './components/footer';
import config from './config';

class App extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        fetch(config.apiUrl + '/categories')
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
