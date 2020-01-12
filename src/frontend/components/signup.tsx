import Cookies from 'js-cookie';
import * as React from 'react';
import $ from 'jquery';
import Pong from './pong';

export const Banner = (): JSX.Element => (
    <div className="fill flex flex-wrap banner">
        <div>
            <h1>Augmenture</h1>
            <p>
                <strong>
                    Create
                    <span className="banner-adjective"> amazing </span>
                    D&D campaign Notes!
                </strong>
            </p>
        </div>
    </div>
);

export class Signup extends React.Component<{}, { loading: boolean}> {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    signup(e): boolean {
        this.setState((state) => {
            if (!state.loading) {
                return { loading: true };
            }
            return state;
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
                this.setState((state) => {
                    if (state.loading) {
                        return { loading: false };
                    }
                    return state;
                });
            },
        });
        e.preventDefault();
        return false;
    }

    renderForm(): JSX.Element {
        return (
            <form id="signup-form" onSubmit={this.signup.bind(this)}>
                <h4>Signup</h4>
                <hr className="signup-bar" />
                <input className="form-control my-1" placeholder="display name" type="text" name="uname" />
                <input className="form-control my-1" placeholder="email" type="email" name="email" />
                <input className="form-control my-1" placeholder="password" type="password" name="pw" />
                <input className="btn btn-outline-primary my-2 float-right" type="submit" />
            </form>
        );
    }

    renderContents(): JSX.Element {
        const { loading } = this.state;
        if (loading) {
            return (<Pong />);
        }
        return this.renderForm();
    }

    render(): JSX.Element {
        return (
            <div className="flex flex-column aug-card signup-card">
                {this.renderContents()}
            </div>
        );
    }
}
