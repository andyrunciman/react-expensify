// Instead of the mapDispatchToProps function we can use a shorthand.
// First, we import all the action creators as an object from actions/filters:
// import * as filterActions from "../actions/filters"; 
// and in the connect function we pass that object as the second argument:
// export default connect(mapStateToProps, filterActions)(ExpenseListFilter); 
// And that's it, we now have on our props all the action creators. 
// More on this: Dan Abramov on egghead.io

import React from 'react';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import {connect} from 'react-redux';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused:null
    };
    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (c) => {
        this.setState(()=>({calendarFocused:c}));
    }
    render(){
        return (
            <div className="expense-list-filter">
                <div className ="expense-list-filter__box">
                  
                        <div className = 'expense-list-filter__item'>
                            <input className="input-text" type='text' placeholder = "Search expenses" value={this.props.filters.text} onChange={(event)=>{
                                this.props.setTextFilter(event.target.value);
                            }}/>
                        </div>  
                  
                  
                        <div className = 'expense-list-filter__item'>
                            <select  className="input-combo" value={this.props.filters.sortBy} onChange={(event)=>{
                                if(event.target.value==="date"){
                                    this.props.sortByDate();
                                }else{
                                    this.props.sortByAmount();
                                }
                            }}>
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                            </select>
                            </div>  
                    
                  
                        <div className = 'expense-list-filter__item'>
                            <DateRangePicker
                                startDate = {this.props.filters.startDate}
                                startDateId= {"start1"}
                                endDate = {this.props.filters.endDate}
                                endDateId =  {"end1"}
                                onDatesChange = {this.onDatesChange}
                                focusedInput = {this.state.calendarFocused}
                                onFocusChange = {this.onFocusChange}
                                numberOfMonths = {1}
                                showClearDates = {true} //shows the clear button
                                isOutsideRange = {()=>false}    
                            />
                        </div>  
                    
            </div>
        </div>
        )
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        setStartDate:(startDate) => dispatch(setStartDate(startDate)),
        setEndDate:(endDate) => dispatch(setEndDate(endDate)),
        setTextFilter:(filter) => dispatch(setTextFilter(filter)),
        sortByDate:() => dispatch(sortByDate()),
        sortByAmount:() => dispatch(sortByAmount()),
    }
}
const mapStateToProps = (state)=>{
    return{
        filters:state.filters
    }
}
export default connect(mapStateToProps,matchDispatchToProps )(ExpenseListFilters);