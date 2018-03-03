const getExpensesTotal = (filteredExpenses) => {
    return filteredExpenses.reduce((total,expense)=>{
        console.log(total);
        console.log(expense);
        return total + expense.amount;
    },0);
}
export default getExpensesTotal;