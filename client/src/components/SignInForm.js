import React, {Component} from 'react';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            // how to deal with passwords here?
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({ email: event.target.value});
        console.log(this.state.email)
    }

    handlePassword(event) {
        this.setState({ password: event.target.value})
        console.log(this.state.password)
    }

    handleSubmit(event) {
        // send to this path on Node server --> /api/users/signin
        event.preventDefault();
        alert('A name was submitted: ' + this.state.email + '\n' + 'Password: ' + this.state.password);
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Email: 
                            <input type="email" value={this.state.email} onChange={this.handleEmail}/>
                            </label>
                    </div>
                    <div>
                        <label>
                            Password: 
                            <input type="password" value={this.state.password} onChange={this.handlePassword}/>
                        </label>
                    </div>
                        <input type="submit" value="Sign In"/>
                </form>
            </div>
            
        );
    }
}

export default SignInForm;