import React from 'react';

const Option = props => (
  <div className="option">
    <p className="option__text">{props.count}. {props.option}</p>
    <button 
    className="btn btn--link" 
    onClick={e => props.handleDeleteOption(props.option)}>X</button>
  </div>
)

export default Option;