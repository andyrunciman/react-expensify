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
import moment from 'moment';
import './firebase/firebase';
//import './playground/promises';
import './playground/redux-play';


const store = configureStore();

//setTimeout(()=>{store.dispatch(setTextFilter('gas'));},3000)

const jsx = (
    <Provider store={store}><AppRouter/></Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));