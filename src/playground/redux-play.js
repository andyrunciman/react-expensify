import {createStore} from 'redux';


//reducer
const reducer = (state = {count:0},action) => {
    switch(action.type){
        case 'ADD':
            console.log('add called');
            return {
                count:state.count + action.value
            }
        default:
            return state;
        
    }
}

//action function
const add = (value = 1) => {
    return {
        type:'ADD',
        value
    }
}

const store = createStore(reducer);

//METHOD 1
// let action = add(2); //not we have called the function and are storing 
// //the object in the action - NOT THE FUNCTION
// console.log('dispatching action',action);
// store.dispatch(action);
// console.log('next state',store.getState());

function patchStoreToAddLogging(store) {
    let next = store.dispatch;
    store.dispatch = function dispatchAndLog(action) {
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  }
   
  function patchStoreToAddCrashReporting(store) {
    let next = store.dispatch;
    store.dispatch = function dispatchAndReportErrors(action) {
      try {
        console.log('logging error if necessary');
        return next(action);
      } catch (err) {
        console.error('Caught an exception!', err);
        throw err;
      }
    }
  }

  patchStoreToAddLogging(store);
  patchStoreToAddCrashReporting(store);

  store.dispatch(add(1));