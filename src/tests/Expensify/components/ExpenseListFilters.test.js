import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpenseListFilters } from './../../../Expensify/ExpenseListFilters';
import { filters, altFilters } from './../../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDateFilter, sortByAmountFilter, setStartDateFilter, setEndDateFilter, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn(); 
    sortByDateFilter = jest.fn();
    sortByAmountFilter = jest.fn();
    setStartDateFilter = jest.fn();
    setEndDateFilter = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter} 
        sortByDateFilter={sortByDateFilter}
        sortByAmountFilter={sortByAmountFilter}
        setStartDateFilter={setStartDateFilter}
        setEndDateFilter={setEndDateFilter} 
    />);
});

test('should render ExpenseListFilters correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', { 
        target: { value }
    });
    expect(sortByDateFilter).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', { 
        target: { value }
    });
    expect(sortByAmountFilter).toHaveBeenLastCalledWith();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(3, 'years');
    const endDate = moment(0).add(6, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')
    ({
        startDate,
        endDate
    });
    expect(setStartDateFilter).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateFilter).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});