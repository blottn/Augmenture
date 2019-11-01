import * as React from 'react';

import Pong from './pong';

export const Banner = (): JSX.Element => (
    <div className="fill flex flex-wrap banner">
        <div>
            <h1>Augmenture</h1>
            <p>
                <strong>
                    Create
                    <span className="adjective"> amazing </span>
                    D&D campaign Notes!
                </strong>
            </p>
        </div>
    </div>
);

export class Signup extends React.Component<{}, { loading: boolean}> {
    static signup(e): void {
        e.preventDefault();
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    renderForm(): JSX.Element {
        console.log(this.state);
        return (
            <form
                onSubmit={Signup.signup}
            >
                <h4>Signup</h4>
                <hr />
                <input className="form-control my-1" placeholder="display name" type="text" name="uname" />
                <input className="form-control my-1" placeholder="email" type="email" name="emai" />
                <input className="form-control my-1" placeholder="password" type="password" name="pw" />
                <input className="btn btn-primary my-2" type="submit" />
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
            <div className="flex flex-column card signup-card">
                {this.renderContents()}
            </div>
        );
    }
}
