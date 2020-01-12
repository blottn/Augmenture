import * as React from 'react';
import * as Cookies from 'js-cookie';

export type NavProps = {
    user: string;
}

function logout() {
    Cookies.remove('access_token');
    window.location.href = '/';
}

const withNav = <P extends {}>(Page):
    React.FunctionComponent<P & NavProps>
    & {bundleSrc: string} => {
    const nav = ({ user, ...rest }): JSX.Element => (
        <div className="flex flex-nowrap aug-nav-root">
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
                        <p className="aug-nav-head">Home</p><p>🏠</p>
                        <p className="aug-nav-head">Recents</p><p>🕙</p>
                        <p className="aug-nav-head">Starred</p><p>✨</p>
                        <p className="aug-nav-head">Integrations</p><p>⇥</p>
                    </div>
                </div>
                <div className="aug-nav-footer">
                    <button className="btn btn-outline-light" onClick={logout}>Logout</button>
                </div>
            </div>
            <div className="fill aug-nav-page">
                <Page {...rest} />
            </div>
        </div>
    );
    nav.bundleSrc = Page.bundleSrc;
    return nav;
};


export default withNav;
