import React from 'react';
import ReactDOM from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import getVisibleExpenses from './redux/selectors/expenses';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// Add Expenses
// store.dispatch(addExpense( 
//     { 
//         description: 'Water Bill',
//         note: 'water bill',
//         amount: 1000,
//         createAt: 2000
//     }
// ));
// store.dispatch(addExpense( 
//     { 
//         description: 'Gas Bill',
//         note: 'Case bill',
//         amount: 100,
//         createAt: 5000
//     }
// ));
// store.dispatch(addExpense( 
//     { 
//         description: 'Rent',
//         note: 'Rent Book',
//         amount: 10000,
//         createAt: 500
//     }
// ));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const appRoot = document.getElementById('root')
const root = ReactDOM.createRoot(appRoot)
// root.render(<IndecisionApp />)
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
