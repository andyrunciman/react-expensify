//HOC - a compoent renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent)=> {
    return ({isAdmin,...rest})=> (
        <div>
            {isAdmin?<h1>Warning</h1>:undefined}
            <WrappedComponent {...rest}/>
        </div>
    )  
};

const requireAuthentication = (WrappedComponent) => {
    return ({isAuthenticated,...rest})=>{
        if(isAuthenticated){
            return <WrappedComponent {...rest}/>
        }else{
            return <div><h1>You are not authenticated!</h1></div>
        }
    }
}

const HOCWithParam = (config) => {
    return (Component) => {
       return (props)=> {
            if(config.auth){
                return <div><h1>Config passed</h1><Component {...props}/></div>
            }else{
                return <div><h1>Failure</h1></div>
            }
       } 
    }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
const TestComponent = HOCWithParam({auth:true})(Info);

ReactDOM.render(<TestComponent info="these are the details"/>,document.getElementById('app'));