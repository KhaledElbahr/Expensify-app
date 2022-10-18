import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenseData } from './../redux/actions/expenses';
import ExpenseForm from './ExpenseForm';
import { useNavigate } from "react-router-dom";

export class AddExpensePage extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (expense) => {
        this.props.addExpenseData(expense);
        this.props.navigate('/dashboard');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h2 className="page-header__title">Add Expense</h2>
                    </div>
                </div>
                <div className="container">
                    <ExpenseForm onSubmit={this.onSubmit} />
                </div>
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

const mapDispatchToProps = (dispatch) => {
    const navigate = useNavigate();
    
    return {
        addExpenseData: (expense) => dispatch(addExpenseData(expense)),
        navigate: (toPath) => navigate(toPath)
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);