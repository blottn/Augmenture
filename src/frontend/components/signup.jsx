import Cookies from 'js-cookie';
import * as React from 'react';
import Typist from 'react-typist';
import $ from 'jquery';

import Pong from './pong.jsx';

export const Banner = () => (
    <div className="fill flex flex-wrap banner">
        <div>
            <h1>Augmenture</h1>
            <p>
                <strong>
                    <Typist className="banner-adjective">D&D campaign notes that are amazing</Typist>
                </strong>
            </p>
        </div>
    </div>
);

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 'choosing',
            loading: false,
        };
    }

    // handlers
    signup(e) {
        this.setState(({ loading, ...rest }) => {
            if (!loading) {
                return { loading: true, ...rest };
            }
            return { loading, ...rest };
        });

        const form = {};
        new FormData($('#signup-form')[0]).forEach((value, key) => {
            form[key] = value;
        });

        $.ajax('/signup', {
            data: form,
            method: 'POST',
            success: (data) => {
                Cookies.set('access_token', data.accessToken);
                // redirect
                window.location.assign('/home');
            },
            error: () => {
                // reset form
                this.setState(({ loading, ...rest }) => {
                    if (loading) {
                        return { loading: false, ...rest };
                    }
                    return { loading, ...rest };
                });
            },
        });
        e.preventDefault();
        return false;
    }

    beginLogin() {
        this.setState(({ ...rest }) => ({ ...rest, stage: 'login' }));
        return true;
    }

    beginSignup() {
        this.setState(({ ...rest }) => ({ ...rest, stage: 'signup' }));
        return true;
    }

    back() {
        this.setState(({ ...rest }) => ({ ...rest, stage: 'choosing' }));
        return true;
    }

    choice() {
        return (
            <div className="">
                <button
                    className="btn btn-secondary btn-block signup-button"
                    onClick={this.beginSignup.bind(this)}
                    type="button"
                >
                    Signup
                </button>
                <button
                    className="btn btn-primary btn-block signup-button"
                    onClick={this.beginLogin.bind(this)}
                    type="button"
                >
                    Login
                </button>
            </div>
        );
    }

    signupForm() {
        return (
            <form id="signup-form" onSubmit={this.signup.bind(this)}>
                <h4>Signup</h4>
                <hr className="signup-bar" />
                <input className="form-control my-1" placeholder="display name" type="text" name="uname" />
                <input className="form-control my-1" placeholder="email" type="email" name="email" />
                <input className="form-control my-1" placeholder="password" type="password" name="pw" />
                <div className="flex flex-spaced">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={this.back.bind(this)}
                        type="button"
                    >
                            Back
                    </button>
                    <button className="btn btn-primary float-right" type="submit">
                        Signup
                    </button>
                </div>
            </form>
        );
    }

    loginForm() {
        return (
            <form>
                <h4>Login</h4>
                <hr className="signup-bar" />
                <input className="form-control my-1" placeholder="Display Name" type="text" name="uname" />
                <input className="form-control my-1" placeholder="Password" type="password" name="pw" />
                <div className="flex flex-spaced">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={this.back.bind(this)}
                    >
                            Back
                    </button>
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
            </form>
        );
    }

    renderContents() {
        const { loading, stage } = this.state;
        if (loading) {
            return (<Pong />);
        }
        if (stage === 'choosing') {
            return this.choice();
        }
        if (stage === 'login') {
            return this.loginForm();
        }
        return this.signupForm();
    }

    render() {
        return (
            <div className="flex flex-column aug-card signup-card">
                {this.renderContents()}
            </div>
        );
    }
}
