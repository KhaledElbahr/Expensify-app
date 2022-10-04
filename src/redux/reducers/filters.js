import moment from 'moment';

// Filters Reducer
const filterState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filterReducer = (state = filterState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORTBY_AMOUNT_FILTER':
            return { ...state, sortBy: action.sortBy }
        case 'SORTBY_DATE_FILTER':
            return { ...state, sortBy: action.sortBy }
        case 'SET_START_DATE_FILTER':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE_FILTER':
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }
}

export default filterReducer;