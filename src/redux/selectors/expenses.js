import moment from 'moment';

// Get Visibile Expenses
export default (expenses, {
    text,
    sortBy,
    startDate,
    endDate
}) => {
    return expenses.filter((expense) => {
        // const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        // const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const createdAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
