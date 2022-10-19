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
        case 'SET_EXPENSES':
            return action.expenses
        default:
            return state; 
    }
};

export default expensesReducer; 