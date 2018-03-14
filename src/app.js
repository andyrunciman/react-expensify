import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch, Link, NavLink} from 'react-router-dom';
import AppRouter,{history} from './routers/AppRouter';
import './styles/style.scss';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { setTimeout } from 'timers';
import moment from 'moment';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'
//import './playground/promises';


const store = configureStore();

//setTimeout(()=>{store.dispatch(setTextFilter('gas'));},3000)

const jsx = (
    <Provider store={store}><AppRouter/></Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage/>,document.getElementById('app'));


//This always fires on refresh so is OK to use at startup.
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                 history.push('/dashboard');
            }
        });
        
    }else{
        //setTimeout(()=>{renderApp(),history.push('/')},3000);
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
