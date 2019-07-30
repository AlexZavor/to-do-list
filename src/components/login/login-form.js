import React, {Component} from 'react';
import axios from 'axios';

export default class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post("//localhost:2403/users/login",
            {
                username: this.state.username,
                password: this.state.password
            },
            { withCredentials: true }
            ).then(response => {
                console.log(response);
                if (response.status === 200){
                    this.props.handleSuccsessfulLogin(response.data.uid);
                } else {
                    this.setState({
                        errorText: 'Wrong Username or pasword'
                    })
                    this.props.handleUnsuccessfulLogin(response.data.id);
                }
            }).catch(error => {
                this.setState({
                    errorText: "An error Occured"
                });
                this.props.handleUnsuccsessfulLogin();
            });
    }

    render(){
        return(
            <div>

                <h1>LOG IN TO YOUR ACCOUNT</h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='username'
                        name='username' 
                        placeholder= "username"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password' 
                        placeholder= "password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <div>
                        <button className="btn" type='submit'>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}