import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EditExpensePage } from './../../../Expensify/EditExpensepage';
import expenses from './../../fixtures/expenes';

let editExpense, removeExpense, navigate, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    navigate = jest.fn();
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense} 
        removeExpense={removeExpense}
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

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(navigate).toHaveBeenLastCalledWith('/dashboard');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    });
});