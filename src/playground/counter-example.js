class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count : 0
    }
  }

  // UNSAFE_componentWillMount () {
  //   // console.log('Initilize Component');
  //   localStorage.getItem('count');
  // }

  componentDidMount () {
    // console.log('Component Rendered');
    let stringCount = localStorage.getItem('count');
    let count = parseInt(stringCount);
    
    if(!isNaN(count)) {
      this.setState(() => ({count}))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count ) {
      console.log('Component state / props had changed');
      let json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }

  handleAddOne() {
    // this.setState(() => this.state.count++);
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  handleMinusOne() {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }

  handleReset() {
    this.setState(() => ({ count: 0 }))
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   count : 0
// }

const appRoot = document.getElementById('root');
const root = ReactDOM.createRoot(appRoot);
root.render(<Counter />);



// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp()
// }

// const minusOne = () => {
//   count--;
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0;
//   renderCounterApp()
// }

// const appRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(appRoot);

// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   root.render(template);
// }

// renderCounterApp()