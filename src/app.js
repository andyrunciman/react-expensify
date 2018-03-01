import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import './styles/style.scss';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { setTimeout } from 'timers';



const store = configureStore();

store.dispatch(addExpense({description:'water bill',amount:10,createdAt:8}));
store.dispatch(addExpense({description:'gas bill',amount:200,createdAt:1000}));
store.dispatch(addExpense({description:'rent',amount:1,createdAt:3000}));

//setTimeout(()=>{store.dispatch(setTextFilter('gas'));},3000)

console.log(store.getState());
console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters));

const jsx = (
    <Provider store={store}><AppRouter/></Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));