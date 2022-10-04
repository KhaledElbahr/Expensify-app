import React from 'react'

const Action = props => (
  <div>
    <button className="big-btn" onClick={props.handlePickOption} disabled={!props.hasOptions}>
      What should I do?
    </button>
  </div>
)

export default Action;