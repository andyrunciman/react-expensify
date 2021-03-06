import {startAddExpense,addExpense,removeExpense,editExpense,setExpenses,startSetExpenses,startRemoveExpense,startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'thisismytestid';
const defaultAuthState = {auth:{uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id] = {description,note,amount,createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>{
        done();
    });
});

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

test('should add expense to database and store',(done)=>{
    const store = createMockStore(defaultAuthState);
    const expenseData  = {
        description:'Mouse',
        amount:3000,
        note:'This one is better',
        createdAt:1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
       
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done(); //allows for async code
    });
});

test('should add expense with default to database and store',(done)=>{
    const expenseData = {
        description:'', 
        note:'',
        amount:0,
        createdAt:0
    };
    const store = createMockStore(defaultAuthState);
    store.dispatch(startAddExpense()).then(()=>{
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData 
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
       
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData );
        done(); //allows for async code
    });
});


test('should setup action expense object with provided values',()=>{
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
});
// test('should setup the add expense object with default values',()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             id:expect.any(String),
//             description:'',
//             note:'',
//             createdAt:0,
//             amount:0,
//         }
//     })
// });

test('should setup set expense action with data',()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
});

test('should set expenses',()=>{
    const store = createMockStore({});
    store.dispatch(setExpenses(expenses));
    const action = store.getActions()[0];
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })

});

test('should fetch the data from firebase',(done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    })
});

test('should remove an item with a given id',(done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense(id)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'DELETE_EXPENSE',
            id
        });

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })
});

test('should edit an item with a given id',(done) => {
    const store = createMockStore(defaultAuthState);
    const expense = expenses[1];
    const id = expense.id;
    const updates = {amount:10};
    store.dispatch(startEditExpense(expense.id,updates)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toEqual(updates.amount);
        done();
    });
});
