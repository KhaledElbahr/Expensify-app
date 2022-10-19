import React from 'react';
import ReactDOM from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
import AppRouter from "./routers/AppRouter";
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import { setExpensesData } from './redux/actions/expenses';
import getVisibleExpenses from './redux/selectors/expenses';
import Spinner from './Expensify/Spinner';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

const appRoot = document.getElementById('root');
const root = ReactDOM.createRoot(appRoot);

const jsx = (
    // Displays Spinner to the user until render has finished
    // <Spinner />,
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(setExpensesData()).then(() => {
    root.render(jsx)
});

// root.render(<IndecisionApp />)


// firebase.auth().onAuthStateChanged(user => {
//     if(user) {
//         console.log('log in');
//     } else {
//         console.log('log out');
//     }
// });
