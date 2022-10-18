import { v4 as uuid } from 'uuid';
import db from './../../firebase/firebase';
import { push, ref } from "firebase/database";
// actions
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

// Add Expense Data
export const addExpenseData = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createAt = 0
    } = expenseData;
    const expense = { description, note, amount, createAt };

    return push(ref(db, 'expenses/'), expense)
    .then(data => {
      dispatch(addExpense({
        id: data.key,
        ...expense       
      }));
    })
    .catch((e) => console.log('This failed', e))
  }
}

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
