import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import routes from './config/Routes';

const App = React.createClass({

  render(){
    return(
      <h1>test</h1>
    );
  }

})

ReactDOM.render(routes, document.getElementById('target'));
