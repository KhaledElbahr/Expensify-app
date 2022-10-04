import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="btn btn--link" onClick={props.handleRemoveAll}>Remove All</button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__msg">Please add an option to get started!</p>
    )}
    <ul className="">
      {props.options.map((option, i) => (
        <Option
          key={i}
          count={i + 1}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ul>
  </div>
)

export default Options;