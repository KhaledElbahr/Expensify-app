import moment from 'moment';
import { setTextFilter, sortByAmountFilter, sortByDateFilter, setStartDateFilter, setEndDateFilter } from './../../redux/actions/filters';

// TODO: test setTextFilter action
test('should setup filter object with provided text', () => {
    const action = setTextFilter('rent');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    })
});

test('should setup filter object with default text', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

// TODO: test sort by amount Filter action
test('should setup filter object to sort by amount', () => {
    const action = sortByAmountFilter();

    expect(action).toEqual({
        type: 'SORTBY_AMOUNT_FILTER',
        sortBy: 'amount'
    });
});

// TODO: test sort by date Filter action
test('should setup filter object to sort by date', () => {
    const action = sortByDateFilter();

    expect(action).toEqual({
        type: 'SORTBY_DATE_FILTER',
        sortBy: 'date'
    });
});

// TODO: test setStartDateFilter action
test('should setup filter object with provided start Date', () => {
    const createdAtMoment = moment(0); 
    const action = setStartDateFilter(createdAtMoment);

    expect(action).toEqual({
        type: 'SET_START_DATE_FILTER',
        startDate: createdAtMoment
    });
});

// TODO: test setEndDateFilter action
test('should setup filter object with provided end Date', () => {
    const createdAtMoment = moment(0);
    const action = setEndDateFilter(createdAtMoment);

    expect(action).toEqual({
        type: 'SET_END_DATE_FILTER',
        endDate: createdAtMoment
    });
});
