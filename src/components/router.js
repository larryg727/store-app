import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalog from "./catalog";
import Home from "./home";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Catalog} />
    </Switch>
  </BrowserRouter>
);

export default Router;
