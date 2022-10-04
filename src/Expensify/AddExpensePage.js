import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './../redux/actions/expenses';
import ExpenseForm from './ExpenseForm';
import { useNavigate } from "react-router-dom";

export class AddExpensePage extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (expense) => {
        this.props.addExpense(expense);
        // this.props.navigate('/');
    }

    render() {
        return (
            <div>
                <h2>Add Expense</h2>
                <ExpenseForm
                onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// const AddExpensePage = (props) => {
//     const navigate = useNavigate();

//     return (
//     <div>
//         <h2>Add Expense</h2>
//         <ExpenseForm
//         onSubmit={(expense) => {
//             // props.dispatch(addExpense(expense));
//             props.onSubmit(expense);
//             navigate("/");
//         }}
//         />
//     </div>
// )}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense)),
    navigate: () => useNavigate()
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);