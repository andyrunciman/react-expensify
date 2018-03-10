import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


export const Header = ({logout}) => (
    <header>
        <NavLink to="/dashboard" activeClassName="is-active" exact>Expensify</NavLink>
        <button onClick={logout}>Logout</button>
    </header>
)
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
