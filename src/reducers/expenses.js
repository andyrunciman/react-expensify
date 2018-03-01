const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState ,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'DELETE_EXPENSE':
            return action.id?state.filter(item=>item.id!==action.id):state;
        case 'EDIT_EXPENSE':
            //const expense = {...state.find(id=>id===action.id),...action.expense}
            console.log('editing expense inside reducer',action.updates)
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
}

export default expensesReducer;