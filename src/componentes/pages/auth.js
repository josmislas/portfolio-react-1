import React, { Component } from 'react';
import Login from "../auth/login";
import loginImg from "../../images/auth/login.jpg";

class Auth extends Component {
    render() {
        return (
            <div className='auth-page-wrapper'>
                <div className='left-column' 
                style={{
                    backgroundImage: `url(${loginImg})`
                }}
                />

                <div className='right-column'>
                    <Login />
                </div>                
            </div>
        );
    }
}

export default Auth;
