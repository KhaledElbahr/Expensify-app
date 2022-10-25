import React from 'react';
import ReactDOM from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
import AppRouter, { history } from "./routers/AppRouter";
import { Provider } from 'react-redux';
import { getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import configureStore from './redux/store/configureStore';
import { createBrowserHistory } from "history";
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import { setExpensesData } from './redux/actions/expenses';
import { login, logout } from './redux/actions/auth';
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

let hasRender = false;
const renderApp = () => {
    if(!hasRender) {
        root.render(jsx);
        hasRender = true;
    }
};

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        store.dispatch(login(user.uid));
        store.dispatch(setExpensesData()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
