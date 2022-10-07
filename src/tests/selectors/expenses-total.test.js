import selectExpensesTotal from '../../redux/selectors/expenses-total';
import expenses from '../fixtures/expenes';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0); 
});

test('should add up a single expense correctly', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(200);
});

test('should add up multiple expenses correctly', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(1350);
});