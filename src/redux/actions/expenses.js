import { v4 as uuid } from 'uuid';
import db from './../../firebase/firebase';
import { get, push, ref, remove } from "firebase/database";
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

export const removeExpenseData = ({ id } = {}) => {
  return (dispatch) => {
    return remove(ref(db, `expenses/${id}`))
    .then((snapshot) => {
      dispatch(removeExpense({ id }))
      console.log(`${id} expense is deleted successfully`)
    })
    .catch((e) => console.log('This failed', e))
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// Set Expense Data
export const setExpensesData = () => {
  return (dispatch) => {

    return get((ref(db, 'expenses/')))
    .then((snapshot) => {
      if(snapshot.exists()) {
        const expenses = [];
        
        snapshot.forEach(child => {
          expenses.push({
            id: child.key,
            ...child.val()
          })
        })
        dispatch(setExpenses(expenses))
      } else {
        console.log('No data available')
      }
    })
    .catch((e) => console.log('This failed', e))
  }
}
