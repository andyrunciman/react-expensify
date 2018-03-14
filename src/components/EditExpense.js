import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startRemoveExpense,startEditExpense} from '../actions/expenses';

export class EditExpense extends React.Component{
    
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    }
    onDelete = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }
    render(){
        return(
            <div className='expense-form'>
                <div className='expense-form__box'>
                    <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense}/>
                    <button className="btn btn--primary" onClick={this.onDelete}>Remove</button>
                </div>
            </div>
            
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
        removeExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

const mapStateToProps = (state,props) => {
    return {
        expense:state.expenses.find((expense)=>expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpense);