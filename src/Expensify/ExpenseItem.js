import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from './../redux/actions/expenses';
import { useNavigate } from 'react-router-dom';

export const ExpenseItem = ({
    id, 
    note, 
    description, 
    amount, 
    createAt,
    dispatch
}) => {
    // navigate = useNavigate();

    return (
        <>
        <li>🗒️ {note}</li>
        <li>🔑 {description}</li>
        <li>📏 {amount}</li>
        <li>⏱️ {createAt}</li>
        <button 
        onClick={(e) => {
            // navigate(`/edit-expense/${id}`);
        }}>Edit</button>
        <button 
        onClick={(e) => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </>
    )
}    

export default connect()(ExpenseItem);