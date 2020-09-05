import * as React from 'react';
import * as Cookies from 'js-cookie';

function logout(): void {
    Cookies.remove('access_token');
    window.location.href = '/';
}

const withNav = (Page) => {
    const nav = ({ user, ...rest }) => (
        <div className="aug-nav-root">
            <div className="flex flex-column aug-nav text-center">
                <div className="flex flex-column aug-nav-main">
                    <h2>
                        <span className="text-augmenture">
                            A
                        </span>
                    </h2>
                    <p className="aug-nav-user">{ user }</p>
                    <hr className="aug-hr" />
                    <div className="aug-nav-parts">
                        <p className="aug-nav-head">Home</p>
                        <p>
                            <span role="img" aria-label="home icon">🏠</span>
                        </p>
                        <p className="aug-nav-head">Recents</p>
                        <p>
                            <span role="img" aria-label="clock icon">🕙</span>
                        </p>
                        <p className="aug-nav-head">Starred</p>
                        <p>
                            <span role="img" aria-label="stars icon">✨</span>
                        </p>
                        <p className="aug-nav-head">Integrations</p>
                        <p>⇥</p>
                    </div>
                </div>
                <div className="aug-nav-footer">
                    <button className="btn btn-outline-light" onClick={logout} type="button">Logout</button>
                </div>
            </div>
            <div className="fill">
                <Page {...rest} />
            </div>
        </div>
    );
    nav.bundleSrc = Page.bundleSrc;
    return nav;
};


export default withNav;
