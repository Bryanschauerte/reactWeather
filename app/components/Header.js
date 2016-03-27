import React from 'react';
import PromptContainer from "../containers/PromptContainer"

var styles = {
  header:{
    backgroundColor:"#1ba0d7",
    border: "1px solid #282c34",
    color: "#282c34"}
}

const Header = React.createClass({


  render(){

    return(
    <div>
      <div style={styles.header} className="">
        <h1 className ="text-center">
          Find Weather in Your City
        </h1>
      </div>

      <div>
      {this.props.children}
      </div>

    </div>
    );
  }
})
module.exports = Header;
