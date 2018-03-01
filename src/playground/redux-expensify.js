import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '',amount = 0,createdAt = 0} = {})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id = null}={})=>({
    type:'DELETE_EXPENSE',
    id
});

const editExpense = (id,expense={}) => ({
    type:'EDIT_EXPENSE',
    id,
    expense,
});


//Expenses Reducer



//Filter Reducer

const filtersReducerDefaultState = {
    text:'',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined
}




const filtersReducer = (state = filtersReducerDefaultState ,action) => {
    switch(action.type){
        case 'SET_FILTER':
            return {
                ...state,
                text:action.filterText
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.date
            }
        default:
            return state;
    }
}

//get visible expenses

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=>{
        const filterText = expense.description.toLowerCase().includes(text.toLowerCase());
        const filterStart = typeof startDate !== 'number' || expense.createdAt >=startDate;
        const filterEnd   = typeof endDate !== 'number' || expense.createdAt <= endDate;
        return filterText && filterStart && filterEnd;
    }).sort((expense1,expense2)=>{
        console.log(sortBy)
        switch(sortBy){
            case 'description':
                return expense1.description > expense2.description?1:-1;
            case 'date':
                return expense1.createdAt > expense2.createdAt?1:-1;
            case 'amount':
                return expense1.amount > expense2.amount?1:-1;
            default:
                return 1;
        }
    });
}

//store creation

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({description:'rent',amount:12000}));
const expense2 = store.dispatch(addExpense({description:'car',amount:67222}));
const expense3 = store.dispatch(addExpense({description:'gas',amount:67}));

// store.dispatch(removeExpense({id:expense1.expense.id}));
// store.dispatch(editExpense(expense2.expense.id,{amount:5}));
store.dispatch(setTextFilter('ren'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(123));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(200));
//store.dispatch(setEndDate());

const demoState = {
    expenses:[{
        id:'1234',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createdAt:0,
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined,
    }
}


