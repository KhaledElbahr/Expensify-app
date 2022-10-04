import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../redux/actions/expenses';
import { useNavigate } from 'react-router-dom';

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        // this.props.navigate('/');
    }

    onRemoveExpense = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        // this.props.navigate('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit} 
                />
                <button onClick={this.onRemoveExpense}>Remove</button>
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

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id)),
    navigate: useNavigate()
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);