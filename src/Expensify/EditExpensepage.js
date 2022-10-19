import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpenseData } from '../redux/actions/expenses';
import { useNavigate } from 'react-router-dom';

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.navigate('/dashboard');
    }

    onRemoveExpense = () => {
        this.props.removeExpenseData({ id: this.props.expense.id });
        this.props.navigate('/dashboard');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h2 className="page-header__title">Edit Expense</h2>
                    </div>
                </div>
                <div className="container">
                    <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemoveExpense}>Remove Expense</button>
                </div>
            </div> 
        )
    }
}

// const EditExpensePage = (props) => (
//     <div>
//         <ExpenseForm 
//         expense={props.expense}
//         onSubmit={(expense) => {
//             props.dispatch(editExpense(props.expense.id, expense));
//             props.history.push('/');
//         }} 
//         />
//         <button onclick={() => (
//             props.dispatch(removeExpense({ id: props.expense.id }));
//             props.history.push('/');
//         )}>Remove</button>
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        expense: state.expenses.find((expense) => expense.id === window.location.href.split('/')[4])
    }
}

const mapDispatchToProps = (dispatch) => {
    const navigate = useNavigate();
    
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpenseData: (id) => dispatch(removeExpenseData(id)),
        navigate: (toPath) => navigate(toPath),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
