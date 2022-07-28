import { useState } from "react";
import "./login.css"

function Login() {
    const [ showInput, setShowInput ] = useState(false);

    return (
        <div className="container-fluid" id="login">
            <div className="login-container">
                <div className="login-content">
                    <h1>Welcome back!</h1>
                    <p>Throw in your credentials and let's get cookin'.</p>
                    <form>
                        <input type="text" placeholder="Email" />
                        <input type={showInput ? 'text' : 'password'} placeholder="Password" />
                        <p className="pass-reset"><a href="http://www.google.com">Forgot password?</a></p>
                        <input type="submit" value="Sign in"/>
                    </form>
                    <p className="signup-call">Not a member? Get started <a href="http://www.google.com">here</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;