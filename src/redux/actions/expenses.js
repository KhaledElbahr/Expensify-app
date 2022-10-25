import { v4 as uuid } from 'uuid';
import db from './../../firebase/firebase';
import { get, push, ref, update, remove } from "firebase/database";
// actions
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

// Add Expense Data
export const addExpenseData = (expenseData = {}) => {
  return (dispatch, getState) => {
    console.log(getState());
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createAt = 0
    } = expenseData;
    const expense = { description, note, amount, createAt };

    return push(ref(db, `users/${uid}/expenses/`), expense)
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

export const editExpenseData = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return update(ref(db, `users/${uid}/expenses/${id}`), updates)
    .then((snapshot) => {
      dispatch(editExpense(id, updates));
      console.log(`${id} expense is updated successfully`);
    })
    .catch((e) => console.log('This failed', e))
  }
}

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const removeExpenseData = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return remove(ref(db, `users/${uid}/expenses/${id}`))
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return get((ref(db, `users/${uid}/expenses/`)))
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
