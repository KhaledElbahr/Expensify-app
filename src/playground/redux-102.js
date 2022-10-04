import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

// actions
const addExpense = ({ 
        description = '', 
        note = '', 
        amount = 0, 
        createAt = 0} = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByFilter = (sortBy = 'date') => ({
    type: 'SORTBY_FILTER',
    sortBy
})

const setStartDateFilter = (startDate = undefined) => ({ 
    type: 'SET_START_DATE_FILTER',
    startDate    
})

const setEndDateFilter = (endDate = undefined) => ({ 
    type: 'SET_END_DATE_FILTER',
    endDate
})

// Expenses Reducer
const expensesState = [];

const expensesReducer = (state = expensesState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [ ...state, action.expense ];
        case 'EDIT_EXPENSE':
            return state.map(expense => expense.id === action.id ? {...expense, ...action.updates} : expense)
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id )
        default:
            return state; 
    }
};

// Filters Reducer
const filterState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined
}

const filterReducer = (state = filterState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORTBY_FILTER':
            return { ...state, sortBy: action.sortBy }
        case 'SORTBY_DATE_FILTER':
            return { ...state, sortBy: action.date }
        case 'SET_START_DATE_FILTER':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE_FILTER':
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }
}

// Get Visibile Expenses
const getVisibleExpenses = (expenses, {
    text,
    sortBy,
    startDate,
    endDate
}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // console.log(store.getState());
    console.log(visibleExpenses);
});

// Expenses actions

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200, createAt: -1000 }));

// store.dispatch(removeExpense({id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500, updated: true }))

// Filter actions

// store.dispatch(setTextFilter('coffee'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByFilter('amount'))
// store.dispatch(sortByFilter())

// store.dispatch(setStartDateFilter(125))
// store.dispatch(setStartDateFilter())
// store.dispatch(setEndDateFilter(1250))


const demoState = {
    expenses: [{
        id: 'admin1',
        description: 'Rent Me',
        note: 'This was the final payment for this year',
        amount: 25468,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};



