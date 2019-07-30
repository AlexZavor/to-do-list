import React, {Component} from 'react';
import LoginForm from '../login/login-form.js';

export default class Login extends Component {
    render(){
        return(
            <div>
                <LoginForm 
                handleSuccsessfulLogin = {this.props.handleSuccsessfulLogin}
                handleUnsuccsessfulLogin = {this.props.handleUnsuccsessfulLogin}
                />
            </div>
        )
    }
}