import React from 'react'

const AddOption = props => {
  const handleAddOption = e => {
    e.preventDefault();
    let option = e.target.elements.option.value.trim().toUpperCase()
    const error = props.handleAddOption(option)

    error ? alert(error) : e.target.reset()
  }

  return (
    <div className="add-option">
      <form
      onSubmit={handleAddOption}>
        <input className="add-option__input" type='text' name='option' placeholder="What do you work?" />
        <button className="btn">Add Option</button>
      </form>
    </div>
  )
}

export default AddOption
