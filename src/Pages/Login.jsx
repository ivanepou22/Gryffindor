import React from 'react'
import './Login.css'

function Login() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Login</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="/"><i className="lni lni-home"></i> Home</a></li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="account-login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <form className="card login-form" method="post">
                                <div className="card-body">
                                    <div className="title">
                                        <h3>Login Now</h3>
                                        <p>You can login using your social media account or email address.</p>
                                    </div>
                                    <div className="social-login">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-12"><a className="btn facebook-btn" href="/"><i className="lni lni-facebook-filled"></i> Facebook
                                                login</a></div>
                                            <div className="col-lg-4 col-md-4 col-12"><a className="btn twitter-btn" href="/"><i className="lni lni-twitter-original"></i> Twitter
                                                login</a></div>
                                            <div className="col-lg-4 col-md-4 col-12"><a className="btn google-btn" href="/"><i className="lni lni-google"></i> Google login</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alt-option">
                                        <span>Or</span>
                                    </div>
                                    <div className="form-group input-group">
                                        <label for="reg-fn">Email</label>
                                        <input className="form-control" type="email" id="reg-email" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <label for="reg-fn">Password</label>
                                        <input className="form-control" type="password" id="reg-pass" required />
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between bottom-content">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                                            <label className="form-check-label">Remember me</label>
                                        </div>
                                        <a className="lost-pass" href="/">Forgot password?</a>
                                    </div>
                                    <div className="button">
                                        <button className="btn" type="submit">Login</button>
                                    </div>
                                    <p className="outer-link">Don't have an account? <a href="/register">Register here </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login