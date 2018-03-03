import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should calculate the total amount of a given array of expenses',()=>{
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});

test('should return 0 if no expenses',()=>{
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should return 195 for 1 expense',()=>{
    const testTotal = expenses[0].amount;
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(testTotal);
});
