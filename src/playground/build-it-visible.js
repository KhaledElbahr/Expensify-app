class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'} details</button>
                {this.state.visibility && <p>Hey, There are some details you can now see!</p>}
            </div>            
        )
    }
}

const appRoot = document.getElementById('root');
const root = ReactDOM.createRoot(appRoot);
root.render(<VisibilityToggle />)




// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const appRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(appRoot);

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide' : 'Show'} details</button>
//             {visibility && <p>Hey, There are some details you can now see!</p>}
//         </div>
//     );

//     root.render(jsx);
// }

// render();