import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Home from "./Home"
import reportWebVitals from './reportWebVitals';
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={Home}></Route>
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
