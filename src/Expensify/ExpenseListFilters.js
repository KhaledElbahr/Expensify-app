import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDateFilter,
  sortByAmountFilter,
  setStartDateFilter,
  setEndDateFilter
} from './../redux/actions/filters';
import { DateRangePicker } from 'react-dates';
import { v4 as uuid } from 'uuid';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDateFilter(startDate);
        this.props.setEndDateFilter(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
      this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
      if (e.target.value === 'date') {
        this.props.sortByDateFilter()
      } else if (e.target.value === 'amount') {
        this.props.sortByAmountFilter()
      }
    }

    render () {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />

        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>

        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        // startDateId={uuid()}
        // endDateId={uuid()}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        />
      </div>
    )
  }
}

// const ExpenseListFilters = props => (
//   <div>
//     {/* {props.filters ? (
//             <>
//                 <p>{props.filters.sortBy}</p>
//                 <p>{props.filters.text}</p>
//                 {props.filters.startDate && <p>{props.filters.startDate}</p>}
//                 {props.filters.endDate && <p>{props.filters.endDate}</p>}
//             </>
//             ) : null
//         } */}
//     <input
//       type='text'
//       value={props.filters.text}
//       onChange={e => {
//         props.dispatch(setTextFilter(e.target.value))
//       }}
//     />

//     <select
//       value={props.filters.sortBy}
//       onChange={e => {
//         if (e.target.value === 'date') {
//           props.dispatch(sortByDateFilter())
//         } else if (e.target.value === 'amount') {
//           props.dispatch(sortByAmountFilter())
//         }
//       }}
//     >
//       <option value='date'>Date</option>
//       <option value='amount'>Amount</option>
//     </select>
//   </div>
// )

const mapStateToProps = state => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDateFilter: () => dispatch(sortByDateFilter()),
  sortByAmountFilter: () => dispatch(sortByAmountFilter()),
  setStartDateFilter: (startDate) => dispatch(setStartDateFilter(startDate)),
  setEndDateFilter: (endDate) => dispatch(setEndDateFilter(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
