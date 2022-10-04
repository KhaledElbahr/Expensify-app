import { addExpense, editExpense, removeExpense } from './../../redux/actions/expenses';

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
    const expenseData = { description: 'Rent', amount: 100, createAt: 1000, note: 'This is last month' };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setupd add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createAt: 0
        }
    })
});