import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpensesSummary } from './../../../Expensify/ExpensesSummary';
import expenses from './../../fixtures/expenes';

test('should render ExpensesSummary with 1 expense correctly!', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses correctly!', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={235587558958} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});