import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            pass: ''
        };

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUserNameChange(str) {this.setState({username: str})}

    handlePassChange(str) {this.setState({pass: str})}

    handleLogin() {alert(`Username: ${this.state.username}  Password: ${this.state.pass}`)}

    render() {
        return(
            <div >
                <input type='text' onChange={e=>this.handleUserNameChange(e.target.value)}></input>
                <input type='text' onChange={e=>this.handlePassChange(e.target.value)}></input>
                <button onClick={this.handleLogin}></button>
            </div>
        );
    }
}

export default Login;