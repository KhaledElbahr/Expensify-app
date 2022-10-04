import moment from 'moment';
import filterReducer from './../../redux/reducers/filters';

const filterState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

// TODO: test Filter Reducer
test('should setup default filter values', () => {
    const action = { type: '@@INIT' };
    const state = filterReducer(undefined, action);

    expect(state).toEqual(filterState);
});

test('should setup default filter values', () => {
    const action = { type: '@@INIT' };
    const state = filterReducer(undefined, action);

    expect(state).toEqual(filterState);
});

test('should setup sortBy to amount', () => {
    const action = { type: 'SORTBY_AMOUNT_FILTER', sortBy: 'amount' };
    const state = filterReducer(undefined, action);

    expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
    const action = { type: 'SORTBY_DATE_FILTER', sortBy: 'date' };
    const state = filterReducer(undefined, action);

    expect(state.sortBy).toBe('date');
});

test('should set filter by text', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'rent' };
    const state = filterReducer(undefined, action);

    expect(state.text).toBe('rent');
});

test('should set start date filter', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE_FILTER', startDate };
    const state = filterReducer(undefined, action);

    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE_FILTER', endDate };
    const state = filterReducer(undefined, action);

    expect(state.endDate).toBe(endDate);
});