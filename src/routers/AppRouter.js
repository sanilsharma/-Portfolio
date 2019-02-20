import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route to="/portfolio" component={Portfolio} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
