import React from 'react';
import Helpers from '../utils/AxiosHelpers';
import Forcast from "./Forcast";
import Loading from "../components/Loading";


var WeatherContainer= React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return{
      isLoading: true,
      forecastData: []
    }
  },

  makeRequest(city){
    Helpers.requestInformation(city)
    .then(function (forecastData) {
      this.setState({
        isLoading: false,
        forecastData: forecastData
      });
    }.bind(this));
  },

  componentDidMount(){
    this.makeRequest(this.props.location.query.city);
  },

  render(){

    return this.state.isLoading ?
        (<Loading text="Looking at the sky now"/>)
    :   (<Forcast city= {this.props.location.query.city}weatherArray={this.state.forecastData}/>);
  }

});

module.exports = WeatherContainer;
