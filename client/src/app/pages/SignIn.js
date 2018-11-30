import React, {Component} from 'react';

class SignIn extends Component {
    render() {
        return (
            <div>
                <h3>Sign In</h3>

                <div>
                    <form action="#" method="post">
                        <div>
                            <label for="email">Email: </label>
                            <input type="email" name="email" placeholder="Enter your email"></input>
                        </div>
                        <div>
                            <label for="password">Password: </label>
                            <input type="password" name="password" placeholder="Enter your password"></input>
                        </div>
                            <button type="submit">Sign In</button>
                    </form>
                </div>

                <div>
                    <p>Not registered? <a href="#">Sign up</a> now to start building your meal prep checklist right away!</p>
                </div>
            </div>
        )
    }
}

export default SignIn;