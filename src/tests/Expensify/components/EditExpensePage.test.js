import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EditExpensePage } from './../../../Expensify/EditExpensepage';
import expenses from './../../fixtures/expenes';

let editExpense, removeExpenseData, navigate, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpenseData = jest.fn();
    navigate = jest.fn();
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense} 
        removeExpenseData={removeExpenseData}
        navigate={navigate}
        expense={expenses[1]}
        />);
});

test('should render EditExpensePage correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(navigate).toHaveBeenLastCalledWith('/dashboard');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle remove Expense', () => {
    wrapper.find('button').simulate('click');
    expect(navigate).toHaveBeenLastCalledWith('/dashboard');
    expect(removeExpenseData).toHaveBeenLastCalledWith({
        id: expenses[1].id
    });
});