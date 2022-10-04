import selectExpenses from '../../redux/selectors/expenses';
import moment from 'moment';
import MockExpenses from './../fixtures/expenes';

// TODO: test Get Visibile Expenses
test('should filter expenses by text value', () => {
    const filters = {
        text: 't',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(MockExpenses, filters);

    expect(result).toStrictEqual([MockExpenses[1], MockExpenses[0]]);
});

test('should filter expenses by startDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(MockExpenses, filters);
    expect(result).toEqual([MockExpenses[2], MockExpenses[0]]);
});

test('should filter expenses by endDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(3, 'days')
    }

    const result = selectExpenses(MockExpenses, filters);
    expect(result).toEqual([MockExpenses[0], MockExpenses[1]]);
});

test('should sort expenses by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(MockExpenses, filters);
    expect(result).toEqual([MockExpenses[2], MockExpenses[0], MockExpenses[1]]);
});

test('should sort expenses by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(MockExpenses, filters);
    expect(result).toEqual([MockExpenses[2], MockExpenses[1], MockExpenses[0]]);
});