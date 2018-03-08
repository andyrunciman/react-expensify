import React from 'react';
import {Router, Route,Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/Login';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <Header></Header>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/dashboard" component={ExpenseDashboard} exact/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit/:id" component={EditExpense}/>
                <Route path="/help" component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>        
    </Router>
)

export default AppRouter;