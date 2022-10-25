import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import { v4 as uuid } from 'uuid'

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createAt) : moment(),
      calendarfocused: false,
      title: props.expense ? 'Update' : 'Add',
      error: ''
    }
  }

  getValue = e => e.target.value

  onDescriptionChange = e => {
    const description = this.getValue(e)
    this.setState(() => ({ description }))
  }

  onNoteChange = e => {
    const note = this.getValue(e)
    this.setState(() => ({ note }))
  }

  onAmountChange = e => {
    const amount = this.getValue(e)
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = createdAt => this.setState(() => ({ createdAt }))

  onFocusChange = calendarfocused => {
    this.setState(() => ({ calendarfocused }))
  }

  onSubmit = e => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createdAt.valueOf()
      })
    }
  }

  render () {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          type='text'
          className='text-input'
          placeholder='Description'
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type='text'
          className='text-input'
          value={this.state.amount}
          onChange={this.onAmountChange}
          placeholder='Amount'
        />
        <div className='input-control'>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarfocused.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            id={uuid()} // PropTypes.string.isRequired,
            showClearDate={true}
            isOutsideRange={() => false}
          />
        </div>
        <textarea
          value={this.state.note}
          className='textarea'
          onChange={this.onNoteChange}
          placeholder='Add a note for your expense (optional)'
        ></textarea>
        <div className="bototn--group">
          <button className='button'>{this.state.title} Expense</button>
          {
            this.props.expense 
            && 
            <button className="button button--danger" onClick={this.props.onRemove}>Delete Expense</button>
          }
        </div>
      </form>
    )
  }
}
