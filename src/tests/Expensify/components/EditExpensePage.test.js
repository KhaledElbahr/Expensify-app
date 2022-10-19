import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EditExpensePage } from './../../../Expensify/EditExpensepage';
import expenses from './../../fixtures/expenes';

let editExpenseData, removeExpenseData, navigate, wrapper;

beforeEach(() => {
    editExpenseData = jest.fn();
    removeExpenseData = jest.fn();
    navigate = jest.fn();
    wrapper = shallow(<EditExpensePage
        editExpenseData={editExpenseData} 
        removeExpenseData={removeExpenseData}
        navigate={navigate}
        expense={expenses[1]}
        />);
});

test('should render EditExpensePage correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(navigate).toHaveBeenLastCalledWith('/dashboard');
    expect(editExpenseData).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(navigate).toHaveBeenLastCalledWith('/dashboard');
    expect(removeExpenseData).toHaveBeenLastCalledWith({id: expenses[1].id});
});