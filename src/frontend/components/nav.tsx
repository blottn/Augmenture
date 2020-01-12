import * as React from 'react';

export type NavProps = {
    user: string;
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
                    <p className="aug-nav-head">Home</p>
                    <p className="aug-nav-head">Recents</p>
                    <p className="aug-nav-head">Starred</p>
                    <p className="aug-nav-head">Integrations</p>
                </div>
                <div className="aug-nav-footer">
                    <button className="btn btn-outline-light">Log Out</button>
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
