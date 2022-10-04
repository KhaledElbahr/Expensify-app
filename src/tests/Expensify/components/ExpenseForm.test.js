import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExpenseForm from './../../../Expensify/ExpenseForm';
import expenses from './../../fixtures/expenes';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpnseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[
        1]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error')).toBe('Please provide description and amount');
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'This is new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change', () => {
    const value = '2000.25';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid data', () => {
    const value = '2000.255';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

// test('should call onSubmit prop for valid for submission', () => {
//     const onSubmitSpy = jest.fn(); 
//     onSubmitSpy('khaled', 'welcome');
//     expect(onSubmitSpy).toHaveBeenCalledWith('khaled', 'welcome');
// });

// test('should call onSubmit prop for valid for submission', () => {
//     const onSubmitSpy = jest.fn(); 
//     const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
//     wrapper.find('form').simulate('submit', { 
//         preventDefault: () => { } 
//     });
//     expect(wrapper.state('error')).toBe('');
//     expect(onSubmitSpy).toHaveBeenLastCalledWith({
//         description: expenses[0].description,
//         amount: expenses[0].amount,
//         note: expenses[0].note,
//         createAt: expenses[0].createAt
//     });
// });

// test('should set new date on date change', () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
// });

// test('should set calendar focus on change', () => {
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')(true);
//     expect(wrapper.state('calendarfocused')).toBe(true);
// });
