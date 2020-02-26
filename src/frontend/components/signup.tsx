import Cookies from 'js-cookie';
import * as React from 'react';
import Typist from 'react-typist';
import $ from 'jquery';

import Pong from './pong';

export const Banner = (): JSX.Element => (
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

export class Signup extends React.Component<{}, { loading: boolean; stage: string}> {
    constructor(props) {
        super(props);
        this.state = {
            stage: 'choosing',
            loading: false,
        };
    }
    
    // handlers
    signup(e): boolean {
        this.setState(({ loading, ...rest}) => {
            if (!loading) {
                return { loading: true, ...rest };
            }
            return {loading, ...rest};
        });

        const form = {};
        new FormData($('#signup-form')[0] as HTMLFormElement).forEach((value, key) => {
            form[key] = value;
        });

        $.ajax('http://localhost:3000/signup', {
            data: form,
            method: 'POST',
            success: (data) => {
                Cookies.set('access_token', data.accessToken);
                // redirect
                window.location.assign('http://localhost:3000/home');
            },
            error: () => {
                // reset form
                this.setState(({loading, ...rest}) => {
                    if (loading) {
                        return { loading: false, ...rest };
                    }
                    return {loading, ...rest};
                });
            },
        });
        e.preventDefault();
        return false;
    }

    beginLogin(e): boolean {
        this.setState(({stage, ...rest}) => {
            return {stage: 'login', ...rest};
        });
        return true;
    }

    beginSignup(e): boolean {
        this.setState(({stage, ...rest}) => {
            return {stage: 'signup', ...rest};
        });
        return true;
    }

    back(e): boolean {
        this.setState(({stage, ...rest}) => {
            return {stage: 'choosing', ...rest};
        });
        return true;
    }
    choice(): JSX.Element {
        return (
            <div className="">
                <button
                    className="btn btn-light btn-block signup-button"
                    onClick={this.beginSignup.bind(this)}
                >
                    Signup
                </button>
                <button
                    className="btn btn-primary btn-block signup-button"
                    onClick={this.beginLogin.bind(this)}
                >
                    Login
                </button>
            </div>
        );
    }

    signupForm(): JSX.Element {
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
                        onClick={this.back.bind(this)}>
                            Back
                    </button>
                    <button className="btn btn-primary float-right" type="submit">
                        Signup
                    </button>
                </div>
            </form>
        );
    }

    loginForm(): JSX.Element {
        return (
            <form>
                <h4>Login</h4>
                <hr className="signup-bar" />
                <input className="form-control my-1" placeholder="Display Name" type="text" name="uname"/>
                <input className="form-control my-1" placeholder="Password" type="password" name="pw"/>
                <div className="flex flex-spaced">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={this.back.bind(this)}>
                            Back
                    </button>
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        );
    }

    renderContents(): JSX.Element {
        const { loading, stage } = this.state;
        if (loading) {
            return (<Pong />);
        } else if (stage === 'choosing') {
            return this.choice();
        } else if (stage === 'login') {
            return this.loginForm();
        } else {
            return this.signupForm();
        }
    }

    render(): JSX.Element {
        return (
            <div className="flex flex-column aug-card signup-card">
                {this.renderContents()}
            </div>
        );
    }
}



