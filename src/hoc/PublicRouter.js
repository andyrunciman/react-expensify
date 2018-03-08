import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';

export const PublicRouter = ({authenticated,component:Component, ...rest}) => {
    return <Route {...rest} render = {
        props => !authenticated?<Component {...props}/>:<Redirect to="/dashboard"/>
    }/>
}

const mapStateToProps = (state) => ({
    authenticated:!!state.auth.uid
})

export default connect(mapStateToProps)(PublicRouter)
