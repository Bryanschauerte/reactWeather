import React from 'react';

function Prompt(props){
  return(
    <div
      className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h3>{props.header}</h3>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitTargetCity}>
        <div className="form-group">
        <input
          type="text"
          placeholder="City"
          className="form-group"
          value={props.targetCity}
          onChange={props.onUpdateTargetCity}/>
      </div>
      <div className="col-sm-4 form-group col-sm-offset-4">
        <button
          className="btn btn-block btn-success"
          type="submit">
          Search For Weather
        </button>

      </div>
    </form>
      </div>

    </div>
  );
}
Prompt.propTypes = {
  onSubmitTargetCity: React.PropTypes.func.isRequired,
  targetCity: React.PropTypes.string.isRequired,
  onUpdateTargetCity: React.PropTypes.func.isRequired
}

module.exports= Prompt;
