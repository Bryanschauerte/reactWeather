import React from 'react';
import APIKey from '../../apiKey';
import Axios from 'axios';


const weatherAddress= "http://api.openweathermap.org/data/2.5/forecast?q=";
const imperialTemp = ",us&units=imperial&APPID=" + APIKey;

function readyURL(city){
  var trimedAndSmushedCity = city.split(" ").join("");
  var url = weatherAddress + trimedAndSmushedCity + imperialTemp;
  return url;
}

function getImage(imageID){
  return "http://openweathermap.org/img/w/" + imageID + ".png";
}

const Helpers = {

  requestInformation(city){
    var targetUrl = readyURL(city);
    return Axios.get(targetUrl)
    .then(function(forcastData){
      return forcastData.data.list
    }.bind(this))


  }

}

module.exports = Helpers;
