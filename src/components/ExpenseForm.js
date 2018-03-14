import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100 ).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt):moment(),
            calendarFocused:false,
            error:''  
        }
    }
    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(()=>({note}));
    }
    onDescriptionChange = (event) =>{
        const description = event.target.value;
        this.setState(()=>({description}));
    }
    onAmountChange = (event) =>{
        const amount = event.target.value;        
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=>({createdAt}));
        } 
    }
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused:focused}));
    }
    onSubmit = (event) => {
        event.preventDefault();
        if(!this.state.description || !this.state.amount){
            const error = "Please complete the description and amount";
            this.setState(()=>({error}))
        }else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100, //as in pense
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    }
    render(){
        return (
            <div>
                <form className="expense-form__form" onSubmit={this.onSubmit}>
                    {this.state.error?<p>{this.state.error}</p>:undefined}
                    <div className="input-item">
                        <input 
                            type="text" 
                            className="input-text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}/>
                    </div>
                    <div className="input-item">
                        <input
                            type="text"
                            placeholder="Amount"
                            className="input-text"
                            value={this.state.amount}
                            onChange={this.onAmountChange}/>
                    </div>
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange ={this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=> false}
                    />
                    <div className="input-item">
                        <textarea
                            placeholder="Add a note for your expense"
                            className="input-text"
                            value={this.state.note}
                            onChange={this.onNoteChange}>
                        </textarea>
                    </div>
                    <button className="btn btn--primary">Add Expense</button>
                </form>
            </div>
        )
    }
}