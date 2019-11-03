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
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    signup(e): boolean {
        this.setState(() => ({ loading: true }));
        e.preventDefault();
        return false;
    }

    renderForm(): JSX.Element {
        return (
            <form onSubmit={this.signup.bind(this)}>
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
