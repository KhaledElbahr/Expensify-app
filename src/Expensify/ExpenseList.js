import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectedExpenses from '../redux/selectors/expenses';
import { readExpenseData } from '../firebase/firebase';

export const ExpenseList = (props) => (
    <div className="container">
        <div className="list-header">
            <div className="mobile-view">Expenses</div>
            <div className="desktop-view">Expenses</div>
            <div className="desktop-view">Amount</div>
        </div>
        <div className="list-body">
        {props.expenses && props.expenses.length !== 0 ? 
        (<>
            {props.expenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} /> 
            ))}
        </>) : (
        <div className="list-item list-item--message">
            <p >There is no Expenses</p>
        </div>
        )}
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);