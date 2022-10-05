import React from 'react';
import ReactDOM from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
import AppRouter from "./routers/AppRouter";
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import getVisibleExpenses from './redux/selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

const appRoot = document.getElementById('root')
const root = ReactDOM.createRoot(appRoot)
// root.render(<IndecisionApp />)
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
