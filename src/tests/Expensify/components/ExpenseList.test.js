import React from 'react';
import { ExpenseList } from './../../../Expensify/ExpenseList';
import { shallow } from 'enzyme';
import expenses from './../../fixtures/expenes';
import toJson from 'enzyme-to-json';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});