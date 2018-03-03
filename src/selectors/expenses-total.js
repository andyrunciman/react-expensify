const getExpensesTotal = (filteredExpenses) => {
    return filteredExpenses.reduce((total,expense)=>{
        return total + expense.amount;
    },0);
}
export default getExpensesTotal;