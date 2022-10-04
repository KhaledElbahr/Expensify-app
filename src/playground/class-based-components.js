class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
      this.handlePickOption = this.handlePickOption.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options: ['REACT', 'JSX']
      }
    }
  
    handleRemove() {
  
    }
  
    handleRemoveAll () {
      this.setState(() => {
        return {
          options: []
        }
      })
    }
  
    handlePickOption() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    handleAddOption(option) {
      if(!option) {
        return 'Enter Vaild value to add option';
      } else if(this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      } else {
        this.setState((prevState) => {
          return {
            options: prevState.options.concat([option])
          }
        })
      }
    }
      
    render() {
      return (
        <div>
          <Header />
          <Action 
          hasOptions={this.state.options.length > 0} 
          handlePickOption={this.handlePickOption} />
          <br />
          <Options 
          options={this.state.options} 
          handleRemoveAll={this.handleRemoveAll} />
          <AddOption 
          handleAddOption={this.handleAddOption} />
        </div>
      )
    }
  }


  class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handlePickOption} disabled={!this.props.hasOptions}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    // console.log(e.target);
    // const filtered = this.props.options.filter((option, i) => this.props.options[i] !== option)
    // console.log(filtered);
  }

  render () {
    return (
      <div>
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
      <ul>
        {this.props.options.map((option, i) => (
          <Option key={i} option={option} handleRemove={this.handleRemove} />
        ))}
      </ul>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.option}</li>
        <button onClick={this.props.handleRemove}>X</button>
      </div>
  )}
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined }
  }

  handleAddOption (e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim().toUpperCase();
    const error = this.props.handleAddOption(option);
    
    if(error) {
      alert(error);
      this.setState(() => {
        return { error }
      })  
    }
    e.target.reset()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

const appRoot = document.getElementById('root')
const root = ReactDOM.createRoot(appRoot)
root.render(<IndecisionApp />)
