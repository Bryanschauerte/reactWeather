import React from 'react';
import DayOfWeather from "../components/DayOfWeather";
import {Link} from "react-router";

var style ={
  container:{
    backgroundColor: "#3e133e"
  },
  text:{
    color: "white"
  }
}
var Forcast = React.createClass({

  getInitialState(){
    return {
      weatherData: this.props.weatherArray,
      dayOne:[],
      dayTwo: [],
      dayThree:[],
      dayfour:[],
      dayfive: []
    }
  },

  divideUpWeather(dayNumber){

    var weatherSets = [8, 16, 24, 32, 40];
      if(dayNumber == 0){
        var startIndex = 0;
      }else{
        var startIndex = weatherSets[dayNumber-1];
      }
    var whichDataSet = this.state.weatherData.slice(startIndex, weatherSets[dayNumber]);
    return whichDataSet;
  },
  componentWillMount(){

    this.setState({
      dayOne: this.divideUpWeather(0),
      dayTwo: this.divideUpWeather(1),
      dayThree: this.divideUpWeather(2),
      dayFour: this.divideUpWeather(3),
      dayFive: this.divideUpWeather(4)
    });

  },
render(){
return(
  <div className="row text-center" style={style.container}>
    <Link to="/">
      <button type = "button" className ="btn btn-lg btn-danger">Select Different City</button>
    </Link>
    <h1 style={style.text}>{this.props.city}</h1>
    <DayOfWeather weatherArray={this.state.dayOne} />
    <DayOfWeather weatherArray={this.state.dayTwo} />
    <DayOfWeather weatherArray={this.state.dayThree} />
    <DayOfWeather weatherArray={this.state.dayFour} />
    <DayOfWeather weatherArray={this.state.dayFive} />

</div>);
},

});
module.exports = Forcast;
