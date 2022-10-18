import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AddExpensePage } from './../../../Expensify/AddExpensePage';
import expenses from './../../fixtures/expenes';

let addExpenseData, navigate, wrapper;

beforeEach(() => {
    addExpenseData = jest.fn();
    navigate = jest.fn();
    wrapper = shallow(<AddExpensePage addExpenseData={addExpenseData} navigate={navigate} />);
});

test('should render AddExpensePage correctly', () => {
   expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(navigate).toHaveBeenLastCalledWith('/dashboard');
    expect(addExpenseData).toHaveBeenLastCalledWith(expenses[1]);
});