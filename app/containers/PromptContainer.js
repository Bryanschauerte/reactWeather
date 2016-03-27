import React from 'react';
import Prompt from '../components/Prompt';


const PromptContainer = React.createClass({

  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return{
      targetCity: ""
    }
  },
  handleUpdateTargetCity(e){
    this.setState({
      targetCity: e.target.value
    })
  },
  handleSubmitTargetCity(e){
    e.preventDefault();
    var targetCity= this.state.targetCity.trim();

    this.setState({
      targetCity:"City"
    })
    this.context.router.push({
      pathname:'/getWeather',
      query:{
        city: targetCity
      }
    })
  },

  render(){

    return(

      <Prompt
        header="Enter the City"
        onUpdateTargetCity={this.handleUpdateTargetCity}
        onSubmitTargetCity={this.handleSubmitTargetCity}
        targetCity={this.state.targetCity}
        />
    );
  }

})

module.exports = PromptContainer;
