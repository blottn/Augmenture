import * as React from 'react';

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


export const Signup = (): JSX.Element => (
    <form className="flex flex-column card signup-card">
        <h4>Signup</h4>
        <hr />
        <input className="form-control my-1" placeholder="display name" type="text" name="uname" />
        <input className="form-control my-1" placeholder="email" type="email" name="emai" />
        <input className="form-control my-1" placeholder="password" type="password" name="pw" />
        <input className="btn btn-primary my-2" type="submit" />
    </form>
);
