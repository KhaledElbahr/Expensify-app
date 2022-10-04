import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpenseItem } from './../../../Expensify/ExpenseItem';
import expenses from './../../fixtures/expenes';

test('should render Expense Item correctly', () => {
    const wrapper = shallow(<ExpenseItem { ...expenses[1] } />);
    expect(toJson(wrapper)).toMatchSnapshot();
});