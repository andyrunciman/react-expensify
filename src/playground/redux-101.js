import {createStore} from 'redux';


//reducers are pure functions 

const countReducer = (state = {count:0},action)=>{
    
    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count + action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number'?action.decrementBy : -1
            return {
                count:state.count - decrementBy
            }
        case 'RESET':
            return {
                count:0
            }
        default:
            return state;
    }
};



const incrementCount = ({incrementBy=1} = {})=>{
    return {
        type:'INCREMENT',
        incrementBy
    }
}


const store = createStore(

const unsub = store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(incrementCount({incrementBy:10}));
store.dispatch(incrementCount());



store.dispatch({
    type:'DECREMENT',
    decrementBy:5
});


store.dispatch({
    type:'RESET'
});

