function Login() {
    return (
        <div className="container-fluid" id="login">
            <div className="container login-container">
                <h1>Welcome to Yum Eutopia!</h1>
                <p>Throw in your credentials and let's get cookin'.</p>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <p><a href="http://www.google.com">Forgot password?</a></p>
                    <input type="submit" value="Sign in"/>
                </form>
                <p>Not a member? Get started <a href="http://www.google.com">here</a>.</p>
            </div>
        </div>
    )
}

export default Login;