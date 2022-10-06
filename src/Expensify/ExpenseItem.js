import React from 'react';
import { removeExpense } from './../redux/actions/expenses';
import { Link } from 'react-router-dom';
import moment from "moment";
import numeral from "numeral";

export const ExpenseItem = ({
    id, 
    note, 
    description, 
    amount, 
    createAt,
    dispatch
}) => (
    <div>
        <h3>🗒️ {note}</h3>
        <p>🔑 {description}</p>
        <small>📏 {numeral(amount).format('$0,0.00')}</small>
        <small>⏱️ {moment(createAt).format('D MMM YYYY')}</small>
        <Link to={`/edit-expense/${id}`}>Edit</Link>
        <button
        onClick={(e) => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default (ExpenseItem);