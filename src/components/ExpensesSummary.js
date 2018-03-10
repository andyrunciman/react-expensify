import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({numberOfExpenses,expensesTotal}) => {
    const expenseText = numberOfExpenses>1?'expenses':'expense';
    const formattedAmount = numeral(expensesTotal/100).format('$0,0.00');
    return (
            <div>
                <p>Viewing {numberOfExpenses} {expenseText} totalling {formattedAmount}</p>
                <Link to="/create">Add Expense</Link>
            </div>
        );
}

const mapStateAsProps = (state) => {
    const filteredExpenses = getVisibleExpenses(state.expenses,state.filters);
    return {
        expensesTotal:getExpensesTotal(filteredExpenses),
        numberOfExpenses:filteredExpenses.length
    }
}
export default connect(mapStateAsProps)(ExpensesSummary);
