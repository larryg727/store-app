import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalog from './catalog';
import Home from './home';
import Admin from './admin';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Catalog} />
            <Route path="/admin" component={Admin} />
        </Switch>
    </BrowserRouter>
);

export default Router;
