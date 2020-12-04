import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { JumbrotonComponent, NavbarComponent } from "./components";
import {
  CreateUserContainer,
  DetailUserContainer,
  EditUserContainer,
  HomeContainer,
} from "./containers";

export default class App extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <JumbrotonComponent />
        <Router>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateUserContainer} />
          <Route path="/detail/:id" exact component={DetailUserContainer} />
          <Route path="/edit/:id" exact component={EditUserContainer} />
        </Router>
      </>
    );
  }
}
