import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


export const Header = ({logout}) => (
    <header className="header">
        <div className="header__box">
            <NavLink to="/dashboard" className="header__heading" exact>Expensify</NavLink>
            <button className = "btn btn--link" onClick={logout}>Logout</button>
        </div>
        
    </header>
)
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
