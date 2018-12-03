import React, {Component} from 'react';
import SignInForm from '../../components/SignInForm';

class SignIn extends Component {
    submit() {
        return alert('Something worked')
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <SignInForm />
                <div>
                    <p>Not registered? <a href="#">Sign up</a> now to start building your meal prep checklist right away!</p>
                </div>
            </div>
        )
    }
}

export default SignIn;