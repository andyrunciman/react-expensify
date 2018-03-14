import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div className="expense-list">
        <div className="expense-list__box">
            <div className ="expense-list__header">
                <h3>Expense</h3>
                <h3>Amount</h3>
            </div>
            {props.expenses.length === 0
                ?<div className="expense-list-item">No expenses</div>
                :props.expenses.map(expense=><ExpenseListItem key={expense.id} {...expense}/>)
            }
        </div>
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
