import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectedExpenses from './../redux/selectors/expenses';
import selectExpensesTotal from './../redux/selectors/expenses-total';

const AddExpenseLink = () => (
  <Link className="button" to="/add-expense">Add New Expense</Link>
);

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const ExpenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <div className='page-header'>
        <div className='container'>
          {expensesCount !== 0 ? (
            <>
            <h1 className="page-header__title">
              Viewing <span>{expensesCount}</span> {ExpenseWord} totalling amount <span>{formattedExpensesTotal}</span>
            </h1>
            <div className="page-header__actions">
                <AddExpenseLink />
            </div>
            </>
          ) : (
            <AddExpenseLink />
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const expenses = selectedExpenses(state.expenses, state.filters)
  return {
    expensesCount: expenses.length,
    expensesTotal: selectExpensesTotal(expenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
