import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
    render() {
        return (
            <div className="Login_div">
                <div className="Signin_div">
                    Sign IN
                </div>
                <div>
                    <button class="loginBtn loginBtn--facebook">
                        Login with Facebook
                    </button>
                </div>
                <div>
                    <button class="loginBtn loginBtn--google">
                        <span className="google_name">Login with Google</span>
                    </button>
                </div>
                <div>
                    <img className="V_logo" alt="" src="https://brandriddle.com/wp-content/uploads/2019/02/Vedantulogo_orange-300x141-1.png" />
                </div>
            </div>
        )
    }
}
