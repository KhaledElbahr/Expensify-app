export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

export const sortByAmountFilter = (sortBy = 'amount') => ({
  type: 'SORTBY_AMOUNT_FILTER',
  sortBy
})

export const sortByDateFilter = (sortBy = 'date') => ({
  type: 'SORTBY_DATE_FILTER',
  sortBy
})

export const setStartDateFilter = (startDate = undefined) => ({
  type: 'SET_START_DATE_FILTER',
  startDate
})

export const setEndDateFilter = (endDate = undefined) => ({
  type: 'SET_END_DATE_FILTER',
  endDate
})
