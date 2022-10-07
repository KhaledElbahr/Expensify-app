import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectedExpenses from './../redux/selectors/expenses';
import selectExpensesTotal from './../redux/selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const ExpenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal).format('$00.00');

    return (
        <div>
            {expensesCount !== 0 ? (
                <>
                <h3>Expenses Summary</h3>
                <p>Viewing {expensesCount} {ExpenseWord} totalling amount {formattedExpensesTotal}</p>
                </>
            ) : ( <p>Add New Expenses</p> )}
        </div>
    )
}

const mapStateToProps = (state) => {
    const expenses =  selectedExpenses(state.expenses, state.filters);
    return {
        expensesCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);
