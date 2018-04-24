import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import TopicsComponent from "./components/MessageComponent";
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/messages">Topics</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/messages" component={TopicsComponent} />
            <Redirect to = "/" />
          </Switch>
        </div>
    );
  }
}

export default App;
