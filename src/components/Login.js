import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const Login = ({login}) => (
    <div>
        <h1>Login</h1>
        <button onClick={login}>Login!</button>
    </div> 
)

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(Login);
