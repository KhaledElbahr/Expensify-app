import { createStore } from 'redux';

const initialState = {
    count: 0
}

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({ reset = 0 } = {}) => ({
    type: 'RESET',
    reset
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducer
// 1. Reducers are pure functions ==> means it depends only on its inputs
// 2. Never change state or action

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            console.warn('Count Incremented');
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
            console.warn('Count Decremented');
            return {
                count: state.count - action.decrementBy
            }
        case 'SET': 
            console.warn(`Count seted to ${action.count}`);
            return {
                count: action.count
            }
        case 'RESET':
            console.warn('Count Reseted');
            return {
                count: action.reset
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

console.log('Store', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Store', store.getState());
})

// Actions --> An Object that gets sent to the store

console.log(store.dispatch(incrementCount({ incrementBy: 8 })));

console.log(store.dispatch(decrementCount({ decrementBy: 2 })));

console.log(store.dispatch(resetCount()));

console.log(store.dispatch(setCount({ count: 500 })));

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 7
// })

// unsubscribe

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 2
// })

// store.dispatch({
//     type: 'RESET'
// })
