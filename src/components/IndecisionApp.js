import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {  
  state = {
    options: [],
    selectedOption: undefined,
    toggleModal: false
  }

  componentDidMount = () => {
    try {
      let json = localStorage.getItem('options')
      let options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (err) {
      console.log(err)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      let json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleRemoveAll = () => {
    this.setState(() => ({
      options: []
    }))
  }

  handleDeleteOption = (optionToDelete) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToDelete !== option)
    }))
  }

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState((prevState) => ({
        selectedOption: option,
        toggleModal: !prevState.toggleModal  
    }))
  }

  clearSelectedOption = () => {
    this.setState((prevState) => ({ 
        selectedOption: undefined,
        toggleModal: !prevState.toggleModal
      }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter Vaild value to add option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }))
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOption={this.handleDeleteOption}
            handleRemoveAll={this.handleRemoveAll}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal 
        clearSelectedOption={this.clearSelectedOption}
        toggleModal={this.state.toggleModal}
        selectedOption={this.state.selectedOption} />
        </div>
      </div>
    )
  }
}

export default IndecisionApp
