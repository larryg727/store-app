import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Body from "./body";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Body} />
    </Switch>
  </BrowserRouter>
);

export default Router;
