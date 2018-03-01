import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type:'DELETE_EXPENSE',
        id:'123abc'
    })
});
test('should setup edit expense action object',()=>{
    const action = editExpense('123abc',{
        description:'testing',
    });
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:'123abc',
        updates:{
            description:'testing'
        }
    });
});
test('should setup action expense object with provided values',()=>{
    const expenseData = {
        description:'Rent',
        amount:109500,
        createdAt:1000,
        note:'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })

});
test('should setup the add expense object with default values',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            createdAt:0,
            amount:0,
        }
    })
});