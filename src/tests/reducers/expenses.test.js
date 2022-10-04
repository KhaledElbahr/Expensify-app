import expensesReducer from './../../redux/reducers/expenses';
import MockExpenses from './../fixtures/expenes';

test('should setup default expense object', () => {
    const action = { type: '@@INIT' };
    const state = expensesReducer(undefined, action);
    
    expect(state).toEqual([]);
});

test('should remove expense object by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: MockExpenses[0].id };
    const state = expensesReducer(MockExpenses, action);
    
    expect(state).toEqual([MockExpenses[1], MockExpenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-1' };
    const state = expensesReducer(MockExpenses, action);
    
    expect(state).toEqual(MockExpenses);
});

test('should edit expense object by id', () => {
    const action = { 
        type: 'EDIT_EXPENSE',
        id: MockExpenses[1].id,
        updates: {
            amount: 500
        }
    };
    const state = expensesReducer(MockExpenses, action);
    
    expect(state[1].amount).toBe(500);
});

test('should not edit expenses if id not found', () => {
    const action = { 
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 200
        }
    };
    const state = expensesReducer(MockExpenses, action);
    
    expect(state).toEqual(MockExpenses);
});

test('should add expense object', () => {
    const action = { type: 'ADD_EXPENSE', expense: {
        id: '4',
        description: 'Disk',
        note: 'This is a disk',
        amount: 600,
        createAt: 5000
    } };
    const state = expensesReducer(MockExpenses, action);

    expect(state).toEqual([ 
        ...MockExpenses,
        action.expense
     ])
});