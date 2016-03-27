import React from 'react';

var style = {
  container:{
    marginTop: "10px",
    padding:"10px"
  }
}

var DayOfWeather = React.createClass({
  getInitialState(){
    return{
      index:0
    }
  },

  setImageURL(number){
    return "http://openweathermap.org/img/w/" + number + ".png";
  },
  getDay(dateString){
    return dateString.slice(5, 10)
  },
  getTime(dateString){
    return dateString.slice(11,16);
  },
  handleForwardClick(){

    if(this.state.index >= this.props.weatherArray.length-1){
      this.setState({
        index: 0
      })
    }else {
    this.setState({
      index: this.state.index+=1
    });
    }
  },
  handleBackwardClick(){

    if(this.state.index == 0){
      this.setState({
        index: this.props.weatherArray.length-1
      })
    }else {
    this.setState({
      index: this.state.index -= 1
    });
    }
  },
  render(){
    var imageLocation = this.setImageURL(this.props.weatherArray[this.state.index].weather[0].icon);
    var date = this.getDay(this.props.weatherArray[this.state.index].dt_txt);
    var time = this.getTime(this.props.weatherArray[this.state.index].dt_txt);
  return(
    <div className ="col-sm-2" style={style.container}>
      <ul >
          <li className="list-group-item text-center">
              <img src={imageLocation} alt="weatherImage" className="text-center"/>
          </li>
          <li className="list-group-item"><h4><b>Date: </b> {date}</h4></li>
          <li className="list-group-item">
            <span
              onClick={this.handleBackwardClick}
              className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
            <b> Time:</b> {time}
            <span
              onClick={this.handleForwardClick}
              className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
            </li>
          <li className="list-group-item"><b>Temperature: </b> {this.props.weatherArray[this.state.index].main.temp} &deg;F</li>
          <li className="list-group-item"><b>Humidity:</b> {this.props.weatherArray[this.state.index].main.humidity}</li>
          <li className="list-group-item"><b>Weather:</b> {this.props.weatherArray[this.state.index].weather[0].description} </li>
          <li className="list-group-item"><b>Wind:</b> {this.props.weatherArray[this.state.index].wind.speed}</li>
        </ul>

    </div>
  );
}

})




module.exports = DayOfWeather;
