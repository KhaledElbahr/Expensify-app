import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectedExpenses from '../redux/selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        {props.expenses && props.expenses.length !== 0 ? 
        (<>
            {props.expenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} /> 
            ))}
        </>) : (<p>There is no Expenses!!</p>)
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);