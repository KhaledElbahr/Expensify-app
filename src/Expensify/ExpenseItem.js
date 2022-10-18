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
    <Link className="list-item" to={`/edit-expense/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <small className="list-item__sub-title">{moment(createAt).format('D MMM YYYY')}</small>
        </div>
        <div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3> 
        </div>
    </Link>
)

export default (ExpenseItem);