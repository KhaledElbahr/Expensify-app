import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarfocused: false,
        error: ''
    };

    getValue = (e) =>  e.target.value;

    onDescriptionChange = (e) => {
        const description = this.getValue(e);
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = this.getValue(e);
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = this.getValue(e);
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => this.setState(() => ({ createdAt }));

    onFocusChange = (calendarfocused) => this.setState(() => ({ calendarfocused }));

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({ 
                description: this.state.description, 
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createdAt.valueOf() });
        }
    }

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange} />
                    <input
                    type="text"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    placeholder="Amount" />

                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={ this.onDateChange}
                    focused={this.state.calendarfocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
                    
                    <textarea 
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    placeholder="Add a note for your expense (optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
