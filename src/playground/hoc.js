//  Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

console.log('Higher Order Component❤️‍🔥');


import React from 'react';
import ReactDOM from 'react-dom/client';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info : { props.info }</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const requiredAutheication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth ? (<WrappedComponent {...props} />) : <p>Please Log in to view the Info</p> }
        </div>
    )
}

const AdminIfo = withAdminWarning(Info);
const AuthIfo = requiredAutheication(Info);

const root = document.getElementById('root');
const template = ReactDOM.createRoot(root);
// template.render(<AdminIfo isAdmin={false} info='There are the details' />);

template.render(<AuthIfo isAuth={true} info='There are the details' />);