import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { addExpense, addExpenseData, editExpense, removeExpense, setExpenses, setExpensesData } from './../../redux/actions/expenses';
import expenses from '../fixtures/expenes';
import db from './../../firebase/firebase';
import { set, get, ref } from "firebase/database";

const mockStore = configureStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createAt }) => {
        expensesData[id] = { description, note, amount, createAt };
    });
    set(ref(db, 'expenses/'), expensesData).then(() => done())
});

// TODO: test removeExpense action
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toStrictEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

// TODO: test editExpense action
test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { amount: 500, updated: true });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { amount: 500, updated: true }
    })
});

// TODO: test addExpense action
test('should setupd add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = mockStore({});
    const expenseData = {
        description: 'React',
        note: 'New React course!',
        amount: 2000,
        createAt: 1663500000 
    }

    store.dispatch(addExpenseData(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return get(ref(db, `expenses/${actions[0].expense.id}`))
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with default values to database and store', (done) => {
    const store = mockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createAt: 0 
    }

    store.dispatch(addExpenseData({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return get(ref(db, `expenses/${actions[0].expense.id}`))
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done) => {
    const store = mockStore({});

    store.dispatch(setExpensesData()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
});