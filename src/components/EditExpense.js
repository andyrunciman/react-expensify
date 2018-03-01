import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {removeExpense,editExpense} from '../actions/expenses';

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
            <div>
                <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense}/>
                <button onClick={this.onDelete}>Remove</button>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id,expense) => dispatch(editExpense(id,expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    }
}

const mapStateToProps = (state,props) => {
    return {
        expense:state.expenses.find((expense)=>expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpense);