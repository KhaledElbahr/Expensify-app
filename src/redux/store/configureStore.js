import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';
import authReducer from './../reducers/auth';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}
