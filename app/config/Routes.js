import React from "react";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Header from "../components/Header";
import PromptContainer from '../containers/PromptContainer';
import WeatherContainer from '../containers/WeatherContainer';

const routes = (
  <Router history={hashHistory}>

    <Route path="/" component={Header} >
      <IndexRoute component={PromptContainer} />
      <Route path="/getWeather" component={WeatherContainer} />
    </Route>
  </Router>
);

module.exports = routes
