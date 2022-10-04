// Stateless Functional Component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      let json = localStorage.getItem('options');
      let options = JSON.parse(json);
      if(options) {
        this.setState(() => ({ options }))
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      let json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleRemoveAll () {
    this.setState(() => ({
      options: []
    }))
  }

  handleDeleteOption(optionToDelete) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToDelete !== option)
    }))
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
      this.setState((prevState) => ({
          options: prevState.options.concat([option])
        })
      )
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
        handleDeleteOption={this.handleDeleteOption}
        handleRemoveAll={this.handleRemoveAll} />
        <AddOption 
        handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>Indecision</h1>
      <h2>Put your life in the hands of a computer</h2>
      <p>{props.title}</p>
      {props.subTitle && <p>{props.subTitle}</p>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Default Title',
  subTitle: 'Sub Titile'
}

const Action = (props) => {
  return (
    <div>
      <button 
      onClick={props.handlePickOption} 
      disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <ul>
        {props.options.map((option, i) => (
          <Option key={i} option={option} handleDeleteOption={props.handleDeleteOption} />
        ))}
      </ul>
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <li>{props.option}</li>
      <button onClick={(e) => props.handleDeleteOption(props.option)}>X</button>
    </div>
  );
}

const AddOption = (props) => {
  const handleAddOption = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value.trim().toUpperCase();
    const error = props.handleAddOption(option);
    
    error ? alert(error) : e.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleAddOption}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  )
}

const appRoot = document.getElementById('root')
const root = ReactDOM.createRoot(appRoot)
root.render(<IndecisionApp />)
